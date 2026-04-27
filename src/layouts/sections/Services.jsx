import { Card } from "../../components/Card"
import { useLanguage } from '../../hooks/LanguageContext.jsx'
import searchIcon from '../../assets/svg/search.svg'
import business from '../../assets/svg/auto.svg'
import web from '../../assets/svg/code.svg'
import chat from '../../assets/svg/chat.svg'
import erp from '../../assets/svg/stats.svg'
import crmIcon from '../../assets/svg/search.svg'

function Services() {
    const { t } = useLanguage()
    const icons = [searchIcon, business, web, chat, erp, crmIcon]

    return(
        <section 
            id="services-section" 
            className="bg-blue-100 border-b-2 border-gray-500"
            aria-label="Nuestros servicios"
        >
            <div className="px-4 sm:px-6 md:px-8">
                <h1 
                    className="text-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-4 sm:pb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700"
                    id="services-title"
                >
                    {t.services.title}
                </h1>
                <p 
                    className="text-gray-700 text-center pb-8 sm:pb-10 md:pb-12 text-sm sm:text-base md:text-lg"
                    aria-describedby="services-title"
                >
                    {t.services.subtitle}
                </p>
            </div>

            <div 
                className="cards-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
                role="region"
                aria-labelledby="services-title"
            >
                {t.services.cards.map((card, index) => (
                    <Card 
                        key={index}
                        icon={icons[index]}
                        name={card.name}
                        description={card.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default Services