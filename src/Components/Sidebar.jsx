import { Link, Links } from "react-router-dom";
import SocialIcons from './SocialIcons';

export default function Sidebar() {
  return (
    <aside className="w-full md:w-64
           flex flex-row md:flex-col
           items-center md:items-start
           justify-between md:justify-start
         bg-[#0B0B0B] border-r border-[#1f1f1f] p-8">
      <h1 className="hidden md:block text-2xl font-bold text-[#FF9F1C]">Norhan</h1>
      <nav className="hidden md:block  mt-10 space-y-4 text-gray-300">
        <Link to='/' className=" md:block hover:text-white">Home</Link>
        <Link to='/Projects' className="block hover:text-white">Projects</Link>
      </nav>
      <div className="flex ml-0 ">
        <SocialIcons />
      </div>
    </aside>
  );
}
