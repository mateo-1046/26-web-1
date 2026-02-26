
"use client"
import React from "react"
import {Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"



export default function Home() {
  const LIST_USER = [
    { id: 101, nombre: "Mateo Cante Garzon", city: "Bogota D.C", view: "Volcán Gigante" },
    { id: 102, nombre: "Juan Pablo Pulido garzon", city: "Medellin", view: "Gran Cañón" },
    { id: 103, nombre: "Diego Alejandro pegagos", city: "Cali", view: "Ruta del Rover Curiosity" },
  ];

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <main>
      <h1>Lista de usuarios </h1>
   

    

      
      <div className="grid grid-cols-3 gap-6 px-6 mt-4">
      
        {LIST_USER.map(({ id, nombre, city, view }) => (
          <Card key={id} className="mb-4">
            <CardHeader>
              <CardTitle>{id} - {nombre}</CardTitle> 
            </CardHeader>
            
            <CardContent>
                <p><strong>ID:</strong> {id}</p>
                <p><strong>Vista:</strong> {view}</p>
                <p><strong>Precio:</strong> ${city}</p>

            </CardContent>
          </Card>
        ))}
       
      </div>
        
      
    </main>
  );
}
