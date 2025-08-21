import { FaCode, FaGlobe, FaLaptopCode, FaSitemap } from "react-icons/fa"
import Btn from "./Btn"
import { BiSend } from "react-icons/bi"
import { Link } from "react-scroll"

const ServicesSection = () => {
    return (
        <section id="services" className="container-wrapper mt-[6rem] py-24 bg-gray-100">
            <div className="container">
                <h2 className="section-heading" data-aos="fade-right">WHAT CAN I DO?</h2>
                <div className="grid grid-cols-3 gap-10 mt-16 items-start mb-14">
                    <div className="service" data-aos="fade-down">
                        <FaGlobe />
                        <h3>Custom Website Creation</h3>
                        <p>I can create modern and fully responsive custom websites that work on all devices and browsers for small businesses (cafes, restaurants, salons, bakeries, etc), firms, events and Individuals (portfolio, online resume).</p>
                    </div>
                    <div className="service" data-aos="fade-down" data-aos-delay="200">
                        <FaSitemap />
                        <h3>PSD & Figma Design Conversion</h3>
                        <p>I have experience in converting PSD, Figma, XD and PDF designs to responsive functional websites or web pages.</p>
                    </div>
                    <div className="service" data-aos="fade-down" data-aos-delay="400">
                        <FaCode />
                        <h3>Frontend Web Development</h3>
                        <p>Primarily, I am a frontend web developer, I can collaborate with other developers and designers to build more complex projects as a team.</p>
                    </div>
                    <div className="service" data-aos="fade-down" data-aos-delay="600">
                        <BiSend />
                        <h3>Email Template</h3>
                        <p>Having strong experience in using HTML & CSS, I can create nice looking engaging email templates for businesses and indiiduals that can be sent to customers and newsletter subscribers.</p>
                    </div>
                    <div className="service" data-aos="fade-down" data-aos-delay="800">
                        <FaLaptopCode />
                        <h3>Website Redesign</h3>
                        <p>Using proficient knowledge of CSS and TailwindCSS, I can transform websites or webpages with poor layout structure and outdated design into a modern look and feel.</p>
                    </div>
                </div>
                <Link to="contact">
                    <Btn content="Want a website? Contact" />
                </Link>
            </div>
        </section>
    )
}

export default ServicesSection