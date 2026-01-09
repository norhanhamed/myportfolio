import { FaGithub, FaLinkedinIn, FaWhatsapp, } from "react-icons/fa";

export default function SocialIcons() {
    return (
        <div className="flex flex-row md:flex-col ml-0 gap-3 float animate-float md:mt-20 mt-0 ">
            <a className="icon" 
            href="https://github.com/norhanhamed/norhanhamed"
            target="blank"
            >
                <FaGithub />
            </a>

            <a className="icon"
            href="https://www.linkedin.com/in/norhan-hamed-2295432a4/"
            target="blank"
            >
                <FaLinkedinIn />
            </a>

            <a className="icon "
                href="https://wa.me/01014013679"
                target="_blank"
            >
                <FaWhatsapp />
            </a>
        </div>
    );
}
