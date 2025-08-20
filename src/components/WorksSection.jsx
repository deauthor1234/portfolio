import Btn from "./Btn"
import project1 from "../assets/images/project1.png"
import project2 from "../assets/images/project2.png"
import project3 from "../assets/images/project3.png"
import project4 from "../assets/images/project4.png"
import project5 from "../assets/images/project5.jpeg"
import { FaCode, FaExternalLinkAlt, FaGlobe } from "react-icons/fa"

const WorksSection = () => {
    return (
        <section className="container-wrapper my-[6rem]" id="works">
            <div className="container">
                <h2 className="section-heading mb-14" data-aos="fade-down">WHAT HAVE I DONE?</h2>
                <div className="grid grid-cols-3 gap-14">
                    <div className="project" data-aos="fade-up">
                        <div className="image">
                            <img className="project-img" src={project1} alt="project1-image" />
                            <a className="project-img-link" target="_blank" rel="noopener noreferrer" href={project1}><FaExternalLinkAlt /></a>
                        </div>
                        <h2>CarRental</h2>
                        <p>CarRental is a modern, fully responsive and cross-browser compactible car rental website with sleek sliders and simple UI.</p>
                        <div className="tags">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                            <span>SwiperJS</span>
                        </div>
                        <div className="btns">
                            <Btn content={"Demo"} icon={<FaGlobe />} href="https://carrentalportfolio.netlify.app" dark />
                            <Btn content={"Code"} icon={<FaCode />} href="https://github.com/deauthor1234/car-rental" />
                        </div>
                    </div>
                    <div className="project" data-aos="fade-down" data-aos-delay="200">
                        <div className="image">
                            <img className="project-img" src={project2} alt="project2-image" />
                            <a className="project-img-link" target="_blank" rel="noopener noreferrer" href={project2}><FaExternalLinkAlt /></a>
                        </div>
                        <h2>StreamLab</h2>
                        <p>StreamLab is a responsive movie streaming website, inspired by an online template, with modern feel and smooth scroll between sections.</p>
                        <div className="tags">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                            <span>SwiperJS</span>
                        </div>
                        <div className="btns">
                            <Btn content={"Demo"} icon={<FaGlobe />} href="https://streamlabproject.netlify.app" dark />
                            <Btn content={"Code"} icon={<FaCode />} href="https://github.com/deauthor1234/streamlab" />
                        </div>
                    </div>
                    <div className="project" data-aos="fade-up" data-aos-delay="400">
                        <div className="image">
                            <img className="project-img" src={project3} alt="project4-image" />
                            <a className="project-img-link" target="_blank" rel="noopener noreferrer" href={project3}><FaExternalLinkAlt /></a>
                        </div>
                        <h2>FoodKing</h2>
                        <p>FoodKing is a responsive restaurant landing page website inspired by an online design, with delicious menu, and contact information.</p>
                        <div className="tags">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                            <span>TailwindCSS</span>
                        </div>
                        <div className="btns">
                            <Btn content={"Demo"} icon={<FaGlobe />} href="https://foodkingproject.netlify.app" dark />
                            <Btn content={"Code"} icon={<FaCode />} href="https://github.com/deauthor1234/foodking" />
                        </div>
                    </div>
                    <div className="project" data-aos="fade-down" data-aos-delay="200">
                        <div className="image">
                            <img className="project-img" src={project4} alt="project4-image" />
                            <a className="project-img-link" target="_blank" rel="noopener noreferrer" href={project4}><FaExternalLinkAlt /></a>
                        </div>
                        <h2>Furnitue</h2>
                        <p>Furnitue is a responsive furniture landing page built and designed to highlight stylish interiors with a clean, user-friendly interface.</p>
                        <div className="tags">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                            <span>TailwindCSS</span>
                        </div>
                        <div className="btns">
                            <Btn content={"Demo"} icon={<FaGlobe />} href="https://furnitue.netlify.app/" dark />
                            <Btn content={"Code"} icon={<FaCode />} href="https://github.com/deauthor1234/furnitue" />
                        </div>
                    </div>
                    <div className="project" data-aos="fade-up" data-aos-delay="400">
                        <div className="image">
                            <img className="project-img left-[-17%] diff" src={project5} alt="project5-image" />
                            <a className="project-img-link" target="_blank" rel="noopener noreferrer" href={project5}><FaExternalLinkAlt /></a>
                        </div>
                        <h2>Online Resume</h2>
                        <p>A one-page responsive online résumé website with sidebar built for showcasing personal profile, skills, experience, and portfolio projects.</p>
                        <div className="tags">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                            <span>ReactJS</span>
                            <span>Aos</span>
                        </div>
                        <div className="btns">
                            <Btn content={"Demo"} icon={<FaGlobe />} href="https://onlineresumeproject.netlify.app/" dark />
                            <Btn content={"Code"} icon={<FaCode />} href="https://github.com/deauthor1234/online-resume" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorksSection