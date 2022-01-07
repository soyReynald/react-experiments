import React from "react";
import logo from "../../public/img/logo.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="top-bar info-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>
                  <i className="fa fa-phone"></i>(809) 235-5666
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  info@cientificosdelsoftware.com
                </li>
                <li>
                  <i className="fa fa-map-marker"></i>
                  Residencial Madrigal, Apto. B-1, Santo Domingo,
                  Rep&uacute;blica Dominicana
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="logo">
                <img className="logo_cs" src={logo} alt="" />
              </div>
            </div>
            <div className="col md-8">
              <div className="nav nav-bar-home">
                <ul>
                  <li className=""><Link to="/homepage">Inicio</Link></li>
                  <li className=""><Link to="/about">Sobre Nosotros</Link></li>
                  <li className=""><Link to="blog">Blog</Link></li>
                  <li className=""><Link to="cursos">Cursos</Link></li>
                  <li className=""><Link to="contacto">Contactanos</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
