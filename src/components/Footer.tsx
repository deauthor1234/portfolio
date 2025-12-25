import { BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiPlus } from "react-icons/bi"

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
                <BiLogoReact className="max-[400px]:text-2xl" /><i className="max-[400px]:hidden">React</i>
                <BiPlus className="mx-2" />
                <BiLogoTailwindCss className="max-[400px]:text-2xl" /> <i className="max-[400px]:hidden">Tailwind</i>
                <BiPlus className="mx-2" />
                <BiLogoTypescript className="max-[400px]:text-2xl" /> <i className="max-[400px]:hidden">TypeScript</i>
            </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer