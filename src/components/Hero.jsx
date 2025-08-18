import profile from "../assets/images/profile.jpg"
import { FaArrowDown, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';

const Hero = () => {
    return (
        <header className="container-wrapper relative h-[100vh] bg-linear-to-b from-transparent to-gray-200" id="hero">
            <div className="flex justify-between container gap-16 items-center">
                <div>
                    <h2 className="font-bold text-2xl">Hello!</h2>
                    <h1 className="text-8xl font-extrabold mt-4 mb-6">I'm Authority</h1>
                    <h3 className="font-bold text-4xl">Frontend Web Developer</h3>
                    <h2 className="text-[1.1rem] mt-4 mb-14 font-medium">I am a passionate web developer (front-end) having more than 3 years of experience in the field. I build modern, fully responsive and cross-browser compactible websites.</h2>
                    <div className="flex font-extrabold text-4xl gap-4">
                        <a href=""><FaInstagramSquare /></a>
                        <a href=""><FaGithubSquare /></a>
                        <a href=""><FaFacebookSquare /></a>
                        <a href=""><FaWhatsappSquare /></a>
                    </div>
                </div>
                <div className="min-w-[25rem] min-h-[25rem] rounded-l-[50%] rounded-br-[50%] relative overflow-hidden">
                    <img src={profile} alt="profile" className="size-full object-cover absolute saturate-0" />
                </div>
            </div>
            <div className="size-16 flex justify-center items-center shadow-2xl text-xl rounded-full absolute bg-white bottom-8 cursor-pointer left-[50%] translate-x-[-50%]">
                <FaArrowDown />
            </div>
        </header>
    )
}

export default Hero