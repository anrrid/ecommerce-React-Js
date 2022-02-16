import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { MainApp } from "./MainApp";
import 'bootstrap/dist/css/bootstrap.min.css';



const rootElement = document.getElementById("root");

ReactDOM.render(
    <StrictMode>
        <MainApp />
    </StrictMode>,
    rootElement
);