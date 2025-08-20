import { FaArrowRight } from "react-icons/fa"

const Btn = ({ dark, content, href, icon }) => {
    const btnClass = "px-10 py-4 text-[1.05rem] font-bold rounded-full border-2 flex items-center gap-2 cursor-pointer duration-200 group w-fit";

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={
            dark 
            ? `bg-black hover:bg-white text-white hover:text-black ${btnClass}` 
            : `bg-white hover:bg-black text-black hover:text-white ${btnClass}`
        }>{icon} {content} <FaArrowRight className="group-hover:translate-x-2 duration-200" /></a>
    )
}

export default Btn
