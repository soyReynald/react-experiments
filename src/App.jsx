import { useState } from "react";
import "./public/css/App.scss";
import "./public/css/bootstrap.min.css";
import Main from "./components/Main.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <>
            <Main>
                <Header />
                <Footer />
            </Main>
        </>
    );
}

export default App;
