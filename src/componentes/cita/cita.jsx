import './cita.css'
import React, { useContext, useState } from 'react'
import { citaContexto } from '../../contextos/citaContexto'
import { Link } from 'react-router'
import { homeContext } from '../../contextos/homeContext'


const Cita = ({ autor, usuario, id, texto}) => {

  const { userName } = useContext(homeContext)
  const { handleDeleteCita} = useContext(citaContexto)

  const [divClassCita, setDivClassCita] = useState('divCita')

    const DeleteButton = () => {
    if (userName === usuario) {
      setDivClassCita('divCita userDivCita')
      return (
        <button className='deleteButtonCita' onClick={() => handleDeleteCita(id)}>
          <i class="bi bi-trash"></i>
        </button>
      )
    }
    return null;
  }
  return (
    <div className={divClassCita}>
      <div className='divContainerLinkDetails'>
        <Link className='linkUserNameCita' to={`/citas/details/${id}`}>
          <h3 className='userNameCita'>{usuario}</h3>
        </Link>
      </div>
      <p className='paragraphUserCita'>"{texto}"</p>
      <p className='autorCita'><i>- {autor}</i></p>
      <div className='divButtonsCita'>
        <DeleteButton />
      </div>
    </div>
  )
}
export default Cita