import './AddNewCitaForm.css'
import React, { useContext } from "react";
import { citaContexto } from "../../../contextos/citaContexto";


export default function AddNewCitaForm() {

    const { addNewCita } = useContext(citaContexto)

    const handleAddNewCita = (event) => {
        event.preventDefault()

        const new_cita = event.target.cita.value
        const autor_cita = event.target.autor.value
        addNewCita(new_cita, autor_cita)
        event.target.cita.value = ''
        event.target.autor.value = ''
    }

    return (
        <form className='formNewCita' onSubmit={handleAddNewCita}>
            <div className='divContainerInputCita divLabelForm'>
                <label className='labelAddCita' htmlFor="text">Añade una cita:</label>
            </div>
            <div className='divContaiterInputButton'>
                <div className='divContainerInputs'>
                    <input className='inputWriteCita' type="text" name="cita"
                        placeholder="escribe tu cita aquí"
                        required
                    />
                    <input className='inputWriteCita autorInput' type="text" name="autor"
                        placeholder="pon su autor aquí"
                    />
                </div>
                <button className='buttonSubmitCita' type="submit">
                    <i className="bi bi-arrow-right-circle"></i>
                </button>
                </div>
        </form>
    )
}


