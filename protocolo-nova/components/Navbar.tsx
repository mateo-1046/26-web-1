import  Link  from "next/link"
import BatteryIndicator  from "@/components/BatteryIndicator";



export const Navbar = () => {
  return (
    
    <div className="flex justify-between bg-black p-5 text-emerald-500">Monitoreo y tripulació
    
      <div className="flex gap-4 font-bold">
        <Link href="/monitoreo" >Monitoreo</Link>
        <Link href="/tripulacion">Tripulación</Link>
        <BatteryIndicator/>
      </div>
     
    
    </div>
    
  )
}
