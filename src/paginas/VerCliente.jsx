import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Spinnes from '../components/Spinnes'
const VerCliente = () => {

    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)

    const {id} = useParams()

    useEffect(() => {       
        
        const obtenerClienteApi = async () => {
        try {
            const url = `http://localhost:5000/clientes/${id}`
            const respuesta = await fetch (url)
            const resultado = await respuesta.json()
            setCliente(resultado)

        } catch (error) {
            console.log(error)
            
        }
        setTimeout(() => {
            setCargando(!cargando)
        }, 500);
        
    }
    obtenerClienteApi()

    }, [])


  return (
      cargando ? <Spinnes/> :
      Object.keys(cliente).length === 0 ? <p>No hay resultados</p> : (
    <div>
        
        <>
            <p className='text-4xl text-gray-700 '>
            <span className=" text-gray-800 uppercase font-bold">Cliente: </span>
            {cliente.nombre}</p>

            <p className='text-2xl text-gray-700 '>
            <span className=" text-gray-800 uppercase font-bold">Email: </span>
            {cliente.email}</p>

            <p className='text-2xl text-gray-700 '>
            <span className=" text-gray-800 uppercase font-bold">Telefono: </span>
            {cliente.telefono}</p>

            <p className='text-2xl text-gray-700 '>
            <span className=" text-gray-800 uppercase font-bold">Empresa: </span>
            {cliente.empresa}</p>

            {cliente.notas && (
                <p className='text-2xl text-gray-700 '>
                <span className=" text-gray-800 uppercase font-bold">Notas: </span>
                {cliente.notas}</p>    
            )}
              
        </>
         
        
    </div>
      )
  )
}

export default VerCliente