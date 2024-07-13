
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import PaginaBase from "pages/PaginaBase";


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>} >
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/favoritos" element={<Favoritos/>} ></Route>        
                <Route path="/:id" element={<Player/>}/>
                <Route path="*" element={<NotFound/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;