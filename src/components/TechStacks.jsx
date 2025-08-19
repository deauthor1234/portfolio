import { BiLogoCss3, BiLogoFigma, BiLogoGit, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoNetlify, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi"

const TechStacks = ({ dark }) => {
    const classes = "inline-flex stack-track text-7xl py-4"

    return (
        <div className="overflow-hidden whitespace-nowrap w-full">
            <div className={dark ? `${classes} bg-black text-white` : `${classes}`}>
                <BiLogoHtml5 className="logo" />
                <BiLogoCss3 className="logo" />
                <BiLogoJavascript className="logo" />
                <BiLogoReact className="logo" />
                <BiLogoTailwindCss className="logo" />
                <BiLogoGit className="logo" />
                <BiLogoGithub className="logo" />
                <BiLogoFigma className="logo" />
                <BiLogoNetlify className="logo" />
                <BiLogoHtml5 className="logo" />
                <BiLogoCss3 className="logo" />
                <BiLogoJavascript className="logo" />
                <BiLogoReact className="logo" />
                <BiLogoTailwindCss className="logo" />
                <BiLogoGit className="logo" />
                <BiLogoGithub className="logo" />
                <BiLogoFigma className="logo" />
                <BiLogoNetlify className="logo" />
            </div>
        </div>
    )
}

export default TechStacks