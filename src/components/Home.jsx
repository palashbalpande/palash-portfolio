import pic from '../../public/photo.avif'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to my Feed</span>
            <div className="flex space-x-2 text-2xl md:text-4xl">
            <h1>Hello, I'm a </h1>
            {/* <span className="text-red-700 font-bold"> Developer</span> */}
            <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
            />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              commodi cum sit quis inventore optio aperiam eligendi dolor
              similique officia impedit amet perspiciatis odio cumque maxime aut
              provident molestiae mollitia eveniet voluptates aliquid aliquam
              et, nostrum dicta? Atque, ex, placeat mollitia qui culpa unde
              necessitatibus temporibus magnam perferendis suscipit id.
            </p>
            <br />
            {/**Social Media Icons*/}
            <div className="flex flex-col text-center md:flex-row justify-between space-y-6 md:space-y-0">
                <div className="space-y-2">
                    <h1 className="font-bold">Also Checkout</h1>
                    <ul className="flex space-x-5 items-center justify-center">
                        <li>
                            {" "}
                            <FaLinkedin className="text-3xl cursor-pointer" />
                        </li>
                        <li>
                            {" "}
                            <FaGithub className="text-3xl cursor-pointer" />
                        </li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h1 className="font-bold">Tech Stack used </h1>
                    <div className="flex space-x-5 items-center justify-center">
                        <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full" />
                        <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full" />
                        <FaReact  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full" />
                        <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full" />
                        <SiRedux className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full" />
                        <DiJavascript className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full" />
                        <RiTailwindCssFill className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full" />
                    </div>
                </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img src={pic} className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
