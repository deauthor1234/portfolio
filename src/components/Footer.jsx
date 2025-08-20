import { BiLogoReact, BiLogoTailwindCss, BiPlus } from "react-icons/bi"

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          © {new Date().getFullYear()} Oladapo Authority. All rights reserved.
        </p>
        <p className="flex mt-4 gap-4 md:mt-0">
            Built With
            <span className="flex items-center text-white">
                <BiLogoReact /> <i>React</i> <BiPlus className="mx-2" /> <BiLogoTailwindCss /> <i>Tailwind</i>
            </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer