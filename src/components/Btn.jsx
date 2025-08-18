const Btn = ({ dark, content }) => {
    return (
        <button className={dark ? "bg-black hover:bg-white text-white hover:text-black px-10 py-4 font-bold rounded-full border cursor-pointer" : "bg-white hover:bg-black text-black hover:text-white px-10 py-4 font-bold rounded-full border cursor-pointer"}>{content}</button>
    )
}

export default Btn
