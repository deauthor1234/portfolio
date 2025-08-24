import { BiLinkExternal } from "react-icons/bi"

const ContactMedium = ({ delay, href, icon, label }) => {
  return (
    <a className="contact-medium" onClick={() => window.open(href)} data-aos="zoom-in" data-aos-delay={delay}>
        {icon} 
        <span>{label}</span>
        <BiLinkExternal />
    </a>
  )
}

export default ContactMedium