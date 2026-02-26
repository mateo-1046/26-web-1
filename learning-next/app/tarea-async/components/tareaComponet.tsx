import React, { useEffect } from 'react'
import axios from 'axios'

const NombreComponente = () => {

    
  const[title, setTitle] = React.useState('');
  const[currentPage, setCurrentPage] = React.useState(1);
  const [data, setData] = React.useState(0);

  useEffect(() => {
 
    fetchData()

   
    }, [title])

    const fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        const number = response.data.length;
        console.log(response.data)
        setData(number);
    }

      const submitTitle = () => {
        if(title === ''){
            return alert('No puede estar vacío')
        }
        alert('titulo guardado')
    }

  return (
    <div>
        <h1>SE ENCONTRARON {data} REGISTROS</h1>
        <h1>{title}</h1>
            
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        
        <button onClick={submitTitle}>Actualizar Título</button>
    </div>
  )
}

export default NombreComponente