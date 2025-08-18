import Btn from "./Btn"
import project1 from "../assets/images/project1.png"
import project2 from "../assets/images/project2.png"
import project3 from "../assets/images/project3.png"
import project4 from "../assets/images/project4.png"
import { FaExternalLinkAlt } from "react-icons/fa"

const WorksSection = () => {
    return (
        <section id="works" className="container-wrapper my-[6rem]">
            <div className="container">
                <h2 className="section-heading mb-14">WHAT HAVE I DONE?</h2>
                <div className="grid grid-cols-3 gap-x-8 gap-y-12">
                    <div className="project">
                        <div className="image">
                            <img className="project-img" src={project1} alt="project1-image" />
                            <a className="project-img-link" href={project1}><FaExternalLinkAlt /></a>
                        </div>
                        <h2>CarRental</h2>
                        <p>A modern, fully responsive and cross-browser compactible car rental website.</p>
                        <div className="tags">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                            <span>SwiperJS</span>
                        </div>
                        <div className="btns">
                            <Btn content={"Live Preview"} href="https://carrentalportfolio.netlify.app" dark />
                            <Btn content={"Code"} href="https://github.com/deauthor1234/car-rental" />
                        </div>
                    </div>
                    <div className="project">
                        <div className="image">
                            <img className="project-img" src={project2} alt="project2-image" />
                            <a className="project-img-link" href={project2}><FaExternalLinkAlt /></a>
                        </div>
                        <h2>StreamLab</h2>
                        <p>A responsive movie streaming website with modern feel and smooth scroll between sections.</p>
                        <div className="tags">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                            <span>SwiperJS</span>
                        </div>
                        <div className="btns">
                            <Btn content={"Live Preview"} href="https://streamlabproject.netlify.app" dark />
                            <Btn content={"Code"} href="https://github.com/deauthor1234/streamlab" />
                        </div>
                    </div>
                    <div className="project">
                        <div className="image">
                            <img className="project-img" src={project3} alt="project4-image" />
                            <a className="project-img-link" href={project3}><FaExternalLinkAlt /></a>
                        </div>
                        <h2>FoodKing</h2>
                        <p>A responsive restaurant landing page website with simple, interactive sections, delicious menu, and contact information.</p>
                        <div className="tags">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                            <span>TailwindCSS</span>
                        </div>
                        <div className="btns">
                            <Btn content={"Live Preview"} href="https://foodkingproject.netlify.app" dark />
                            <Btn content={"Code"} href="https://github.com/deauthor1234/foodking" />
                        </div>
                    </div>
                    <div className="project">
                        <div className="image">
                            <img className="project-img" src={project4} alt="project4-image" />
                            <a className="project-img-link" href={project4}><FaExternalLinkAlt /></a>
                        </div>
                        <h2>Furnitue</h2>
                        <p>Responsive furniture landing page built and designed to highlight stylish interiors with a clean, user-friendly interface.</p>
                        <div className="tags">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                            <span>TailwindCSS</span>
                        </div>
                        <div className="btns">
                            <Btn content={"Live Preview"} href="https://furnitue.netlify.app/" dark />
                            <Btn content={"Code"} href="https://github.com/deauthor1234/furnitue" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorksSection