import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer2() {
    return (
        <div className="flex items-center justify-between w-[90%] max-w-3xl mx-auto p-4 rounded-2xl bg-slate-700 backdrop-blur-md mt-4 mb-4">
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 md:gap-4 text-xl text-white">
                <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={23} className="hover:text-black transition-colors" />
                </a>
                <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={23} className="hover:text-pink-500 transition-colors" />
                </a>
                <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={23} className="hover:text-blue-600 transition-colors" />
                </a>
            </div>
            <div className="flex items-center gap-1.5 md:gap-3">
                <div className="flex flex-col justify-center" >
                    <h2 className="font-semibold text-white text-[16px] sm:text-[18px]">Hosein Mohammadi</h2>
                    <p className="text-white/60 text-[14px] sm:text-[16px] text-left">Front End Developer</p>
                </div>
                <Image
                    src="/image/hosein.png"
                    alt="Hosein Mohammadi"
                    width={60}
                    height={60}
                    className="rounded-full"
                />
            </div>
        </div >
    )
}



