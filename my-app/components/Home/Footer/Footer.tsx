import React from "react";

const Footer = () => {
    return (
        <div className="pt-16 pb-16 bg-[#243c5a] dark:bg-gray-900">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 items-start">
                <div className="xl:col-span-2">
                    <div className="text-white font-bold text-2xl sm:text-3xl">CollabOwl</div>
                    <p className="mt-4 text-sm text-white dark:text-gray-400 ">
                    Facilitamos la organización, 
                    <br />
                    la comunicación y la productividad en equipos colaborativos.
                    </p>
                    <div className="mt-5">
                        <h1 className="lg:text-xl text-base text-white dark:text-white font-medium">
                            Comunicate
                        </h1>
                        <p className="mt-1 text-white dark:text-white lg:text-lg text-base font-bold">
                            +56912345678
                        </p>
                    </div>
                    <p className="text-sm text-white dark:text-white mt-4">
                        Mejora con nosotros
                    </p>
                    <p className="text-sm text-white dark:text-white mt-2">
                        <a href="mailto:contacto@collabowl.com">contacto@collabowl.com</a>
                    </p>
                </div>
                <div className="space-y-6">
                    <h1 className="text-lg font-bold text-white dark:text-white">
                        Enlaces
                    </h1>
                    <p className="Footer__link">Home</p>
                    <p className="Footer__link">Servicios</p>
                    <p className="Footer__link">Funcionalidades</p>
                    <p className="Footer__link">Guia</p>
                    <p className="Footer__link">Contacto</p>
                </div>
                <div className="space-y-6">
                    <h1 className="text-lg font-bold text-white dark:text-white">
                        Sobre GDTC
                    </h1>
                    <p className="Footer__link">Nuestro Equipo</p>
                    <p className="Footer__link">Acerca de</p>
                    <p className="Footer__link">Mision y vision</p>
                    <p className="Footer__link">blog</p>
                    <p className="Footer__link">Noticias</p>
                </div>
                <div className="space-y-6">
                    <h1 className="text-lg font-bold text-white dark:text-white">
                        Soporte
                    </h1>
                    <p className="Footer__link">Preguntas Frecuentes</p>
                    <p className="Footer__link">Documentacion</p>
                    <p className="Footer__link">Terminos y Condiciones</p>
                    <p className="Footer__link">Politica de Privacidad</p>
                    <p className="Footer__link">Mi Cuenta</p>
                </div>
            </div>
                <div className="pt-6 mt-10 border-t w-[90%] mx-auto border-white dark:border-white">
                    <p className="text-white">
                        © 2023 CollabOwl. Todos los derechos reservados.
                    </p>
                </div>
        </div>
    );
}
export default Footer;
