import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "../components/homepage/Card";
import Navbar from "../components/Navbar";
import SocialFollow from "../components/homepage/SocialFollow";
import Schedule from "../components/homepage/Schedule";
export default function Home() {
  return (
    <div>
      <Head>
        <title>
          GirlScipt Summer of Code 2022 | GirlScript Foundation India
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SocialFollow />
      <div className="container mx-auto my-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50">
        <div className="first-section mb-10">
          <div className="basis-1/2">
            <p className="text-black font-bold text-4xl 2.25rem 3rem mb-10">
              <span className="text-primary_orange-0">GSSoC </span>
              2022
              <br />
              is here! &nbsp;
            </p>
            <p className="font-serif font-medium text-2xl 1.5rem 2rem text-gray-800 mb-24">
              GirlScript Summer of Code is a 3-month long
              <br />
              <span className="text-primary_orange-0">#OpenSource &nbsp;</span>
              program by GirlScript Foundation.
            </p>
            <div className="flex items-center mb-44 md:mb-52 lg:mb-56">
              <button className="bg-primary_orange-0 text-md text-white font-bold px-4 py-4 rounded md:text-2xl md:py-6">
                Register Here
              </button>
              <p className="font-serif font-medium text-md text-primary_orange-0 ml-9 md:text-2xl">
                Learn More
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-wrap  mb-24">
          <img src="/assets/Rectangle.png" />
          <div className="basis-full md:basis-6/12 md:order-last lg:basis-1/2 lg:order-last">
            <img
              className=" mt-4 mb-8 md:mb-9 md:mt-0"
              src="/assets/GS_logo_Black.png"
            />
            <p className="text-black font-semibold text-4xl 2.25rem 3rem mb-5">
              About <span className="text-primary_orange-0">GirlScript </span>
              Foundation
            </p>
            <p className="font-serif text-1xl text-black-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              pulvinar malesuada tortor orci nullam rhoncus et. Purus, massa
              orci aliquet neque. Nulla urna viverra tempus nullam commodo.
              Fringilla turpis sit laoreet pellentesque sit. Ultrices consequat
              tempor nisi, tincidunt tortor, elit pharetra, nulla. Enim a quam
              tortor, sodales. Vitae placerat egestas pellentesque senectus.
            </p>
          </div>
        </div>

        <div className="flex justify-between flex-wrap mb-24">
          <div className="w-560px md:w-1/2 lg:my-4 lg:px-4 lg:w-2/5">
            <img className="mb-10" src="/assets/GSSoC_logo_Black.png" />
            <p className="text-primary_orange-0 font-semibold text-4xl 2.25rem 3rem mb-10">
              <span className="text-black text-4xl 2.25rem 3rem">
                About
                <br />
                GirlScript{" "}
              </span>
              Summer of Code
            </p>
            <p className="font-serif text-xl 1.25rem 1.75rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit
              tortor aliquet mauris. Sodales odio vitae morbi nulla sit turpis
              sem at. Nibh in consectetur aliquam in ante pulvinar vehicula sed.
            </p>
          </div>
          <img className="mt-8 md:mt-4 lg:mt-0" src="/assets/Frame.png" />
        </div>

        <div className="organisation mb-24">
          <p className="font-serif font-semibold text-gray-800 text-4xl 2.25rem 3rem mb-8">
            Some of the{" "}
            <span className="text-primary_orange-0 text-4xl 2.25rem 3rem">
              participating organisations!
            </span>
          </p>
          <div className="org__box flex flex-row items-center flex-wrap">
            <img
              className="w-20 h-auto mr-12 mb-10 md:mb-0"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Participating_projects/logo1.png?raw=true"
              alt="logo"
            />
            <img
              className="w-20 h-auto mr-12 mb-10 md:mb-0"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Participating_projects/logo2.png?raw=true"
              alt="logo"
            />
            <img
              className="w-20 h-auto mr-12"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Participating_projects/logo3.png?raw=true"
              alt="logo"
            />
            <img
              className="w-20 h-auto mr-12"
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Participating_projects/logo4.png?raw=true"
              alt="logo"
            />
            <div>
              <p className="font-serif font-medium text-4xl text-gray-800">
                and more ...
              </p>
            </div>
          </div>
        </div>
        <div className="be-part-of mb-24">
          <p className="font-serif font-semibold text-justify text-gray-800 text-4xl 2.25rem 3rem ">
            <span className="text-primary_orange-0 text-4xl 2.25rem 3rem">
              Be a part of{" "}
            </span>
            GSSoC 2022!
          </p>
          <div className="container my-12 mx-auto">
            <div className="flex flex-wrap justify-between -mx-1 lg:-mx-4 md:justify-items-stretch">
              {/* Card-1 */}
              <Card
                title="Participate in GSSoC 2021"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed lectus non magna enim dignissim amet semper. Quisque nisl sed ipsum in id sit volutpat pulvinar. Tortor placerat tincidunt enim posuere hendrerit aliquet amet quis."
                btntext="Register"
              />
              {/* Card-2 */}
              <Card
                title="Be a Mentor"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed lectus non magna enim dignissim amet semper. Quisque nisl sed ipsum in id sit volutpat pulvinar. Tortor placerat tincidunt enim posuere hendrerit aliquet amet quis."
                btntext="Register"
              />
            </div>
          </div>
          <div className="container my-12 mx-auto ">
            <div className="flex flex-wrap justify-between -mx-1 lg:-mx-4">
              {/* Card-3 */}
              <Card
                title="Calling all NGOs"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed lectus non magna enim dignissim amet semper. Quisque nisl sed ipsum in id sit volutpat pulvinar. Tortor placerat tincidunt enim posuere hendrerit aliquet amet quis."
                btntext="Submit your project"
              />
              {/* Card-4 */}
              <Card
                title="Be a Sponsor"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed lectus non magna enim dignissim amet semper. Quisque nisl sed ipsum in id sit volutpat pulvinar. Tortor placerat tincidunt enim posuere hendrerit aliquet amet quis."
                btntext="Know More"
              />
            </div>
          </div>
        </div>
      </div>
      {/* sponsors */}
      <div className="sponsors__container flex flex-row justify-center">
        <div className="sponsors__wrapper flex flex-col w-[1136px] mt-[93px]">
          <div className="sponsors__header mb-9">
            <p className="font-serif font-semibold text-gray-800 text-4xl leading-10">
              Our Sponsors
            </p>
          </div>
          {/* sponsors card container */}
          <div className="sponsors__card__container flex flex-row justify-between">
            {/* card1 */}
            <div className="sponsor__card__wrapper w-[368px] h-[228px] px-9 py-9 shadow-xl rounded">
              <p className="text-[#ff7a19] font-serif font-semibold text-3xl mb-9">
                Gold Sponsor
              </p>
              <img
                src="https://gssoc.girlscript.tech/images/sponsor/2021/do_blue.svg"
                alt="logo"
              />
            </div>
            {/* card2 */}
            <div className="sponsor__card__wrapper w-[368px] h-[228px] px-9 py-9 shadow-xl rounded">
              <p className="text-[#ff7a19] font-serif font-semibold text-3xl  mb-9">
                Silver Sponsor
              </p>
              <img
                src="https://gssoc.girlscript.tech/images/sponsor/2021/linode.svg"
                alt="logo"
              />
            </div>
            {/* card3 */}
            <div className="sponsor__card__wrapper w-[368px] h-[228px] px-9 py-9 shadow-xl rounded">
              <p className="text-[#ff7a19] font-serif font-semibold text-3xl  mb-9">
                Bronze Sponsor
              </p>
              <img
                src="https://gssoc.girlscript.tech/images/sponsor/2021/honeybadger.svg"
                alt="logo"
              />
            </div>
          </div>
          <div className="other__sponsors px-9 py-9 shadow-xl rounded mt-9">
            <div className="other__sponsors__title">
              <p className="text-[#ff7a19] font-serif font-semibold text-3xl  mb-9">
                Other Sponsors
              </p>
            </div>
            {/* row 1 */}
            <div className="sponsors__row__one flex flex-row mb-9">
              <img
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/taskade-logo.png"
                alt="logo"
              />
              <img
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/sticker-mule.png"
                alt="logo"
              />
              <img
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/xyz-logo-color.png"
                alt="logo"
              />
            </div>
            <div className="sponsors__row__two flex flex-row">
              <img
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/sketch-logo-light.png"
                alt="logo"
              />
              <img
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/egghead_logo.png"
                alt="logo"
              />
              <img
                className="h-12 mr-14"
                src="https://gssoc.girlscript.tech/images/sponsor/2021/ORM_logo_red_rgb.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Schedule */}
      <Schedule />
    </div>
  );
}
