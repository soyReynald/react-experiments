import React from "react";
import logo from "../../public/img/logo.png";

const Header = () => {
    return (
        <>
            <div className="top-bar info-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                <li>
                                    <i className="fa fa-phone"></i>(809)
                                    235-5666
                                </li>
                                <li>
                                    <i className="fa fa-envelope"></i>
                                    info@cientificosdelsoftware.com
                                </li>
                                <li>
                                    <i className="fa fa-map-marker"></i>
                                    Residencial Madrigal, Apto. B-1, Santo
                                    Domingo, Rep&uacute;blica Dominicana
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
                                    <li>
                                        <a href="index.php">Inicio</a>
                                    </li>
                                    <li>
                                        <a href="sobre-nosotros.php">
                                            Sobre Nosotros
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog.php">Blog</a>
                                    </li>
                                    <li>
                                        <a href="cursos.php">Cursos</a>
                                    </li>
                                    <li>
                                        <a href="contacto.php">Contactanos</a>
                                    </li>
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
