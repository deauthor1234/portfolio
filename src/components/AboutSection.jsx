import { FaBriefcase } from "react-icons/fa"
import aboutImage from "../assets/images/profile2.jpg"
import Btn from "./Btn"
import { Link, Element } from "react-scroll"
import { BiLogoCss3, BiLogoFigma, BiLogoGit, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoNetlify, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi"

const AboutSection = () => {
    return (
        <Element className="container-wrapper my-[6rem]" id="about">
            <div className="container flex justify-between items-center gap-16">
                <div className="overflow-hidden rounded-l-4xl min-w-[30rem]" data-aos="fade-right">
                    <img className="saturate-0" src={aboutImage} alt="Preview" />
                </div>
                <div className="">
                    <h2 className="section-heading" data-aos="fade-down">WHO AM I?</h2>
                    <p className="mt-6 mb-6" data-aos="fade" data-aos-delay="200">I am Oladapo Authority, I base in PortHarcourt, Rivers State, Nigeria. I am an ethusiastic frontend web developer with over 3 years of experience in building projects and learning to code. I build fully responsive and cross-browser compactible websites with modern design for small business and I can also work on frontend related projects.</p>
                    <h3 className="text-xl font-bold" data-aos="fade-right">Tech Stack & Tools:</h3>
                    <div className="flex mt-4 mb-8 font-medium about-tech-stack gap-4 flex-wrap">
                        <span data-aos="zoom-in" data-aos-delay="100"><BiLogoHtml5 /> Html5</span>
                        <span data-aos="zoom-in" data-aos-delay="200"><BiLogoCss3 /> Css3</span>
                        <span data-aos="zoom-in" data-aos-delay="300"><BiLogoJavascript /> JavaScript</span>
                        <span data-aos="zoom-in" data-aos-delay="400"><BiLogoReact /> ReactJS</span>
                        <span data-aos="zoom-in" data-aos-delay="500"><BiLogoTailwindCss /> TailwindCSS</span>
                        <span data-aos="zoom-in" data-aos-delay="600"><BiLogoGit /> Git</span>
                        <span data-aos="zoom-in" data-aos-delay="700"><BiLogoGithub /> Github</span>
                        <span data-aos="zoom-in" data-aos-delay="800"><BiLogoFigma /> Figma</span>
                        <span data-aos="zoom-in" data-aos-delay="800"><BiLogoNetlify /> Netlify</span>
                    </div>
                    <div className="flex gap-4" data-aos="fade-up">
                        <Link to="contact">
                            <Btn dark={true} content="Hire Me" />
                        </Link>
                        <Link to="works">
                            <Btn icon={<FaBriefcase />} content="See Projects" />
                        </Link>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default AboutSection