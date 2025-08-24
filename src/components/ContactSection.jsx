import { BiLogoGithub, BiLogoInstagramAlt, BiMailSend, BiSolidEnvelope, BiSolidPhone } from "react-icons/bi"

const ContactSection = () => {
    return (
        <section className="container-wrapper bg-gray-100 py-16 mt-24" id="contact">
            <div className="container flex gap-10">
                <div className="w-full">
                    <h2 className="section-heading mb-12" data-aos="flip-right">HOW YOU CAN CONTACT ME?</h2>
                    <div className="flex flex-col text-4xl font-medium gap-4">
                        <a className="flex items-center gap-2 w-fit" target="_blank" rel="noopener noreferrer" href="mailto:dimejioladapo573@gmail.com" data-aos="zoom-in" data-aos-delay="600"><BiSolidEnvelope /> <span className="text-lg">Email: dimejioladapo573@gmail.com</span></a>
                        <a className="flex items-center gap-2 w-fit" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/authority.dev/" data-aos="zoom-in" data-aos-delay="800"><BiLogoInstagramAlt /> <span className="text-lg">Instagram: authority.dev</span></a>
                        <a className="flex items-center gap-2 w-fit" target="_blank" rel="noopener noreferrer" href="https://github.com/deauthor1234" data-aos="zoom-in" data-aos-delay="1000"><BiLogoGithub /> <span className="text-lg">Github: deauthor1234</span></a>
                        <a className="flex items-center gap-2 w-fit" target="_blank" rel="noopener noreferrer" href="tel: +2349163147101" data-aos="zoom-in" data-aos-delay="1200"><BiSolidPhone /> <span className="text-lg">Phone: +234 916 314 7101</span></a>
                    </div>    
                </div>
                <form name="contact" className="w-full" data-aos="zoom-in" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />

                    <p hidden>
                        <label>
                        Don't fill this out: <input name="bot-field" />
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