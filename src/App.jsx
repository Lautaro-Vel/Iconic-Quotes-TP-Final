import './app.css'
import React from 'react'
import CitaScreen from './screens/CitaScreen'
import DetailsScreen from './screens/DetailsScreen'
import DetailsContextProvider from './contextos/detailsContext'
import HomeScreen from './screens/HomeScreen'
import { Route, Routes } from 'react-router'


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/citas" element={<CitaScreen />} />
          <Route path='/citas/details/:detail_autorId' element={
            <DetailsContextProvider>
              <DetailsScreen/>
            </DetailsContextProvider>
            }/>
        </Routes>

    </div>
  )
}

export default App
