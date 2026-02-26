
"use client"
import React from "react"
import {Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"

import User from "./user"


export default function Home() {
  const MARS_LISTINGS = [
    { id: 101, zone: "Olympus Mons", price: 500000, view: "Volcán Gigante" },
    { id: 102, zone: "Valles Marineris", price: 250000, view: "Gran Cañón" },
    { id: 103, zone: "Gale Crater", price: 150000, view: "Ruta del Rover Curiosity" },
  ];

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <main>
      <h1>Mart hihihih</h1>
      <User />

      
 

  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"
  />

      
      <div className="grid grid-cols-3 gap-6 px-6 mt-4">
      
        {MARS_LISTINGS.map(({ id, zone, price, view }) => (
          <Card key={id} className="mb-4">
            <CardHeader>
              <CardTitle>{id} - {zone}</CardTitle> 
            </CardHeader>
            
            <CardContent>
                <p><strong>ID:</strong> {id}</p>
                <p><strong>Vista:</strong> {view}</p>
                <p><strong>Precio:</strong> ${price}</p>

            </CardContent>
          </Card>
        ))}
       
      </div>
        
      
    </main>
  );
}
