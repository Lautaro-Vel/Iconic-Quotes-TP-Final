import './detail.css'
import React from "react";
import { Link } from "react-router";

const Detail = ({id, complet_name_autor, age, nacionality, profession, descripcion}) => {
    

    return (
        <>
            <div className="divButtonReturnCitas">
                <Link className='linkReturnCitas' to={"/citas"}>
                    <i class="bi bi-arrow-left-circle"></i>
                </Link>
            </div>
            <div className="divContainerDetails">
                <h3 className="userNameDetails">Nombre completo: {complet_name_autor}</h3>
                <p className="moreDetails">Edad: {age}</p>
                <p className="moreDetails">Nacionalidad: {nacionality}</p>
                <p className="moreDetails">Profesion: {profession}</p>
                <p className='moreDetails'>Descripcion: </p>
                <p className='moreDetails descriptionDetail'>"{descripcion}"</p>
           </div>
        </>
    )
}   

export default Detail