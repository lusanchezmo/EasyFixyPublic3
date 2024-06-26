import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const LandingPage = () =>{

    return(
        <>
            <div className="w-full h-20 mainBackground px-[5%] flex fixed text-white">
                <div className="w-2/6 flex flex-row justify-start items-center">
                    <img src="logo.svg" alt="logo" className="h-full" />
                    <p className="text-4xl fontNameLogo"> EasyFixy</p>

                </div>
                <div className="w-4/6 flex flex-row justify-between items-center font-bold text-base">
                    <Link to={"/about-us"}>¿Quienes somos?</Link>
                    <Link to={"/login"}>Iniciar sesión</Link>
                    <Link to={"/register"}>Registrarse</Link>
                </div>

            </div>
            
            <div className="w-screen h-screen overflow-y-scroll pt-20">
                <div className="backgroundLanding w-full pt-[30px] px-[5%] flex flex-col justify-between h-full pb-20 text-white">

                    <h1 className="text-[4.5vw] leading-none w-1/2 mb-5">
                        Contrata a los mejores empleados para tus necesidades cotidianas, en línea.
                    </h1>
                    <ul className="text-[2vw] mb-5">
                        <li>
                            El mercado independiente más grande de Colombia
                        </li>
                        <li>
                            Cualquier trabajo cotidiano que puedas pensar
                        </li>
                        <li>
                            Obten un descuento de bienvenida
                        </li>
                        <li>
                            Paga solo cuando estés 100% satisfecho
                        </li>
                    </ul>
                    <div className="flex flex-row text-[2vw] h-12 gap-14 ">
                        <Link to={"/login"}className="mainBackground h-full rounded-full flex items-center justify-center px-4">
                            Contrata ahora mismo
                        </Link>
                        <Link to={"/login"} className="bg-black h-full rounded-full w-fit flex items-center justify-center px-4 text-[2vw]">
                            Gana dinero realizando trabajos
                        </Link>
                    </div>
                </div>
                <div className="h-10 w-full mainBackground ">

                </div>
                <div className="h-full w-full backgroundLanding2 flex flex-row px-[5%] justify-start items-center text-white">
                    
                    <div className="mainBackground h-[70%] w-1 mr-3">

                    </div>
                    <h1 className="text-[4.5vw] leading-normal w-1/3 font-bold mr-24">Haz el trabajo en nuestras diferentes 
                        <span className="textNaranja"> categorías
                        </span>
                    </h1>
                    <ul className="text-[3vw]">
                        <li>
                            Comercial y Ventas
                        </li>
                        <li>
                            Informática
                        </li>
                        <li>
                            Artes y Oficios
                        </li>
                        <li>
                            Turismo
                        </li>
                        <li>
                            Restauración
                        </li>
                        <li>
                            Técnicos
                        </li>
                        <li>
                            Compras y logística
                        </li>
                        <li>
                            Profesiones varias
                        </li>
                    </ul>
                </div>
                <Footer />
            </div>
            
        </>
    );
}
export default LandingPage;