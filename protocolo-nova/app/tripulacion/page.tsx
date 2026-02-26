"use client";
import { useEffect, useState } from "react";
import { Tripulante } from "../types/mission";
import CardTripulante from "@/components/CardTripulante";

export default function TripulacionPage() {
  // 🔴 TAREA ESTUDIANTE:
  // 1. [Crear estado [tripulantes, setTripulantes]
  const [tripulantes, setTripulante] = useState<Tripulante[]>([])
  // 2. useEffect para llamar a 'https://dummyjson.com/users'
  useEffect( () => {
    const fetchUsers = async() => {

      const users = await fetch('https://dummyjson.com/users')
      const respont = await users.json()
      console.log(respont.users)
      setTripulante(respont.users)
    }

    fetchUsers();
  },[]
  )
  // 3. Mapear los datos a componentes Card

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-emerald-500 mb-8">MANIFIESTO DE TRIPULACIÓN</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        

        {
          tripulantes.map(tripulante => <CardTripulante key={tripulante.id } user={tripulante} />)
        }
        
      </div>
    </div>
  );
}