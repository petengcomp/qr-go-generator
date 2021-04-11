import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LoginIcon from '../../assets/login.svg';
import QrIcon from '../../assets/ant-design_qrcode-outlined.svg'
import QrGO from '../../assets/QRGO.svg'

import './styles.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState(true);
  return (

    <div id="containerBar">

      <div id="toggles">
        <h1>QR Gen</h1>
        <NavLink to="/generator" activeClassName="main-nav-active">
          <button id="generator-button" className="botaoNavBar" >
            <img src={QrIcon} />
          </button>
        </NavLink>



        <a href="https://qr-go-map.herokuapp.com/" target="__blank">
          {/* <NavLink to="#" activeClassName="main-nav-active"> */}
          <button id="pdf-button" className="botaoNavBar" >
            <img src={QrGO} />
          </button>
          {/* </NavLink> */}
        </a>
      </div>

      <NavLink to="/">
        <button className="botao" id="botao">
          <img src={LoginIcon} alt="" />
        </button>
      </NavLink>

    </div>
  )
}
