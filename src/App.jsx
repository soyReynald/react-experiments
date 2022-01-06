import { useState } from "react";
import "./public/css/App.scss";
import "./public/css/bootstrap.min.css";
import Main from "./components/layout/Main.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

function App() {
    const url = "https://reactrouter.com/docs/en/v6/getting-started/tutorial";
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
