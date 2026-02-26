// TAREA: Construir un Layout de 12 columnas
// Col-span-5 para el Formulario | Col-span-7 para el Scanner
// Snippet de page prc 

import Formulario from "@/components/Formulario";
import Scanner from "@/components/Scanner";
import LogRegistro from "@/components/LogRegistro";
import { LogRegistro as LogType } from "@/app/types/mission";

export default function Monitoreo(){
    return(
        <div>
            <div>
                Headergg
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 h-screen mt-10 gap-6 m-10">
                <div className="">
                    <Formulario/>
                    <LogRegistro logs={[]}/>
                </div>

                <div className="">
                    <Scanner/>
                </div>

            </div>
        </div>
    )
}