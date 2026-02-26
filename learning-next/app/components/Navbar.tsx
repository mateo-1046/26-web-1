 import {

} from "@/components/ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"


const items = [
  {
    title: "Tripulacion",
    url: "tripulacion",
    icon: Home,
  },

  {
    title: "Monitoreo",
    url: "monitoreo",
    icon: Inbox,
  }
]
 
export function AppSidebar() {
  return (
  
    <nav className="w-full bg-slate-950 text-white p-4 flex flex-row items-center  gap-10">
      {items.map((item) => (
        <a 
          key={item.title}
          href={item.url}
          className="flex items-center gap-2"
        >
          <item.icon size={18} />
          {item.title}
        </a>
      ))}
    </nav>
  )
}