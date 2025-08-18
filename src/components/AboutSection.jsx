import aboutImage from "../assets/images/Preview.png"
import Btn from "./Btn"

const AboutSection = () => {
    return (
        <section className="container-wrapper" id="about">
            <div className="container flex justify-between items-center gap-16">
                <div className="overflow-hidden rounded-4xl">
                    <img src={aboutImage} alt="Preview" />
                </div>
                <div className="min-w-[30rem]">
                    <h2 className="section-heading mb-6">WHO AM I?</h2>
                    <p className="my-6">I am Oladapo Authority, I base in PortHarcourt, Rivers State, Nigeria. I am an ethuthiastic frontend web developer with over 3 years of experience in building projects and learning to code. I build fully responsive and cross-browser compactible websites with modern design for small business and I can also work on frontend related projects.</p>
                    <div className="flex gap-4">
                        <Btn dark={true} content="Hire Me" />
                        <Btn content="See Projects" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection