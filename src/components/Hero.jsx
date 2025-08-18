import profile from "../assets/images/profile.jpg"

const Hero = () => {
    return (
        <header className="container-wrapper h-[45rem] bg-linear-to-b from-white to-gray-200" id="hero">
            <div className="flex justify-between container gap-16 items-center">
                <div>
                    <h2 className="font-bold text-2xl">Hello!</h2>
                    <h1 className="text-7xl font-extrabold mt-4 mb-6">I'm Authority</h1>
                    <h3 className="font-bold text-4xl">Frontend Web Developer</h3>
                    <h2 className="text-[1.1rem] mt-4 mb-6 font-medium">I am a passionate web developer (front-end) having more than 3 years of experience in the field. I build modern, fully responsive and cross-browser compactible websites.</h2>
                    <div className="flex font-extrabold text-2xl">
                        <p>X</p>
                        <p>X</p>
                        <p>X</p>
                        <p>X</p>
                        <p>X</p>
                    </div>
                </div>
                <div className="min-w-[25rem] min-h-[25rem] rounded-l-[50%] rounded-br-[50%] relative overflow-hidden">
                    <img src={profile} alt="profile" className="size-full object-cover absolute saturate-0" />
                </div>
            </div>
        </header>
    )
}

export default Hero