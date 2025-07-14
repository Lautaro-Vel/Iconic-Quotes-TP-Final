import './citaHeader.css'
import React, {useContext} from 'react'
import { Link } from 'react-router'
import { homeContext } from '../../../contextos/homeContext'

function CitaHeader() {
    const {userName} = useContext(homeContext)
  return (
    <div className="divHeaderCitaScreen">
        <Link to={'/'} className='linkIqLogo'>
            <span className="iqLogo">I<span className='punto'>.</span>Q</span>
        </Link>    
        <h2 className="welcomeCitaScreen">Bienvenido {userName}</h2>
    </div>
  )
}

export default CitaHeader