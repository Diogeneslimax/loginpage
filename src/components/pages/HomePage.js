import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/fundo2.jpg'

export default function HomePage() {
    return (
        <header style={HeaderStyle}>
        <div className="text-center">
            <h1 className="main-title home-page-title">Bem Vindo!!!</h1>
               <Link to="">
               <button className="primary-button" id="reg_btn"><span>Import/Export</span></button> 
               </Link>
            <Link to="/">\
                <button className="primary-button">Log out</button>
            </Link>
        </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}