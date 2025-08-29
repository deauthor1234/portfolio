import { Link } from "react-scroll";
import profile2 from "../assets/images/profile.jpg";
import { BiDownArrowAlt, BiLogoGithub, BiLogoInstagram, BiMailSend } from "react-icons/bi";

const Hero = () => {
    return (
        <header className="container-wrapper items-center relative min-[950px]:min-h-[40rem] min-[950px]:max-h-[1080px] bg-linear-to-b from-transparent to-gray-200" id="intro">
            <div className="flex justify-between items-center max-[950px]:py-36 container gap-10">
                <div className="size-full">
                    <h2 className="font-bold text-2xl max-[1200px]:text-xl" data-aos="fade-right">Hello!</h2>
                    <h1 className="text-8xl font-extrabold mt-2 mb-6 max-[1200px]:text-7xl max-[550px]:text-6xl" data-aos="fade-left" data-aos-delay="200">I'm Authority</h1>
                    <h3 className="font-bold text-4xl max-[1200px]:text-3xl max-[550px]:text-2xl" data-aos="fade-right" data-aos-delay="400">Front-End Web Developer</h3>
                    <h2 className="text-[1.1rem] mt-6 mb-8 font-medium italic max-w-[80%] text-gray-800" data-aos="fade-left" data-aos-delay="600">I craft modern, responsive web experiences that blend clean design with powerful functionality.</h2>
                    <div className="flex font-extrabold text-[2.6rem] gap-6">
                        <a className="group" href="https://www.instagram.com/authority.dev/" data-aos="zoom-in" data-aos-delay="800"><BiLogoInstagram className="group-hover:scale-115 duration-150" /></a>
                        <a className="group" href="https://github.com/deauthor1234" data-aos="zoom-in" data-aos-delay="1000"><BiLogoGithub className="group-hover:scale-115 duration-150" /></a>
                        <a className="group" href="mailto:dimejioladapo573@gmail.com" data-aos="zoom-in" data-aos-delay="1200"><BiMailSend className="group-hover:scale-115 duration-150" /></a>
                    </div>
                </div>
                <div className="max-[950px]:hidden min-w-[25rem] min-h-[25rem] max-[1200px]:min-w-[22rem] max-[1200px]:min-h-[22rem] rounded-b-4xl overflow-hidden relative rotate-y-180">
                    <img src={profile2} alt="profile" className="size-full object-cover absolute" data-aos="zoom-out" />
                </div>
            </div>
            <Link to="about" smooth={true} className="animate-bounce cursor-pointer size-16 flex justify-center items-center shadow-2xl text-xl rounded-full absolute bg-white bottom-4 left-[50%] translate-x-[-50%]">
                <BiDownArrowAlt className="text-3xl" />
            </Link>
        </header>
    )
}

export default Hero