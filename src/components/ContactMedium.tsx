import { BiLinkExternal } from "react-icons/bi"

type ContactProps = {
  delay: string,
  href: string,
  icon: React.ReactNode,
  label: string
}

const ContactMedium = ({ delay, href, icon, label }: ContactProps) => {
  return (
    <a className="contact-medium" onClick={() => window.open(href)} data-aos="zoom-in" data-aos-delay={delay}>
        {icon} 
        <span>{label}</span>
        <BiLinkExternal />
    </a>
  )
}

export default ContactMedium