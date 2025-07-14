import React, { useState } from 'react'
import Home from '../componentes/home/home/home'
import Spinner from '../componentes/SpinnerLoading/SpinnerLoading'

export default function HomeScreen() {
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
      <Home/>
  )
}
