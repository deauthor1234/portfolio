import aboutImage from "../assets/images/profile2.jpg"
import Btn from "./Btn"

const AboutSection = () => {
    return (
        <section className="container-wrapper" id="about">
            <div className="container flex justify-between items-center gap-16">
                <div className="overflow-hidden rounded-l-4xl min-w-[30rem]" data-aos="fade-right">
                    <img className="saturate-0" src={aboutImage} alt="Preview" />
                </div>
                <div className="">
                    <h2 className="section-heading" data-aos="fade-down">WHO AM I?</h2>
                    <p className="my-6" data-aos="fade" data-aos-delay="200">I am Oladapo Authority, I base in PortHarcourt, Rivers State, Nigeria. I am an ethusiastic frontend web developer with over 3 years of experience in building projects and learning to code. I build fully responsive and cross-browser compactible websites with modern design for small business and I can also work on frontend related projects. I am proficient with web technologies like; HTML5, CSS3, JavaScript, TailwindCSS, ReactJS, Git & Github</p>
                    <div className="flex gap-4" data-aos="fade-up">
                        <Btn dark={true} content="Hire Me" href="#contact" />
                        <Btn content="See Projects" href="#works" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection