import React from 'react'
import './navBar.css'

function NavBar() {
  return (
    <ul className='ul__navBar'>
        <li className='li__ul'><a className='a__ul' href="">MoviesCOOS</a></li>
        <li className='li__ul'><a className='a__ul' href="">Inicio</a></li>
        <li className='li__ul'><a className='a__ul' href="">Peliculas</a></li>
        <li className='li__ul'><a className='a__ul' href="">Generos</a></li>
        <li className='li__ul'><a className='a__ul' href="">Series</a></li>
    </ul>
  )
}

export default NavBar