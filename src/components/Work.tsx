import { FaExternalLinkAlt, FaGithub, FaGlobe } from "react-icons/fa"
import Btn from "./Btn"

type WorkProps = {
    demoHref: string,
    des: string,
    img: string,
    desOnly?: boolean,
    repoHref?: string,
    tags: string[],
    title: string,
    style?: string
}

const Work = ({ demoHref, des, img, desOnly, repoHref, tags, title, style }: WorkProps) => {
    return (
        <div className="project" data-aos="fade-up">
            <div className="image">
                <img className="project-img" src={img} alt={`${img}-image`} />
                <a className="project-img-link" onClick={() => window.open(img)}><FaExternalLinkAlt /></a>
            </div>
            <h2>{title}</h2>
            <p>{!desOnly && title} {des}</p>
            <div className="tags">
                {tags.map((tag, id) => (
                    <div className="tags" key={id}>
                        <span>{tag}</span>
                    </div>
                ))}
            </div>
            <div className="btns">
                <Btn content={"Demo"} icon={<FaGlobe />} href={demoHref} dark />
                <Btn content={"Code"} icon={<FaGithub />} href={repoHref} style={style} />
            </div>
        </div>
    )
}

export default Work