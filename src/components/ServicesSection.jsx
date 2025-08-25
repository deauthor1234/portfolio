import { FaCode, FaRecycle, FaRegFileCode } from "react-icons/fa"
import Btn from "./Btn"
import { BiEdit, BiMailSend } from "react-icons/bi"
import Service from "./Service"

const ServicesSection = () => {
    return (
        <section id="services" className="container-wrapper mt-[6rem] py-24 bg-gray-100">
            <div className="container">
                <h2 className="section-heading" data-aos="fade-right">WHAT CAN I DO?</h2>
                <div className="grid grid-cols-3 max-[1025px]:grid-cols-2 gap-10 max-[1150px]:gap-6 mt-16 items-start mb-14">
                    <Service delay="0" icon={<FaRegFileCode />} title="Custom Website Creation" description="I can create modern and fully responsive custom websites that work on all devices and browsers for small businesses (cafes, restaurants, salons, bakeries, etc), firms, events and Individuals (portfolio, online resume)." />
                    <Service delay="200" icon={<FaRecycle />} title="PSD & Figma Design Conversion" description="I have experience in converting PSD, Figma, XD and PDF designs to responsive functional websites or web pages." />
                    <Service delay="400" icon={<FaCode />} title="Front-End Web Development" description="Primarily, I am a frontend web developer, I can collaborate with other developers and designers to build more complex projects as a team." />
                    <Service delay="600" icon={<BiMailSend />} title="Email Template" description="Having strong experience in using HTML & CSS, I can create nice looking engaging email templates for businesses and individuals that can be sent to customers and newsletter subscribers." />
                    <Service delay="800" icon={<BiEdit />} title="Website Redesign" description="Using proficient knowledge of CSS and TailwindCSS, I can transform websites or webpages with poor layout structure and outdated design into a modern look and feel." />
                </div>
                <div className="inline-flex cursor-pointer">
                    <Btn to="contact" content="Want a website? Contact" />
                </div>
            </div>
        </section>
    )
}

export default ServicesSection