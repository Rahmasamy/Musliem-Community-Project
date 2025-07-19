import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import NoConnection from './layouts/lose-internet-connection/NoConnection'


function App() {
 

  return (
    <>
    <NoConnection/>
  
   <AppRoutes/>

    </>
  )
}

export default App
