import './citaContainer.css'
import React from 'react'
import CitaHeader from '../cita-header/citaHeader'
import CitaList from '../cita-list/citaList'
import AddNewCitaForm from '../new-cita-form/AddNewCitaForm'

function CitaContainer() {
  return (
    <div className='divCitaScreenContainer'>
        <CitaHeader/>
        <CitaList/>
        <AddNewCitaForm/>
    </div>
  )
}

export default CitaContainer