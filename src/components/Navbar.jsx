import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-scroll";

const sections = ["intro", "about", "services", "works", "contact"];

const Navbar = () => {
    const [active, setActive] = useState("intro");

    useEffect(() => {
        const sectionElements = sections.map(id => document.getElementById(id));

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        },
        { threshold: 0 }
        );

        sectionElements.forEach(el => el && observer.observe(el));

        return () => {
            sectionElements.forEach(el => el && observer.unobserve(el));
        };
    }, []); 

    const [navVisibility, setNavVisibility] = useState(false)

    return (
        <nav className="container-wrapper z-[9999] fixed w-full bg-white" data-aos="fade-down">
            <div className="container w-full flex justify-between items-center py-4 max-[426px]:py-3">
                <div>
                    <a href="/" className="font-extrabold text-[1.65rem] max-[426px]:text-[1.5rem]">dev-author.</a>
                </div>
                <BiMenu className="text-3xl cursor-pointer min-[769px]:hidden" onClick={() => !navVisibility ? setNavVisibility(true) : setNavVisibility(false)} />
                <div className={`navbar max-[769px]:-z-10 max-[769px]:pointer-events-none bg-[#fff5] flex gap-6 max-[769px]:border-b max-[769px]:border-gray-300 max-[769px]:gap-0 max-[769px]:absolute max-[769px]:top-[100%] max-[769px]:backdrop-blur-md max-[769px]:w-full max-[769px]:text-center max-[769px]:right-0 max-[769px]:flex-col ${navVisibility && "show"}`}>
                {sections.map(id => (
                    <Link
                    key={id}
                    smooth={true}
                    to={`${id}`}
                    className={`nav-link ${active === id && "active"}`}
                    >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                    <div className="border"></div>
                    </Link>
                ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar