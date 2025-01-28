import { Instagram, Linkedin, Twitter, Github, Plus } from "lucide-react"
import Button from "../ui/button"

export default function UserCard() {
  const icons = [
    Instagram,
    Linkedin,
    Twitter,
    Github,
    Plus
  ]

  return (
    <div
      className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white"
    >
      <div className="size-48">
        <img
          src="/me.webp"
          alt="Andre dev"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gaap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">Andre Dev</h3>
        </div>
        <p className="opacity-40">Eu faço produtos para internet</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex gap-3">
          {
            icons.map((Icon, index) => (
              <button className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2a2a2a]" key={index}>
                <Icon />
              </button>
            ))
          }
        </div>
        <div className="flex flex-col gap-4 w-full h-[172px]">
          <div className="w-full flex flex-col items-center gap-3">
            <Button className="w-full">Template SaaS - Compre agora</Button>
            <button className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2a2a2a]">
              <Plus />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}