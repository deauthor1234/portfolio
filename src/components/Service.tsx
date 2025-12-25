type ServiceProps = {
    delay: string,
    description: string,
    icon: React.ReactNode,
    title: string
}

const Service = ({ delay, description, icon, title }: ServiceProps) => {
    return (
        <div className="service" data-aos="fade-down" data-aos-delay={delay}>
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Service