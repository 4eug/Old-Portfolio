/* eslint-disable @next/next/no-img-element */
import {SiBehance, SiTwitter, SiGithub, SiDribbble, SiInstagram, SiLinkedin } from "react-icons/si";
import {
  AiFillGithub,
  AiOutlineDribbble,
  AiOutlineBehance,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineLinkedin
} from "react-icons/ai";

function GetInTouch() {
  return (
    <div className="px-4 py-2  md:ml-24 sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:max-w-screen-2xl 2xl:m-auto md:px-24 lg:px-8 lg:py-4">
        <div className="grid max-w-screen-xl xl:max-w-screen-2xl ">
           <div className="grid md:grid-cols-2 max-w-auto ml-2 md:ml-auto mt-0 md:mt-8">
            <h1 className="py-3 text-4xl md:text-7xl font-semibold ">
            Have an idea? Tell us about it
            </h1>
          </div>
          <h1 className="py-4 md:py-10 ml-2 text-2xl md:text-3xl">
          <a href="mailto:debraheug@gmail.com" target="_blank" rel="nofollow noopener noreferrer">
            debraheug@gmail.com
            </a>
            </h1>
        </div>
        <div className="mt-6">
            <ol className=" space-x-3 md:space-x-3">
              <li className="pl-3 md:pl-1 inline-flex items-center">
                <a href="https://github.com/4eug" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center text-lg ">
                  Github
                  <AiFillGithub size={30} />
                </a>
              </li>
              <li className="inline-flex">
                <a href="https://dribbble.com/4eug" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center text-lg ">
                  Dribbble
                  <AiOutlineDribbble size={30} />
                </a>
              </li>
              <li className="inline-flex">
                <a href="https://www.behance.net/debraheug" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center text-lg ">
                  Behance
                  <AiOutlineBehance size={30} />
                </a>
              </li>
              <li className="inline-flex">
                <a href="https://www.instagram.com/_.4eug/" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center text-lg ">
                  Instagram
                  <AiOutlineInstagram size={30} />
                </a>
              </li>
              <li className="inline-flex i">
                <a href="https://twitter.com/4eug_" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center text-lg ">
                  Twitter
                  <AiOutlineTwitter size={30} />
                </a>
              </li>
              <li className="inline-flex i">
                <a href="https://www.linkedin.com/in/eugene-debrah/" target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center text-lg ">
                  LinkedIn
                  <AiOutlineLinkedin size={30} />
                </a>
              </li>
            </ol>
          </div>     
        
      </div>
  );
}

export default GetInTouch;
