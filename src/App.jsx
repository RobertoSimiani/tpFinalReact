import React from 'react'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import NavBar from './components/NavBar/NavBar'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListConteiner/> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListConteiner/> } />
          <Route path='/item/:idItem' element={ <ItemDetailConteiner/> } />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App