import { BiLogoGithub, BiLogoInstagramAlt, BiMailSend, BiSolidEnvelope, BiSolidPhone } from "react-icons/bi"
import ContactMedium from "./ContactMedium"

const ContactSection = () => {
    return (
        <section className="container-wrapper bg-gray-100 py-16" id="contact">
            <div className="container flex gap-10 max-lg:flex-col">
                <div className="w-full">
                    <h2 className="section-heading mb-12 max-[426px]:mb-10" data-aos="flip-right">HOW TO CONTACT ME?</h2>
                    <div className="flex flex-wrap text-2xl font-medium gap-4 ">
                        <ContactMedium delay="600" href="mailto:dimejioladapo573@gmail.com" icon={<BiSolidEnvelope />} label="Email" />
                        <ContactMedium delay="800" href="tel: +2349163147101" icon={<BiSolidPhone />} label="Phone" />
                        <ContactMedium delay="1000" href="https://www.instagram.com/authority.dev" icon={<BiLogoInstagramAlt />} label="Instagram" />
                        <ContactMedium delay="1200" href="https://github.com/deauthor1234" icon={<BiLogoGithub />} label="Github" />
                    </div>    
                </div>
                <form name="contact" className="w-full max-lg:mt-5" data-aos="zoom-in" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />

                    <p hidden>
                        <label>
                        Don't fill this out: <input name="bot-field" />
                        </label>
                    </p>

                    <div className="flex max-[640px]:flex-col gap-6 w-full">
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