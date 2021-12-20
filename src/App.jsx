import { useState } from "react";
import "./public/css/App.scss";
import "./public/css/bootstrap.min.css";
import Main from "./components/Main.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const url = "https://reactrouter.com/docs/en/v6/getting-started/tutorial";
    return (
        <>
            <Main>
                <Header />
                {`This docs are esential: `}<a href={url}>React Router</a>
                
                <Footer />
            </Main>
        </>
    );
}

export default App;
