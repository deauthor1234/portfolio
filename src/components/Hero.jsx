import profile from "../assets/images/profile.jpg"
import { FaArrowDown, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';

const Hero = () => {
    return (
        <header className="container-wrapper relative h-[100vh] bg-linear-to-b from-transparent to-gray-200" id="hero">
            <div className="flex justify-between container gap-16 items-center">
                <div>
                    <h2 className="font-bold text-2xl" data-aos="fade-right">Hello!</h2>
                    <h1 className="text-8xl font-extrabold mt-4 mb-6" data-aos="fade-left" data-aos-delay="200">I'm Authority</h1>
                    <h3 className="font-bold text-4xl" data-aos="fade-right" data-aos-delay="400">Frontend Web Developer</h3>
                    <h2 className="text-[1.1rem] mt-4 mb-14 font-medium" data-aos="fade-left" data-aos-delay="600">I am a passionate web developer (front-end) having more than 3 years of experience in the field. I build modern, fully responsive and cross-browser compactible websites.</h2>
                    <div className="flex font-extrabold text-4xl gap-4">
                        <a href="https://www.instagram.com/authority.dev/" data-aos="zoom-in" data-aos-delay="800"><FaInstagramSquare /></a>
                        <a href="https://github.com/deauthor1234" data-aos="zoom-in" data-aos-delay="1000"><FaGithubSquare /></a>
                        <a href="https://web.facebook.com/profile.php?id=100086251411134" data-aos="zoom-in" data-aos-delay="1200"><FaFacebookSquare /></a>
                        <a href="javascript(){tel:+2349163147101}" data-aos="zoom-in" data-aos-delay="1400"><FaWhatsappSquare /></a>
                    </div>
                </div>
                <div className="min-w-[25rem] min-h-[25rem] rounded-l-[50%] rounded-br-[50%] relative overflow-hidden">
                    <img src={profile} alt="profile" className="size-full object-cover absolute saturate-0" data-aos="zoom-out" />
                </div>
            </div>
            <div className="scroll-dwn-btn size-16 flex justify-center items-center shadow-2xl text-xl rounded-full absolute bg-white bottom-8 left-[50%] translate-x-[-50%]">
                <FaArrowDown />
            </div>
        </header>
    )
}

export default Hero