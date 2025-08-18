import { FaCode, FaLaptopCode, FaSitemap } from "react-icons/fa"

const ServicesSection = () => {
    return (
        <section id="services" className="container-wrapper py-24 bg-gray-100">
            <div className="container">
                <h2 className="section-heading">WHAT CAN I DO?</h2>
                <div className="grid grid-cols-3 gap-10 mt-16 items-start">
                    <div className="service">
                        <FaLaptopCode />
                        <h3>Custom Website Creation</h3>
                        <p>I can create modern and fully responsive custom websites that work on all devices and browsers for small businesses (cafes, restaurants, salons, bakeries, etc), firms, events and Individuals (portfolio, online resume).</p>
                    </div>
                    <div className="service">
                        <FaSitemap />
                        <h3>PSD & Figma Design Conversion</h3>
                        <p>I have experience in converting PSD, Figma, XD and PDF designs to responsive functional websites or web pages.</p>
                    </div>
                    <div className="service">
                        <FaCode />
                        <h3>Frontend Web Development</h3>
                        <p>Primarily, I am a frontend web developer, I can collaborate with other developers and build bigger complex projects or create web applications using backend API systems.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection