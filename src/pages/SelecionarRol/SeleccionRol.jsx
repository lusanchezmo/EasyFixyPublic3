import React from "react";
function SeleccionRol() {
    return (
    <div className="flex items-center justify-center h-screen w-screen">
        <section className="w-auto h-auto border border-black border-solid">

            <div className="w-auto h-auto border border-black border-solid px-6 py-6">
                <div className="flex flex-row px-1 py-1">
                    <button className="pr-14 font-bold text-2xl">⭠</button>
                    <img src="/icons/logo-texto.svg" alt="icono" />
                </div>
                <h1 className="font-bold text-2xl" >Selecciona tu rol:</h1>
                <h2>No te preocupes puedes cambiarlo mas adelante</h2>
            </div>

            <div>
                <div className="flex flex-row mx-4 my-2 w-auto h-auto border border-black border-solid">
                    <img src="/icons/equis.svg" alt="provisional" className="w-25 h-25 px-4 py-4"/>
                    <p className="ml-4 mt-14">Quiero trabajar</p>
                    <p className="ml-4 mt-14 font-bold text-2xl">⭢</p>
                </div>
            </div>

            <div>
                <div className="flex flex-row mx-4 my-2 w-auto h-auto border border-black border-solid">
                    <img src="/icons/equis.svg" alt="provisional" className="w-25 h-25 px-4 py-4"/>
                    <p className="ml-4 mt-14">Quiero trabajar</p>
                    <p className="ml-4 mt-14 font-bold text-2xl">⭢</p>
                </div> 
            </div>
        </section>
    </div>
    )
}

export default SeleccionRol;