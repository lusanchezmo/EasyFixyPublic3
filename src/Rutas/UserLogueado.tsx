import React, { useEffect, useState } from "react"
import { Route, Routes, useLocation} from 'react-router-dom';
import DatosPerfilEmpleado from '../pages/DatosPerfilEmpleado/DatosPerfilEmpleado';
import VerPerfilEmpleado from '../pages/VisualizarEmpleado/VisualizarPerfil';
import SeleccionRol from '../pages/SelecionarRol/SeleccionRol';
import CreateJob from '../pages/Jobs/CreateJob';
import HomeEmpleado from "../pages/Home/empleado/HomeEmpleado";
import HomeEmpleador from "../pages/Home/Empleador/HomeEmpleador";
import CategoriesLabors from "../pages/Labors/CategoriesLabors";
import { validationToken } from "../Helpers/Token";
import Skills from "../pages/Skills/Skills";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import UserChats from "../pages/Chats/UserChats";
import RetirarDinero from '../pages/Payments/RetirarDinero';
import DescripcionCompra from "../pages/Payments/DescripcionCompra";
import ToolbarDefault from "../pages/components/ToolbarDefaul";
import ResumenPago from "../pages/Home/components/ResumenPago";

const UserLogueado = () => {
    const dispatch = useAppDispatch();
    const location = useLocation(); // Obtener la ubicación actual
    console.log(location.pathname);
    
    const [isLogged, setIsLogged] = useState<boolean>(false);
    useEffect(() => {
        const isLogged = validationToken(dispatch);
        setIsLogged(isLogged)
    }, []);
    return(
        <>
        { location.pathname == '/my/selectrole' || location.pathname == '/my/createjob' ? (<></>) : (<ToolbarDefault/>)}
        <Routes>
            <Route path='profile/employee/create/personalinformation' element={<DatosPerfilEmpleado/>}/>
            <Route path='profile/employee' element={<VerPerfilEmpleado/>}/>
            <Route path='selectrole' element={<SeleccionRol/>}/>
            <Route path='home/employee' element={<HomeEmpleado/>}/>
            <Route path='home/employer' element={<HomeEmpleador/>}/>
            <Route path='createjob' element={<CreateJob/>}/>
            <Route path="categories" element= {<CategoriesLabors/>}/>
            <Route path='profile/employee/create/skills' element={<Skills/>}/>
            <Route path='chats' element={<UserChats/>}/>
            <Route path="/retirarDinero" element={<RetirarDinero/>} />
            <Route path="/buyDescription" element={<DescripcionCompra/>} />
            <Route path="/resumenTrans" element={<ResumenPago/>} />
        </Routes>
        </>
    )
}

export default UserLogueado;