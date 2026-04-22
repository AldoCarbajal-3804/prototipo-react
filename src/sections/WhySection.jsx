import { useState } from 'react';
import { AccordionItem } from '../components/AccordionItem';

function WhySection() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "Atrae las oportunidades correctas",
      desc: "Identificamos y llegamos a prospectos de alto valor a través de canales digitales dirigidos, asegurando que tu negocio se conecte con la audiencia correcta en el momento correcto.",
      category: "Generación de Leads"
    },
    {
      title: "Construye confianza instantáneamente",
      desc: "Creamos una propuesta de valor clara y convincente que comunica credibilidad, experiencia y diferenciación desde la primera interacción.",
      category: "Autoridad de Marca"
    },
    {
      title: "Captura demanda real",
      desc: "A través de journeys de usuario optimizados y formularios inteligentes, transformamos el interés en leads accionables minimizando la fricción.",
      category: "Innovación"
    },
    {
      title: "Filtra lo que importa",
      desc: "Evaluamos cada lead basado en criterios clave como necesidades del negocio, urgencia, presupuesto y preparación tecnológica para priorizar oportunidades de alto impacto.",
      category: "Puntuación de Leads"
    },
    {
      title: "Convierte en reuniones",
      desc: "Los prospectos calificados se guían sin problemas para agendar reuniones, asegurando que cada interacción tenga contexto y relevancia comercial.",
      category: "Automatización de Ventas"
    },
    {
      title: "Escala el crecimiento a largo plazo",
      desc: "Implementamos seguimientos continuos, automatización y seguimiento de rendimiento para generar crecimiento sostenible y alianzas a largo plazo.",
      category: "Crecimiento Estratégico"
    }
  ];

  return (
    <section id="why-section" className="bg-blue-100 py-20 lg:py-32 px-6 sm:px-12 lg:px-24 border-b border-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-blue-200 via-cyan-100 to-blue-300 animate-gradient-slow" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/3 w-64 h-64 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">

        <div className="lg:w-1/3 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-gray-900">
            En J&A Partners, construimos sistemas diseñados para convertir la atención en crecimiento.
          </h2>
        </div>
        
        <div className="lg:w-2/3">
          <div className="flex flex-col">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                desc={item.desc}
                category={item.category}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

      </section>
    </section>
  );
}

export default WhySection;