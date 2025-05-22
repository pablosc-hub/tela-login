import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { useContext, useState } from "react";
import NotFound from "../pages/Notfound";
import { Context } from "../contexts/AuthContexts";


const Paths = () => {
    const { logado } = useContext(Context);
    
    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                {logado &&(<>
                <Route path="/home" element ={<Home/>}/>
                </>)}
                <Route path="*" element={<NotFound/>}/>
                
            </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default Paths;