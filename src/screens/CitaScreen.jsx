import './CitaScreen.css'
import React,{useContext, useEffect, useState} from "react";
import { Link } from "react-router";
import CitaList from '../componentes/cita/citaList'
import AddNewCitaForm from "../componentes/cita/new-cita-form/newCitaForm";
import { homeContext } from "../contextos/homeContext";
import Spinner from '../componentes/SpinnerLoading/SpinnerLoading';

export default function CitaScreen() {
    const[loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 2000)

    if (loading){
        return(
            <Spinner/>
        )
    }

    const {userName} = useContext(homeContext)
    return (
        <div className="divCitaScreenContainer">
            <div className="divHeaderCitaScreen">
                <Link to={'/'} className='linkIqLogo'>
                    <span className="iqLogo">I<span className='punto'>.</span>Q</span>
                </Link>    
                <h2 className="welcomeCitaScreen">Bienvenido {userName}</h2>
            </div>
            <CitaList/>
            <AddNewCitaForm/>
        </div>
    )
}
