'use client';
import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
    const Review = () => {
    return (      
        <div className="pt-16 pb-16">
            <SectionHeading 
            Heading="Testimonios de los clientes" 
            subHeading="Opiniones reales de equipos que han mejorado su productividad con CollabOwl."
             />
             <div className="w-[80%] mx-auto mt-16">
                <Carousel
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                >
                    <ReviewCard 
                    image="/images/Udemy.jpg" 
                    title="Grandes Cualidades" 
                    username="Udemy" 
                    userRole="Marketing"
                    description="El Gestor Dinámico de Trabajos Colaborativos nos permitió coordinar las campañas de marketing con mayor claridad. Las tareas se asignan fácilmente y todos pueden ver el avance en tiempo real. Nos ayudó a reducir los errores de comunicación entre el equipo."
                    />
                    <ReviewCard 
                    image="/images/Maria.jpg" 
                    title="Excelente para la Colaboración"
                    username="Maria"
                    userRole="Desarrollo de Software"
                    description="La herramienta ha sido excelente para la colaboración entre desarrolladores. Podemos compartir avances, registrar incidencias y mantener el control de versiones sin complicaciones. Antes perdíamos mucho tiempo organizando tareas, ahora todo está centralizado."
                    />
                    <ReviewCard 
                    image="/images/Carlos.jpg" 
                    title="Mejoró Nuestra Productividad" 
                    username="Carlos"
                    userRole="Gestión de Proyectos"
                    description="Gracias al GDTC logramos mejorar la productividad del equipo. Las funciones de seguimiento y reportes nos permiten detectar cuellos de botella y optimizar los plazos de entrega. Es una plataforma intuitiva y muy útil para cualquier líder de proyecto."
                    />
                </Carousel>
             </div>
        </div>

    );
};

export default Review;