import { BiMailSend } from "react-icons/bi"
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"

const ContactSection = () => {
    return (
        <section className="container-wrapper bg-gray-100 py-24 mt-24" id="contact">
            <div className="container flex gap-10">
                <div className="w-full">
                    <h2 className="section-heading mb-8" data-aos="flip-right">HOW YOU CAN CONTACT ME?</h2>
                    <div className="text-[1.1rem] font-medium">
                        <h3 data-aos="fade-left">Email: <span className="text-gray-800">dimejioladapo573@gmail.com</span></h3>
                        <h3 data-aos="fade-right" className="mt-4 mb-8">Phone: <span className="text-gray-800">+234 916 314 7101</span></h3>
                        <div className="flex font-extrabold text-4xl gap-6">
                            <a href="https://www.instagram.com/authority.dev/" data-aos="zoom-in" data-aos-delay="800"><FaInstagram /></a>
                            <a href="https://github.com/deauthor1234" data-aos="zoom-in" data-aos-delay="1000"><FaGithub /></a>
                            <a href="https://web.facebook.com/profile.php?id=100086251411134" data-aos="zoom-in" data-aos-delay="1200"><FaFacebook /></a>
                        </div>
                    </div>    
                </div>
                <form name="contact" className="w-full" data-aos="zoom-in" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />

                    <p hidden>
                        <label>
                        Don’t fill this out: <input name="bot-field" />
                        </label>
                    </p>

                    <div className="flex gap-6 w-full">
                        <input className="w-full bg-white px-6 py-3 border-2" type="text" name="name" placeholder="Name *" required />
                        <input className="w-full bg-white px-6 py-3 border-2" type="email" name="email" placeholder="Email *" required />
                    </div>
                    <input className="w-full bg-white px-6 py-3 my-6 border-2" type="text" name="subject" required placeholder="Subject *" />
                    <textarea className="w-full bg-white p-6 h-[12rem] border-2" name="message" placeholder="Message *" required></textarea>
                    <button type="submit" className="px-10 py-4 mt-5 text-[1.05rem] font-bold rounded-full border-2 flex items-center gap-2 cursor-pointer duration-200 group w-fit bg-black hover:bg-white text-white hover:text-black">Send <BiMailSend className="text-xl" /></button>
                </form>
            </div>
        </section>
    )
}

export default ContactSection