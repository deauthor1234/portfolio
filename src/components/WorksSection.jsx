import project1 from "../assets/images/project1.png"
import project2 from "../assets/images/project2.png"
import project3 from "../assets/images/project3.png"
import project4 from "../assets/images/project4.png"
import project5 from "../assets/images/project5.png"
import Work from "./Work"

const WorksSection = () => {
    return (
        <section className="container-wrapper" id="works">
            <div className="container">
                <h2 className="section-heading mb-14 max-[426px]:mb-10" data-aos="fade-down">WHAT HAVE I DONE?</h2>
                <div className="grid grid-cols-2 max-[950px]:grid-cols-1 max-[1025px]:gap-x-8 max-[1025px]:gap-y-12 gap-14">
                    <Work 
                        img={project1} 
                        title="CarRental" 
                        tags={["HTML-CSS-JavaScript"]} 
                        repoHref="https://github.com/deauthor1234/car-rental" 
                        demoHref="https://carrentalportfolio.netlify.app" 
                        des="is a modern, fully responsive and cross-browser compactible car rental website with sleek sliders and simple UI."
                    />
                    <Work 
                        img={project2} 
                        title="StreamLab" 
                        tags={["HTML-CSS-JavaScript"]} 
                        repoHref="https://github.com/deauthor1234/streamlab" 
                        demoHref="https://streamlabproject.netlify.app" 
                        des="is a responsive movie streaming website, inspired by an online template, with modern feel and smooth scroll between sections."
                    />
                    <Work 
                        img={project3} 
                        title="FoodKing" 
                        tags={["TailwindCSS"]} 
                        repoHref="https://github.com/deauthor1234/foodking" 
                        demoHref="https://foodkingproject.netlify.app" 
                        des="is a responsive restaurant landing page website inspired by an online design, with delicious menu, and contact information."
                    />
                    <Work 
                        img={project4} 
                        title="Furnitue" 
                        tags={["TailwindCSS"]} 
                        repoHref="https://github.com/deauthor1234/furnitue" 
                        demoHref="https://furnitue.netlify.app" 
                        des="is a responsive furniture landing page built and designed to highlight stylish interiors with a clean, user-friendly interface."
                    />
                    <Work 
                        img={project5} 
                        title="Online Resume"
                        desOnly={true}
                        tags={["React", "AOS"]} 
                        repoHref="https://github.com/deauthor1234/online-resume" 
                        demoHref="https://onlineresumeproject.netlify.app" 
                        des="A one-page responsive online résumé website with sidebar built for showcasing personal profile, skills, experience, and portfolio projects."
                    />
                </div>
            </div>
        </section>
    )
}

export default WorksSection