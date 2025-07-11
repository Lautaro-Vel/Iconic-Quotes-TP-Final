import React, { useState } from "react";
import DetailList from '../componentes/details/detailList'
import Spinner from "../componentes/SpinnerLoading/SpinnerLoading";

export default function DetailsScreen() {
    const[loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 2000)

    if (loading){
        return(
            <Spinner/>
        )
    }

    return(
        <DetailList/>
    )
    
}






