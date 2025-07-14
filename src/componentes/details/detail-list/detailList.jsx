import './detailList.css'
import React, {useContext} from "react";
import Detail from "../detail/detail";
import { detailsContext } from "../../../contextos/detailsContext";
import { homeContext } from "../../../contextos/homeContext";
import { Link } from 'react-router';


export default function DetailList() {
    const {userName} = useContext(homeContext)
    const {details} = useContext(detailsContext)

     if (details === null) {
        return (
            <div className='divListDetails'>
                <div className="divButtonReturnCitas">
                    <Link className='linkReturnCitas' to={"/citas"}>
                        <i class="bi bi-arrow-left-circle"></i>
                    </Link>
                </div>
                <div className='divSpansContainer'>
                    <span className="upsSpan"><span className='puntoTransparent'>.</span>ups...</span>
                    <span className="InvalidUserSpan">este no es un usuario valido o no tiene detalles</span>    
                </div>
            </div>
        )
    } 

    return (
        <div className="divListDetails">
            {
                details.map((detail) => {
                    return (
                        <Detail 
                            key={detail.id}
                            {...detail}                        
                        />
                    )
                })
            }
        </div>
    )
}