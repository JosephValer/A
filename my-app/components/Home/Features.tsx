import React from "react";
import { FaGithub } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { MdGroup, MdSecurity } from "react-icons/md";
import { TiChartBar, TiDocument } from "react-icons/ti";
import SectionHeading from "../Helper/SectionHeading";

const featureData = [
    {
        title: "Autenticación Segura",
        description: 
        "Incluye registro, inicio de sesión, verificación por correo y doble factor de autenticación (2FA) para proteger el acceso de los usuarios",
        icon: <MdSecurity className="w-12 h-12 mx-auto" style={{ color: "var(--color-regal-blue)" }} />
    },
    {
        title: "Gestion de Proyectos y Tareas",
        description: 
        "Tableros Kanban, asignación de responsables, fechas límite, control de sprints y administración de backlogs para organizar el trabajo en equipo.",
        icon: <TiDocument className="w-12 h-12 mx-auto" style={{ color: "var(--color-regal-blue)" }} />
    },
    {
        title: "Gestión de Equipos y Roles",
        description: 
        "Permite invitar colaboradores, asignar permisos y configurar políticas de acceso para un control eficiente y seguro.",
        icon: <MdGroup className="w-12 h-12 mx-auto" style={{ color: "var(--color-regal-blue)" }} />
    },
    {
        title: "Reportes y Métricas",
        description: 
        "Genera reportes automáticos con gráficos y métricas que permiten visualizar el progreso y apoyar la toma de decisiones.",
        icon: <TiChartBar className="w-12 h-12 mx-auto" style={{ color: "var(--color-regal-blue)" }} />
    },
    {
        title: "Control de Versiones e Integraciones",
        description: 
        "Sincronización con repositorios como GitHub/GitLab mediante webhooks y APIs, asegurando continuidad y coherencia en el trabajo.",
        icon: <FaGithub className="w-12 h-12 mx-auto" style={{ color: "var(--color-regal-blue)" }} />
    },
    {
        title: "Comunicación y Notificaciones en Tiempo Real",
        description: 
        "Sistema de comentarios, menciones y alertas inmediatas (en la app y por correo) para mejorar la coordinación y evitar retrasos.",
        icon: <IoIosNotifications className="w-12 h-12 mx-auto" style={{ color: "var(--color-regal-blue)" }} />
    }
]

const Features = () => {
    return (
        <div className="pt-16 pb-16">
            <SectionHeading Heading="Características Principales" subHeading="Todo lo que necesitas para gestionar tus proyectos de manera eficiente." />
            <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {featureData.map((feature, index) => {
                    return (
                        <div key={index} className="text-center mx-auto card-bg p-8 rounded-xl shadow-xl border hover:shadow-2xl transition-shadow duration-300">
                            {/* Icono */}
                            <div className="mx-auto text-center">{feature.icon}</div>
                            {/* Titulo */}
                            <h1 className="mt-4 text-lg font-semibold text-adaptive">{feature.title}</h1>
                            {/* Descripcion */}
                            <p className="text-sm text-adaptive-secondary mt-4">{feature.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Features;