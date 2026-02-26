import Scanner  from "../components/Scanner";

export default function Tripulacion() {
    return (
        <div className="w-full h-full bg-slate-950 flex grid grid-cols-2">
              <div className="grid grid-cols-1">
                <h1 className="  text-white">Monitoreo</h1>

              </div>

              <div className="grid grid-cols-1 ">
                <h1 className="col-span-12 text-white">Monitore 2 Escaner</h1>
                <Scanner />

              </div>
        </div>
    );
}