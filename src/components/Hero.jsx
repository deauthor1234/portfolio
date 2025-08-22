import { Link } from "react-scroll";
import profile from "../assets/images/profile.jpg";
import { BiDownArrowAlt, BiLogoGithub, BiLogoInstagram, BiMailSend } from "react-icons/bi";

const Hero = () => {
    return (
        <header className="container-wrapper relative h-[100vh] bg-linear-to-b from-transparent to-gray-200" id="intro">
            <div className="flex justify-between container gap-16 items-center">
                <div>
                    <h2 className="font-bold text-2xl" data-aos="fade-right">Hello!</h2>
                    <h1 className="text-8xl font-extrabold mt-4 mb-6" data-aos="fade-left" data-aos-delay="200">I'm Authority</h1>
                    <h3 className="font-bold text-4xl" data-aos="fade-right" data-aos-delay="400">Frontend Web Developer</h3>
                    <h2 className="text-[1.1rem] mt-4 mb-14 font-medium italic" data-aos="fade-left" data-aos-delay="600">I craft modern, responsive web experiences that blend clean design with powerful functionality.</h2>
                    <div className="flex font-extrabold text-4xl gap-6">
                        <a href="https://www.instagram.com/authority.dev/" data-aos="zoom-in" data-aos-delay="800"><BiLogoInstagram /></a>
                        <a href="https://github.com/deauthor1234" data-aos="zoom-in" data-aos-delay="1000"><BiLogoGithub /></a>
                        <a href="mailto:dimejioladapo573@gmail.com" data-aos="zoom-in" data-aos-delay="1200"><BiMailSend /></a>
                    </div>
                </div>
                <div className="min-w-[25rem] min-h-[25rem] rounded-l-[50%] rounded-br-[50%] relative overflow-hidden">
                    <img src={profile} alt="profile" className="size-full object-cover absolute saturate-0" data-aos="zoom-out" />
                </div>
            </div>
            <Link to="about" smooth={true} className="animate-bounce size-16 flex justify-center items-center shadow-2xl text-xl rounded-full absolute bg-white bottom-8 left-[50%] translate-x-[-50%]">
                <BiDownArrowAlt className="text-3xl" />
            </Link>
        </header>
    )
}

export default Hero