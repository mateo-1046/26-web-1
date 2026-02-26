'use client';

import { useEffect, useRef, useState } from 'react';

import axios from 'axios';


const ScannerView = () => {

    const[missionTitle, setMissionTitle] = useState("Misión: Escaneo en Progreso");
    const[cameraStatus, setCameraStatus] = useState<"Grabando" | "Error">("Grabando");
    const [filtro, setFiltro] = useState("none");

    const filtros: Record<string, string> = {
      NORMAL: "none",
      TERMICA: "invert(1) hue-rotate(90deg) contrast(1.5)",
      NOCTURNA: "sepia(1) saturate(10) hue-rotate(90deg) brightness(0.8)",
      RADAR: "grayscale(1) contrast(3) brightness(1.2)"
    };

    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        obtenerData();
        onCamera();
        
    },[])

    const obtenerData = async () => {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts/17')
        setMissionTitle(data.data.title);
    }

    const onCamera = async ( ) => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }

            setCameraStatus("Grabando");
        } catch (error) {
        
        }
    }

    const cambiarFiltro = (filtroSeleccionado: string) => {
        setFiltro(filtroSeleccionado);
    }

    return (
        
        <section className="p-6 text-white space-y-4">
            <h1 >Misión de Marte:</h1>
            <p >{missionTitle}</p>

            <p>
                Estado cámara:{" "}
                <span className={
                    cameraStatus === "Grabando"
                    ? "text-green-400"
                    : "text-red-400"
                }
                >
                {cameraStatus}
                </span>
            </p>

            <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full max-w-lg rounded-lg border border-zinc-700"
                style={{ filter: filtro }}
            />
            <select onChange={(e) => cambiarFiltro(e.target.value)}>
                <option value={filtros.NORMAL}>Normal</option>
                <option value={filtros.TERMICA}>Térmica</option>
                <option value={filtros.NOCTURNA}>Nocturna</option>
                <option value={filtros.RADAR}>Nocturna</option>
            </select>

        </section>
    )
}

export default ScannerView;