import { FaExternalLinkAlt, FaGithub, FaGlobe } from "react-icons/fa"
import Btn from "./Btn"
const Work = ({ demoHref, des, img, desOnly, repoHref, tags, title, addClass }) => {
    return (
        <div className={`project ${addClass}`} data-aos="fade-up">
            <div className="image">
                <img className="project-img" src={img} alt={`${img}-image`} />
                <a className="project-img-link" onClick={() => window.open(img)}><FaExternalLinkAlt /></a>
            </div>
            <h2>{title}</h2>
            <p>{!desOnly && title} {des}</p>
            <div className="tags">
                {tags.map((tag) => (
                    <div className="tags">
                        <span>{tag}</span>
                    </div>
                ))}
            </div>
            <div className="btns">
                <Btn content={"Demo"} icon={<FaGlobe />} href={demoHref} dark />
                <Btn content={"Code"} icon={<FaGithub />} href={repoHref} />
            </div>
        </div>
    )
}

export default Work