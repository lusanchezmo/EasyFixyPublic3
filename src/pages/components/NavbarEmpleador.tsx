import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { removeToken } from "../../Helpers/Token";

const NavbarEmpleador = () => {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const toggleChecked = () => {
        setChecked(prev => !prev);
    };

    const logOut = () => {
        removeToken(dispatch);
        navigate("/");
    };

    return (
        <div className="w-full h-max sm::h-8  color3 flex justify-between items-center sm:p-4 p-1">
            <div className="flex flex-row justify-start items-center lg:gap-12 gap-4">
                <Link to={"/my/chats"} className="relative group">
                    <button className="text-white text-sm sm:text-base relative transition-all duration-300 group-hover:text-cyan-600 group-hover:scale-105 group-hover:before:content-[''] group-hover:before:absolute group-hover:before:w-full group-hover:before:h-1 group-hover:before:bg-cyan-600 group-hover:before:bottom-[-4px] group-hover:before:left-0 group-hover:before:transition-all group-hover:before:duration-300">Chats</button>
                </Link>
                <Link to={""} className="relative group">
                    <button className="text-white text-sm sm:text-base relative transition-all duration-300 group-hover:text-cyan-600 group-hover:scale-105 group-hover:before:content-[''] group-hover:before:absolute group-hover:before:w-full group-hover:before:h-1 group-hover:before:bg-cyan-600 group-hover:before:bottom-[-4px] group-hover:before:left-0 group-hover:before:transition-all group-hover:before:duration-300">Mis trabajos</button>
                </Link>
                <Link to={"/my/profile/employee"} className="relative group">
                    <button className="text-white text-sm sm:text-base relative transition-all duration-300 group-hover:text-cyan-600 group-hover:scale-105 group-hover:before:content-[''] group-hover:before:absolute group-hover:before:w-full group-hover:before:h-1 group-hover:before:bg-cyan-600 group-hover:before:bottom-[-4px] group-hover:before:left-0 group-hover:before:transition-all group-hover:before:duration-300">Mi perfil</button>
                </Link>
            </div>
            <div className="lg:w-2/4 flex flex-row justify-end items-center lg:gap-12 gap-4">
                <a href="https://wa.me/3208393883" className="relative group">
                    <button className="text-white text-sm sm:text-base relative transition-all duration-300 group-hover:text-cyan-600 group-hover:scale-105 group-hover:before:content-[''] group-hover:before:absolute group-hover:before:w-full group-hover:before:h-1 group-hover:before:bg-cyan-600 group-hover:before:bottom-[-4px] group-hover:before:left-0 group-hover:before:transition-all group-hover:before:duration-300">Soporte</button>
                </a>
                <button className="text-white text-sm sm:text-base relative transition-all duration-300 group-hover:text-cyan-600 group-hover:scale-105 group-hover:before:content-[''] group-hover:before:absolute group-hover:before:w-full group-hover:before:h-1 group-hover:before:bg-cyan-600 group-hover:before:bottom-[-4px] group-hover:before:left-0 group-hover:before:transition-all group-hover:before:duration-300" onClick={logOut}>Salir</button>
            </div>
        </div>
    );
}

export default NavbarEmpleador;
