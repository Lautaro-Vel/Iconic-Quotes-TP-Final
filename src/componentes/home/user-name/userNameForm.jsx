import './userNameForm.css'
import React, { useContext, useEffect, useState} from "react";
import { homeContext } from "../../../contextos/homeContext";
import { useNavigate } from "react-router";

export default function UserName() {

    const { addYourName, userName} = useContext(homeContext)
    const [nameValue, setNameValue] = useState('')
    const navigate = useNavigate()

    const handleAddYourName = (event) => {
        event.preventDefault()
        addYourName(nameValue)
        navigate('/citas')
    }
 
    return (
        <>
            <form className="formName" onSubmit={handleAddYourName}>
                <label className="labelNameQuestion" htmlFor="name">¿Cómo te llamas?</label>
                 <div className='divInputButtonName'>
                    <input className='inputName' id="name" type="text" name="name" required
                    onChange={event => setNameValue(event.target.value)}/>
                    <button className="buttonSubmitName" type="submit">
                        <i className="bi bi-arrow-right-circle"></i>
                    </button>
                </div>

            </form>
        </>
    )
} 