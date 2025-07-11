import React, {useState, createContext, useContext} from 'react'
import { getCitasAutors } from '../services/citasServices'
import { homeContext } from './homeContext'

export const citaContexto = createContext({
    citas: [],
    handleDeleteCita: (idCita) => {},
    addNewCita: (texto, autor) => {}
})

const citaList = getCitasAutors ()

const CitaContextoProvider = function ({children}) {
    const {userName} = useContext(homeContext)

    const[citas, setCita] = useState(citaList)

    const handleDeleteCita = (idCita) => {
        const listaCitasAct = []
        for (const cita of citas) {
            if (Number(idCita) !== Number(cita.id)) {
                listaCitasAct.push(cita)
            } 
        }
        setCita(listaCitasAct)
    }

    
    const addNewCita = (texto, autor) => {

        const newCita = {
            id: citas.length + 1,
            texto: texto,
            autor: autor,
            usuario: userName 
        }        
        const newCitas = [...citas]
        newCitas.push(newCita)
        setCita(newCitas)
    } 

    return (
        <citaContexto.Provider
            value={{
                citas: citas,
                handleDeleteCita:handleDeleteCita,
                addNewCita: addNewCita
            }}
        >
            {children}
        </citaContexto.Provider>
    )
}
 
export default CitaContextoProvider