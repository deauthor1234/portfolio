import { FaBriefcase, FaEnvelope } from "react-icons/fa"
import Btn from "./Btn"
import { Link } from "react-scroll"
import { DiPhotoshop } from 'react-icons/di';
import { BiCodeCurly, BiLogoCss3, BiLogoFigma, BiLogoGit, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoNetlify, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi"

const AboutSection = () => {
    return (
        <section className="container-wrapper" id="about">
            <div className="container flex justify-between items-center gap-16">
                <div className="max-[1025px]:hidden overflow-hidden rounded-l-4xl size-full max-w-[30rem]" data-aos="fade-right">
                    <BiCodeCurly className="size-full" />
                </div>
                <div className="size-full">
                    <h2 className="section-heading" data-aos="fade-down">WHO AM I?</h2>
                    <p className="my-6" data-aos="fade" data-aos-delay="200">I am Oladapo Authority, I currently base in PortHarcourt, Rivers State, Nigeria. I am an ethusiastic frontend web developer with over 3 years of experience in building projects and learning to code. I build fully responsive and cross-browser compactible websites with modern design for small businesses and I can also work on frontend related projects.</p>
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
                        <span data-aos="zoom-in" data-aos-delay="900"><BiLogoNetlify /> Netlify</span>
                        <span data-aos="zoom-in" data-aos-delay="1000"><DiPhotoshop /> Adobe Photoshop</span>
                    </div>
                    <div className="flex gap-4 max-[506px]:flex-col" data-aos="fade-up">
                        <Btn to="contact" icon={<FaEnvelope />} dark={true} content="Hire Me" />
                        <Btn to="works" icon={<FaBriefcase />} content="See Projects" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection