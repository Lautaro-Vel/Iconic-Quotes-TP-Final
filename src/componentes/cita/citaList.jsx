import './citaList.css'
import React, { useContext } from "react"
import Cita from "./cita"
import { citaContexto } from "../../contextos/citaContexto"


export default function citaList() {
    const { citas } = useContext(citaContexto)

    return (
        <div className='divContainerListCitas'>
            {citas.map((cita) => {
                return (
                    <Cita
                        key={cita.id}
                        {...cita}
                    />

                )
            })}
        </div>
    )
    
}



