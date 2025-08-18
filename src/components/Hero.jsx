import profile from "../assets/images/profile.jpg"

const Hero = () => {
    return (
        <header className="flex justify-center h-[100vh] items-center">
            <div className="flex justify-between max-w-[1200px] gap-8">
                <div className="">
                    <h1 className="text-7xl font-extrabold">Oladapo Authority</h1>
                    <h3 className="text-[1.1rem] my-4">I am a passionate web developer (frontend) having +3 years of experience in the field. I build fully responsive and cross-browser compactible websites.</h3>
                    <div className="flex">
                        <p>X</p>
                        <p>X</p>
                        <p>X</p>
                        <p>X</p>
                        <p>X</p>
                    </div>
                </div>
                <div className="min-w-[25rem] min-h-[25rem] rounded-l-[50px] relative overflow-hidden">
                    <img src={profile} alt="profile" className="size-full object-cover absolute" />
                </div>
            </div>
        </header>
    )
}

export default Hero