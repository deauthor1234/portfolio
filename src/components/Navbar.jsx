const Navbar = () => {
    return (
        <nav className="container-wrapper z-[9999] fixed w-full bg-white">
            <div className="container w-full flex justify-between items-center py-4">
                <div>
                    <p className="font-extrabold text-2xl">dev-author.</p>
                </div>
                <ul className="flex gap-6">
                    <li className="active nav-link">
                        <a href="#hero">Home</a>
                    </li>
                    <li className="nav-link">
                        <a href="#about">About Me</a>
                    </li>
                    <li className="nav-link">
                        <a href="#services">My Services</a>
                    </li>
                    <li className="nav-link">
                        <a href="#works">Works</a>
                    </li>
                    <li className="nav-link">
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar