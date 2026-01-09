import { Link, Outlet } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export default function Projects() {
  return (<>

    <section className='flex flex-col items-center justify-between'>
      <div className="flex flex-col ">  {/* top */}
        {/* heding and icons  */}
        <div className='flex itmes-center justify-around gap-7 '>
          {/* home icon  */}
          <div><Link to='/' className='text-5xl text-primary  lg:hidden block '><FaHome /> </Link></div>
          <h2 className="text-3xl font-semibold mb-10 "> All Projects </h2>
          {/* wats icon */}
          <div><a href="https://wa.me/01014013679" target="_blank" className=" text-5xl text-primary hover:scale-150 transition duration-300 cursor-pointer"><FaWhatsapp /> </a></div>
        </div>
        {/* naving */}
        <ul className='flex gap-4 lg:gap-10 items-center lg:text-xl text-[13px] md:text-[18px] text-gray-100 '>
          <li className=' hover:scale-105  border border-amber-100 shadow-amber-50 rounded-4xl px-4 py-1 '>
            < Link to='' > React</Link>
          </li>
          <li className=' hover:scale-105  border border-amber-100 shadow-amber-50 rounded-4xl px-4 py-1 '>
            < Link to='landingProjects' > landing page</Link>
          </li>
          <li className=' hover:scale-105  border border-amber-100 shadow-amber-50 rounded-4xl px-4 py-1 '>
            < Link to='education' >  Education</Link>
          </li>
        </ul>
      </div>
      {/* ProjectCard */}
      <div className=' mt-10 '>
        <Outlet />
      </div>
    </section>

  </>
  );
}
