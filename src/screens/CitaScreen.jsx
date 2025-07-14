import React,{useState} from "react";
import Spinner from '../componentes/SpinnerLoading/SpinnerLoading';
import CitaContainer from '../componentes/cita/cita-container/citaContainer';

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

    return (
        <>
            <CitaContainer/>
        </>
    )
}
