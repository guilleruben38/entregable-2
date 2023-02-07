import { useState, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Navbar from './components/NavBar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'

function App() {
 

  return (
    <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element= { <ItemListContainer  /> } />
    <Route path='/categoria/:idCategoria' element= { <ItemListContainer /> } /> 

    <Route path='/detalle/:idProducto' element= { <ItemDetailContainer /> } />

    <Route path='*' element= { <Navigate to='/' /> } />
   </Routes>
    </BrowserRouter>
  )
}

export default App
