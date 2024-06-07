import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import md5 from "md5";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { v4 as uuidv4 } from "uuid";
import {
  collection,
  addDoc,
  orderBy,
  onSnapshot,
  query,
} from "firebase/firestore";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Avatar,
  Divider,
  Progress,
  IconButton,
  useColorMode,
  Textarea,
  AttachmentIcon,
  HStack,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faFileUpload } from "@fortawesome/free-solid-svg-icons";

// Initialize Firebase
const firebaseConfig = {

};

// Check if the Firebase app has already been initialized
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
const db = getFirestore(app);
const storage = getStorage(app);
const sensitiveWords = [
  "word1",
  "word2",
  // Add more sensitive words here
];

const ChatSystem = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState(null);
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messagesData);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    setUser({ displayName: `GSSOC'${Math.floor(Math.random() * 1000)}` });
  }, []);

  useEffect(() => {
    const storedDisplayName = localStorage.getItem("displayName");
    if (storedDisplayName) {
      setUser({ displayName: storedDisplayName });
    } else {
      const randomDisplayName = `User${Math.floor(Math.random() * 1000)}`;
      setUser({ displayName: randomDisplayName });
      localStorage.setItem("displayName", randomDisplayName);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() || file) {
      const filteredMessage = newMessage.replace(
        /\b(\w*[^a-zA-Z0-9]\w*)\b/g,
        (match) => match.replace(/[^a-zA-Z0-9]/g, "*")
      );

      const containsSensitiveWords = sensitiveWords.some((word) =>
        filteredMessage.toLowerCase().includes(word.toLowerCase())
      );

      if (containsSensitiveWords) {
        toast({
          title: "Message contains sensitive words",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      const messageData = {
        text: filteredMessage,
        createdAt: new Date(),
        user: {
          displayName: user.displayName,
          photoURL: `https://www.gravatar.com/avatar/${md5(
            user.displayName
          )}?d=identicon`,
        },
      };

      if (file) {
        const fileRef = ref(storage, `images/${uuidv4()}`);
        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          },
          (error) => {
            console.error("Error uploading image:", error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              messageData.imageURL = downloadURL;
              addDoc(collection(db, "messages"), messageData);
              setNewMessage("");
              setFile(null);
              setUploadProgress(0);
            });
          }
        );
      } else {
        addDoc(collection(db, "messages"), messageData);
        setNewMessage("");
      }
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setFile(file);
    } else {
      toast({
        title: "File size should be less than 5MB",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="120vh"
      w="100%"
      bg={colorMode === "light" ? "gray.100" : "gray.800"}
    >
      <Box
        bg={colorMode === "light" ? "white" : "gray.700"}
        borderRadius="md"
        boxShadow="md"
        p={6}
        w="100%"
        maxW="90%" // Adjust the maximum width as needed
      >
        <Flex justify="space-between" mb={4} align="center">
          <Heading size="lg">Community Chat</Heading>
          <IconButton
            aria-label="Toggle Color Mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Flex>
        <Box overflowY="auto" maxH="500px" mb={4} w="100%">
          {messages.map((message) => (
            <VStack
              key={message.id}
              mb={4}
              alignItems={
                message.user.displayName === user.displayName
                  ? "flex-end"
                  : "flex-start"
              }
            >
              <HStack
                spacing={2}
                w="100%"
                justify={
                  message.user.displayName === user.displayName
                    ? "flex-end"
                    : "flex-start"
                }
              >
                {message.user.displayName !== user.displayName && (
                  <Avatar
                    src={message.user.photoURL}
                    name={message.user.displayName}
                    size="sm"
                  />
                )}
                <Box
                  bg={
                    message.user.displayName === user.displayName
                      ? "blue.500"
                      : colorMode === "light"
                      ? "gray.300"
                      : "gray.600"
                  }
                  color={
                    message.user.displayName === user.displayName
                      ? "white"
                      : colorMode === "light"
                      ? "black"
                      : "white"
                  }
                  p={2}
                  borderRadius="md"
                  maxW="70%"
                >
                  <Text fontWeight="bold" mb={1}>
                    {message.user.displayName}
                  </Text>
                  <Text>{message.text}</Text>
                  {message.imageURL && (
                    <Box mt={2}>
                      <img
                        src={message.imageURL}
                        alt="Uploaded"
                        style={{ maxWidth: "100%" }}
                      />
                    </Box>
                  )}
                  <Text fontSize="xs" mt={1}>
                    {new Date(
                      message.createdAt.seconds * 1000
                    ).toLocaleString()}
                  </Text>
                </Box>
              </HStack>
            </VStack>
          ))}
        </Box>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Flex direction={{ base: "row" }} align="center" wrap="nowrap">
            <Textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              resize="none"
              flex={1}
              mr={{ base: 1, sm: 2 }}
              mb={{ base: 0, sm: 0 }}
              bg={colorMode === "light" ? "white" : "gray.700"}
              color={colorMode === "light" ? "black" : "white"}
              size={{ base: "sm", sm: "md" }}
            />
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              display="none"
              id="file-input"
            />
            <label htmlFor="file-input">
              <IconButton
                as="span"
                icon={<FontAwesomeIcon icon={faFileUpload} />}
                mr={{ base: 1, sm: 2 }}
                mb={{ base: 0, sm: 0 }}
                aria-label="Upload Image"
                size={{ base: "sm", sm: "md" }}
              />
            </label>
            {file && (
              <Box ml={2} position="relative">
                <Image
                  src={URL.createObjectURL(file)}
                  alt="Uploaded File"
                  boxSize="30px"
                  objectFit="cover"
                  borderRadius="sm"
                />
                <Text
                  fontSize="xs"
                  color="blue.500"
                  position="absolute"
                  bottom="-2"
                  left="0"
                >
                  File ready to send
                </Text>
              </Box>
            )}
            <IconButton
              type="submit"
              aria-label="Send"
              colorScheme="blue"
              icon={<FontAwesomeIcon icon={faPaperPlane} />}
              size={{ base: "sm", sm: "md" }}
            />
          </Flex>
          {uploadProgress > 0 && (
            <Progress value={uploadProgress} max="100" mt={2} />
          )}
        </form>
      </Box>
    </Flex>
  );
};
export default ChatSystem;
