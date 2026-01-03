import { Link, Links } from "react-router-dom";
import SocialIcons from './SocialIcons';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0B0B0B] border-r border-[#1f1f1f] p-8">
      <h1 className="text-2xl font-bold text-[#FF9F1C]">Norhan</h1>
      <nav className="mt-10 space-y-4 text-gray-300">
        <Link to='/' className="block hover:text-white">Home</Link>
        <Link to='/Projects' className="block hover:text-white">Projects</Link>
        <Link to='/contact' className="block hover:text-white">Contact</Link>
      </nav>
      <div className="flex ml-0 mt-20">
        <SocialIcons />
      </div>
    </aside>
  );
}
