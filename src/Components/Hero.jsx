import { assets } from "../assets/Alldata";

export default function Hero() {

  return (
    <>
    <section className="flex items-center justify-between gap-10">
      <div>
        <p className="text-gray-400">Hello, I'm</p>
        <h1 className="text-5xl font-bold mt-2">Norhan Hamed</h1>
        <h2 className="text-[#FF9F1C] text-2xl mt-4">
          Frontend Developer
        </h2>
        <p className="text-gray-400 mt-6 text-lg max-w-xl">
          I build modern, responsive, and user-friendly web interfaces
          using React and modern frontend tools.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-[#FF9F1C] text-black rounded-lg font-medium">
            View Projects
          </button>
          <button className="px-6 py-3 border border-[#FF9F1C] rounded-lg">
            Contact Me
          </button>
        </div>
      </div>

      <div className="w-72 h-96 rounded-xl overflow-hidden border border-[#FF9F1C]/40 shadow-[0_0_40px_rgba(255,159,28,0.2)]">
        <img
          src={assets.profile}
          alt="profile"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    
    </section>
      <div className="text-sm text-gray-400">
        I'm a Frontend Developer  studied at faculty of computer and information science Mansoura university.
      </div>
      </>
  );
}
