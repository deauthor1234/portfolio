import { BiLogoCss3, BiLogoFigma, BiLogoGit, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoNetlify, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi"
import { DiPhotoshop } from "react-icons/di"

const TechStacks = ({ dark }) => {
    const classes = "inline-flex stack-track text-7xl max-[1025px]:text-6xl py-4 border-b border-gray-200"

    return (
        <div className="overflow-hidden whitespace-nowrap w-full">
            <div className={dark ? `${classes} bg-black text-white border-transparent` : `${classes}`}>
                <BiLogoHtml5 className="logo" />
                <BiLogoCss3 className="logo" />
                <BiLogoJavascript className="logo" />
                <BiLogoReact className="logo" />
                <BiLogoTailwindCss className="logo" />
                <BiLogoGit className="logo" />
                <BiLogoGithub className="logo" />
                <BiLogoFigma className="logo" />
                <BiLogoNetlify className="logo" />
                <DiPhotoshop className="logo" />
                <BiLogoHtml5 className="logo" />
                <BiLogoCss3 className="logo" />
                <BiLogoJavascript className="logo" />
                <BiLogoReact className="logo" />
                <BiLogoTailwindCss className="logo" />
                <BiLogoGit className="logo" />
                <BiLogoGithub className="logo" />
                <BiLogoFigma className="logo" />
                <BiLogoNetlify className="logo" />
                <DiPhotoshop className="logo" />
            </div>
        </div>
    )
}

export default TechStacks