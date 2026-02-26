"use client"
import { useState } from "react";

import { Input } from "@/components/ui/input";

import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";

export default function Administardor(){
    const [counter, setCounter] = useState(0);
    const [title, setTitle] = useState('')
    const submitTitle = () => {
        if(title === ''){
            return alert('No puede estar vacío')
        }
        alert('titulo guardado')
    }

    const addNumber = () => {
        setCounter(counter + 1)
    }

    const restNumber = () => {
        setCounter(counter - 1)
    }




    return (
        <div>
            <h1>{title}</h1>
            
                <Input type="text" onChange={(e) => setTitle(e.target.value) } />
          
             
            <button onClick={submitTitle}>Actualizar Título</button>

            <div>
                <h1>Contador</h1>


                <ButtonGroup>
                    <Button onClick={restNumber} style={{
                        backgroundColor: '#b91e1e'
                }}>-</Button>
                <span className=" px-4 border-2 border-gray-300 text-center">
                {counter}
                </span>
                <Button onClick={addNumber} style={{
                        backgroundColor: '#4CAF50'
                }}>+</Button>
                </ButtonGroup>
                <div className="grid grid-cols-3 gap-6 px-6 mt-4">
                
                </div>
            </div>
        </div>

        


     )

}

