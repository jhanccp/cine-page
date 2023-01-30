import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './components/navBar/NavBar'
import { MoviesGrid } from './MoviesGrid'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <MoviesGrid/>
  </React.StrictMode>,
)
