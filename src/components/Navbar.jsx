import { useEffect, useState } from "react";
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
        { threshold: 0.3 }
        );

        sectionElements.forEach(el => el && observer.observe(el));

        return () => {
            sectionElements.forEach(el => el && observer.unobserve(el));
        };
    }, []); 

    return (
        <nav className="container-wrapper z-[9999] fixed w-full bg-white" data-aos="fade-down">
            <div className="container w-full flex justify-between items-center py-4">
                <div>
                    <a href="/" className="font-extrabold text-[1.65rem]">dev-author.</a>
                </div>
                <ul className="flex gap-6">
                {sections.map(id => (
                    <li key={id}>
                        <Link
                        smooth={true}
                        to={`${id}`}
                        className={`nav-link ${active === id && "active"}`}
                        >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar