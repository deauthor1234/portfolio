import { FaBriefcase, FaEnvelope } from "react-icons/fa"
import Btn from "./Btn"
import { BiLogoCss3, BiLogoGit, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoNetlify, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi"

const AboutSection = () => {
    return (
        <section className="flex justify-center pt-[6rem] max-[426px]:pt-16" id="about">
            <div className="container flex justify-between items-center gap-16 max-[1020px]:gap-24 max-[1045px]:gap-12 max-[1020px]:flex-col">
                <div className="size-full">
                    <h2 className="section-heading" data-aos="fade-down">WHO AM I?</h2>
                    <p className="my-8" data-aos="fade" data-aos-delay="200">I am Oladapo Authority, I currently base in PortHarcourt, Rivers State, Nigeria. I am an ethusiastic frontend web developer with over 3 years of experience in building projects and learning to code. I build fully responsive and cross-browser compactible websites with modern design for small businesses and I can also work on frontend related projects.</p>
                    <div className="flex gap-4 max-[520px]:flex-col" data-aos="fade-up">
                        <Btn to="contact" icon={<FaEnvelope />} dark={true} content="Hire Me" />
                        <Btn to="works" icon={<FaBriefcase />} content="See Projects" />
                    </div>
                </div>
                <div className="size-full flex flex-col gap-6">
                    <h3 className="text-3xl font-bold w-fit mx-auto mb-3 min-[1020px]:hidden border-b-2 border-dashed" data-aos="fade-down">Tech Stack</h3>
                    <div>
                        <h3 className="skill-cat-heading" data-aos="fade-left">Languages:</h3>
                        <div className="about-tech-stack">
                            <span data-aos="zoom-in" data-aos-delay="100"><BiLogoHtml5 /> Html5</span>
                            <span data-aos="zoom-in" data-aos-delay="200"><BiLogoCss3 /> Css3</span>
                            <span data-aos="zoom-in" data-aos-delay="300"><BiLogoJavascript /> JavaScript</span>
                            <span data-aos="zoom-in" data-aos-delay="500"><BiLogoTypescript /> TypeScript</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="skill-cat-heading" data-aos="fade-right">Frameworks:</h3>
                        <div className="about-tech-stack">
                            <span data-aos="zoom-in" data-aos-delay="100"><BiLogoReact /> ReactJS</span>
                            <span data-aos="zoom-in" data-aos-delay="200"><BiLogoTailwindCss /> TailwindCSS</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="skill-cat-heading" data-aos="fade-right">Deployment Tools:</h3>
                        <div className="about-tech-stack">
                            <span data-aos="zoom-in" data-aos-delay="100"><BiLogoGit /> Git</span>
                            <span data-aos="zoom-in" data-aos-delay="200"><BiLogoGithub /> Github</span>
                            <span data-aos="zoom-in" data-aos-delay="300"><BiLogoNetlify /> Netlify</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection