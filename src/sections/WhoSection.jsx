import ai from "../assets/images/ai.webp"
import company from "../assets/images/company.webp"
import innovation from "../assets/images/innovation.webp"
import latam from "../assets/images/latam.webp"
import leader from "../assets/images/leader.webp"
import team from "../assets/images/team.webp"
import { CardWork } from "../components/CardWork"

function WhoSection(){

    return(
        <div id="who-section" className="bg-blue-200 py-10 border-b-2 border-gray-600">
            <h3 className="text-gray-700 mb-14 text-center text-2xl sm:text-3xl lg:text-4xl font-bold px-4">
                Con quién trabajamos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8 lg:px-20">
                <CardWork 
                    title="Empresas en crecimiento"
                    desc="Negocios con ineficiencias operativas que buscan escalar mediante soluciones digitales estructuradas."
                    img={ai}
                />
                <CardWork 
                    title="Socios Estratégicos"
                    desc="Colaboramos con empresas líderes para crear proyectos de alto impacto."
                    img={company}
                />
                <CardWork 
                    title="Laboratorios de Innovación"
                    desc="Nuestros laboratorios de innovación fomentan la creatividad y el avance tecnológico."
                    img={innovation}
                />
                <CardWork 
                    title="Mercados LATAM"
                    desc="Adaptamos nuestras soluciones para cumplir con las necesidades únicas de los mercados LATAM."
                    img={latam}
                />
                <CardWork 
                    title="Equipo Directivo"
                    desc="Nuestro equipo directivo nos guía hacia nuestra visión y objetivos."
                    img={leader}
                />
                <CardWork 
                    title="Equipo Diversificado"
                    desc="Reunimos un equipo diverso de expertos para abordar desafíos complejos."
                    img={team}
                />
            </div>
        </div>
    )

}

export default WhoSection