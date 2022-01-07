import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

import arrowLeft from "../../public/img/arrow-left.png";
import arrowRight from "../../public/img/arrow-right.png";
import boxCurso from "../../public/img/box-curso.png";

const home = () => {
  return (
    <>
      <Header />
      <div className="slider">
        <div className="container">
          <div className="article_text">
            <h3>Aprende Desarrollo Web</h3>
            <p>
              Aprende en nuestro curso Dominanod HTML5 Paso a Paso y Desde Cero
              <br />
              <a
                href="#"
                className="btn btn-primary read_more"
                type="button"
                name="read_more"
                color="white"
              >
                Leer m&aacute;s
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Reynald está trabajando aquí */}
      <section className="cursos-container">
        <div className="cursos container">
          <div className="row">
            <div className="col-md-8">
              <h3>Cursos</h3>
            </div>
            <div className="controllers col-md-4">
              <span>
                <img src={arrowLeft} alt="" />
              </span>
              <span>
                <img src={arrowRight} alt="" />
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>
                  <div className="feature-image">
                    <img src={boxCurso} alt="" />
                  </div>
                  <div className="course-content">
                    <h6>Dominando HTML5 Desde Cero</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-container">
        <div className="container blog">
          <h3>Blog</h3>
          <div className="row">
            <div className="col-md-4 blog-text">
              <h5>
                C&oacute;mo ganar dinero mientras <br /> aprendes a programar
              </h5>
              <img
                src="img/blog-article.png"
                className="img-fluid"
                alt="Responsive image"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio.
              </p>
            </div>
            <div className="col-md-4 blog-text">
              <h5>
                C&oacute;mo ganar dinero mientras <br /> aprendes a programar
              </h5>
              <img
                src="img/blog-article.png"
                className="img-fluid"
                alt="Responsive image"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio.
              </p>
            </div>
            <div className="col-md-4 blog-text">
              <h5>
                C&oacute;mo ganar dinero mientras <br /> aprendes a programar
              </h5>
              <img
                src="img/blog-article.png"
                className="img-fluid"
                alt="Responsive image"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio.
              </p>
            </div>
            <div className="col-md-4 blog-text">
              <h5>
                C&oacute;mo ganar dinero mientras <br /> aprendes a programar
              </h5>
              <img
                src="img/blog-article.png"
                className="img-fluid"
                alt="Responsive image"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio.
              </p>
            </div>
            <div className="col-md-4 blog-text">
              <h5>
                C&oacute;mo ganar dinero mientras <br /> aprendes a programar
              </h5>
              <img
                src="img/blog-article.png"
                className="img-fluid"
                alt="Responsive image"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio.
              </p>
            </div>
            <div className="col-md-4 blog-text">
              <h5>
                C&oacute;mo ganar dinero mientras <br /> aprendes a programar
              </h5>
              <img
                src="img/blog-article.png"
                className="img-fluid"
                alt="Responsive image"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio.
              </p>
            </div>
            <div className="col-md-4 blog-text">
              <h5>
                C&oacute;mo ganar dinero mientras <br /> aprendes a programar
              </h5>
              <img
                src="img/blog-article.png"
                className="img-fluid"
                alt="Responsive image"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio.
              </p>
            </div>
            <div className="col-md-4 blog-text">
              <h5>
                C&oacute;mo ganar dinero mientras <br /> aprendes a programar
              </h5>
              <img
                src="img/blog-article.png"
                className="img-fluid"
                alt="Responsive image"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio.
              </p>
            </div>
            <div className="col-md-4 blog-text">
              <h5>
                C&oacute;mo ganar dinero mientras <br /> aprendes a programar
              </h5>
              <img
                src="img/blog-article.png"
                className="img-fluid"
                alt="Responsive image"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio.
              </p>
            </div>
            <div className="container">
              <div className="row">
                <button className="btn btn-light" type="button" name="button">
                  Cargar m&aacute;s
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default home;
