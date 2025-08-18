import { useEffect } from "react"
import AboutSection from "./components/AboutSection"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ServicesSection from "./components/ServicesSection"
import Aos from "aos"
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
      once: false
    })
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
    </>
  )
}

export default App