import React from "react";

const Hero = () => {
    return <div className="relative w-full h-screen flex justify-center flex-col bg-clip pt-[12vh] z-10" style={{ backgroundColor: "var(--color-regal-blue)" }}>
        <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
            {/* Text Content */}
            <div>
                {/*Titulo */}
                <h1 className="text-3xl md:text-4xl text-white lg:text-5xl mt-6 mb-6 font-bold leading-[2.5rem] md:leading-[3.5rem]">Donde los proyectos cobran vida</h1>
                {/*Descripcion */}
                <p className="text-xs sm:text-sm md:text-base font-medium text-gray-300">
                    Conecta a tu equipo, simplifica la gestión y alcanza tus objetivos con una solución diseñada para que cada proyecto sea más organizado, 
                    seguro y productivo. Centraliza tareas, comunica en tiempo real y mantén el control con herramientas que impulsan la colaboración y 
                    convierten cada idea en resultados concretos.
                </p>
                {/* Boton */}
                <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    {/* 1er Boton */}
                    <a href="/register" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" style={{ backgroundColor: "var(--color-regal-orange)" }} data-rounded="rounded-2xl" data-primary-reset="{}">
                        Get Started
                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
            {/* Image Content */}
            <div className="mx-auto hidden xl:block">
                <img src="/images/hero-image.png" alt="Image" width={580} height={580}/>
            </div>
        </div>
    </div>
};

export default Hero;