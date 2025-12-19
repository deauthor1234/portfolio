import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-scroll";

const Btn = ({ dark, content, href, icon, to, style }) => {
    const btnClass = "px-10 py-4 max-[426px]:px-7 max-[426px]:py-3 max-[365px]:px-5 text-[1.05rem] font-bold rounded-full border-2 border-black flex items-center gap-2 cursor-pointer duration-200 group w-fit";

    return (
        <Link onClick={() => href && window.open(href)} to={to} smooth={true} target="_blank" rel="noopener noreferrer" className={
            dark 
            ? `bg-black hover:bg-white text-white hover:text-black ${btnClass} ${style}` 
            : `bg-white hover:bg-black text-black hover:text-white ${btnClass} ${style}`
        }>
            {icon} {content} <FaArrowRight className="group-hover:translate-x-2 duration-200" />
        </Link>
    )
}

export default Btn
