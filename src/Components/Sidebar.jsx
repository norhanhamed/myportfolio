import { Link, Links } from "react-router-dom";
import SocialIcons from './SocialIcons';

export default function Sidebar() {
  return (
    <div className=" hidden lg:block  ">
    <aside className="w-full :w-64
           flex flex-row lg:flex-col
           items-center lg:items-start
           justify-between lg:justify-start
         bg-[#0B0B0B] border-r border-[#1f1f1f] p-8">
      <h1 className=" text-2xl font-bold text-[#FF9F1C]">Norhan</h1>
      <nav className=" mt-10 space-y-4 text-gray-300">
        <Link to='/' className="  hover:text-white">Home</Link>
        <Link to='/Projects' className="block hover:text-white">Projects</Link>
      </nav>
      <div >
        <SocialIcons />
      </div>
    </aside>
    </div>
  );
}






   