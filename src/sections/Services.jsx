import { Card } from "../components/Card"
import searchIcon from '../assets/svg/search.svg'
import business from '../assets/svg/auto.svg'
import web from '../assets/svg/code.svg'
import chat from '../assets/svg/chat.svg'
import erp from '../assets/svg/stats.svg'
import crmIcon from '../assets/svg/search.svg'

function Services() {

    return(
        <section 
            id="services-section" 
            className="bg-blue-100"
            aria-label="Nuestros servicios"
        >
            <div className="px-4 sm:px-6 md:px-8">
                <h1 
                    className="text-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-4 sm:pb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700"
                    id="services-title"
                >
                    Nuestros Servicios
                </h1>
                <p 
                    className="text-gray-700 text-center pb-8 sm:pb-10 md:pb-12 text-sm sm:text-base md:text-lg"
                    aria-describedby="services-title"
                >
                    Soluciones tecnológicas personalizadas para impulsar tu negocio
                </p>
            </div>

            <div 
                className="cards-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
                role="region"
                aria-labelledby="services-title"
                aria-live="polite"
            >
                <Card 
                    icon={searchIcon}
                    name="IA para Investigaciones"
                    description="Desarrollo de software basado en inteligencia artificial especializado para proyectos de investigación académica y científica."
                />
                <Card 
                    icon={business}
                    name="Software Empresarial"
                    description="Soluciones de software personalizadas diseñadas para optimizar procesos y operaciones de empresas de todos los tamaños."
                />
                <Card 
                    icon={web}
                    name="Páginas Web"
                    description="Diseño y desarrollo de sitios web modernos, responsivos y optimizados para generar resultados."
                />
                <Card 
                    icon={chat}
                    name="Chat Bots"
                    description="Asistentes virtuales inteligentes que automatizan la atención al cliente y mejoran la experiencia de usuario."
                />
                <Card 
                    icon={erp}
                    name="Enterprise Resource Planning (ERP)"
                    description="Sistemas de planificación de recursos empresariales para gestionar inventarios, finanzas y operaciones de manera integrada."
                />
                <Card 
                    icon={crmIcon}
                    name="Customer Relationship Management (CRM)"
                    description="Gestión de relaciones con clientes para mejorar ventas, seguimiento y satisfacción del cliente."
                />
            </div>
        </section>
    )
}

export default Services