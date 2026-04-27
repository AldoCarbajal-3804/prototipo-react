import ai from "../../assets/images/ai.webp"
import company from "../../assets/images/company.webp"
import innovation from "../../assets/images/innovation.webp"
import latam from "../../assets/images/latam.webp"
import leader from "../../assets/images/leader.webp"
import team from "../../assets/images/team.webp"
import { CardWork } from "../../components/CardWork.jsx"
import { useLanguage } from '../../hooks/LanguageContext.jsx'

function WhoSection(){
    const { t } = useLanguage()
    const images = [ai, company, innovation, latam, leader, team]

    return(
        <div id="who-section" className="bg-blue-200 py-10 border-b-2 border-gray-500">
            <h3 className="text-gray-700 mb-14 text-center text-2xl sm:text-3xl lg:text-4xl font-bold px-4">
                {t.whoSection.heading}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
                {t.whoSection.cards.map((card, index) => (
                    <CardWork 
                        key={index}
                        title={card.title}
                        desc={card.desc}
                        img={images[index]}
                    />
                ))}
            </div>
        </div>
    )
}

export default WhoSection