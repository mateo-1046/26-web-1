'use client'

import { Button } from '@/components/ui/button'
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input"
import { Description } from '@radix-ui/react-dialog';

export default function Form(){

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: { name: "", age: "", description:"" }
    });

    const onSubmit = (data: any) => {
        console.log(data);
    }


    return (
        <div>


            <div className="p-4">
                <h2 className="text-xl font-bold mb-4 text-center">Visualizador de Responsive (Tailwind)</h2>
                
                {/* grid-cols-1: 1 columna en móvil
                    sm:grid-cols-2: 2 columnas en tablets (pequeño)
                    md:grid-cols-3: 3 columnas en laptops (mediano)
                    lg:grid-cols-4: 4 columnas en monitores (grande)
                    gap-4: separación entre cuadrados
                */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    
                    {/* Cuadrado 1 */}
                    <div className="h-32 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                    1 (Red)
                    </div>

                    {/* Cuadrado 2 */}
                    <div className="h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                    2 (Blue)
                    </div>

                    {/* Cuadrado 3 */}
                    <div className="h-32 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                    3 (Green)
                    </div>

                    {/* Cuadrado 4 */}
                    <div className="h-32 bg-yellow-500 rounded-lg flex items-center justify-center text-black font-bold shadow-lg">
                    4 (Yellow)
                    </div>

                    {/* Cuadrado 5 */}
                    <div className="h-32 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                    5 (Purple)
                    </div>

                    {/* Cuadrado 6 */}
                    <div className="h-32 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                    6 (Pink)
                    </div>

                </div>
                
                <p className="mt-6 text-sm text-gray-500 text-center italic">
                    Cambia el tamaño de la ventana para ver cómo cambian las columnas.
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                

            //INPUTS
                <h1 style ={{color: "black"}}>Name</h1>
                <Input 
                    {...register("name", { required: "El nombre es obligatorio", minLength: { value: 3, message: "Mínimo 3 caracteres" } })}
                    placeholder="Ej: Mateo Cante"
                    className={errors.name ? "border-gray-300 text-gray-900": "border-gray-300 text-gray-900"}
                />
                {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
             

                <h1 style ={{color: "black"}}>Age</h1>
                <Input type="number"
                    {...register("age", { required: "La edad es obligatoria", min: { value: 0, message: "La edad debe ser positiva" } })}
                    placeholder="age"
                    className={errors.age ? "border-gray-300 text-gray-900": "border-gray-300 text-gray-900"}
                />
                {errors.age && <p className="text-red-500 text-xs italic">{errors.age.message}</p>}

                <h1 style ={{color: "black"}}>Description</h1>
                <Input 
                    {...register("description", { required: "La descripción es obligatoria", minLength: { value: 100, message: "Mínimo 100 caracteres" }  })}
                    placeholder="descripcion"
                    className={errors.description ? "border-gray-300 text-gray-900": "border-gray-300 text-gray-900"}
                />
                {errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
                
                
                <Button style ={{marginTop: "1rem"}} type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-all uppercase tracking-widest font-bold">
                Iniciar Postulación
                </Button>


            </form>
            // CÓDIGO DIALOG

        </ div >
    )
}

