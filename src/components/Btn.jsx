import { FaArrowRight } from "react-icons/fa"

const Btn = ({ dark, content, href }) => {
    const btnClass = "px-10 py-4 font-bold rounded-full border-2 flex items-center gap-2 cursor-pointer duration-200 group w-fit";

    return (
        <a href={href} className={
            dark 
            ? `bg-black hover:bg-white text-white hover:text-black ${btnClass}` 
            : `bg-white hover:bg-black text-black hover:text-white ${btnClass}`
        }>{content} <FaArrowRight className="group-hover:translate-x-2 duration-200" /></a>
    )
}

export default Btn
