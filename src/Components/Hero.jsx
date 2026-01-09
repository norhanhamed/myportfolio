import { assets } from "../assets/Alldata";
import { Link } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";


export default function Hero() {

  return (
    <>
      <section className="flex items-center justify-between gap-10 ">
        {/* main contant defination */}
        <div >
          <p className="text-gray-400 text-xl md:text-lg">Hello, I'm</p>
          <h1 className="text-5xl font-bold mt-2">Norhan Hamed</h1>
          <h2 className="text-primary text-2xl mt-4">
            Frontend Developer
          </h2>
          <p className="text-gray-400 mt-6 lg:text-lg text-2xl max-w-xl">
            I build modern, responsive, and user-friendly web interfaces
            using React and modern frontend tools.
          </p>
          {/* links buttons */}
          <div className="  flex flex-col md:flex-row
                          items-start md:items-center
                          justify-start md:justify-between gap-5 mt-5 mb-5  flex-1">
            <Link to='projects' className="w-full md:w-auto">
              <button className="w-full md:w-auto px-6 md:px-2 lg:px-5 text-2xl lg:text-lg py-3  bg-primary hover:bg-[#424241c9] hover:text-primary hover:text-lg transition-all duration-300 ease-in-out text-black rounded-lg font-medium cursor-pointer"  >
                View Projects
              </button>
            </Link>

            <button className="flex items-center justify-between gap-4 w-full md:w-auto px-6 md:px-2 lg:px-5 text-2xl lg:text-lg py-3 border  border-primary rounded-lg cursor-pointer">
              Contact Me
              <div className="flex gap-2 text-2xl ">
                <a href="https://norhanhamed07@gmail.com" target="blank" className="text-white text-4xl md:text-2xl hover:text-gray-300 hover:scale-150 transition duration-300 cursor-pointer"> <MdOutlineEmail /> </a>
                <a href="https://wa.me/01014013679" target="_blank" className="text-primary text-4xl md:text-2xl hover:scale-150 transition duration-300 cursor-pointer"><FaWhatsapp /> </a>
              </div>
            </button>
            {/* cv */}
            <div className="flex px-3 gap-1 f-1 items-center justify-between  underline ">
              <a href="/NorhanHamedCV.pdf  " className=" text-xl " >CV</a>
              <a href="/NorhanHamedCV.pdf " download target="blank" className="text-2xl"> <FaDownload /> </a>
            </div>
          </div>

        </div>
        {/* my-img */}
        <div className="hidden md:block w-72 h-96 rounded-xl overflow-hidden border border-[#FF9F1C]/40 shadow-[0_0_40px_rgba(255,159,28,0.2)]">
          <img
            src={assets.profile}
            alt="profile"
            className="w-full h-full object-cover grayscale"
          />
        </div>

      </section>
      <div className="lg:text-lg text-xl text-gray-400 mt-5 flex flex-col gap-4">
        <p className=" flex md:items-center items-start gap-1 "> <span ><GoDotFill/></span> Frontend Developer, Computer and Information Science graduate from Mansoura University </p>
        <p className=" flex md:items-center items-start gap-1"> <span > <GoDotFill/> </span> Frontend React Diploma holder from Route Academy (2025). </p>
      </div>
    </>
  );
}
