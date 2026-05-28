import IconHero from "./IconHero"
import { useLanguage } from '@/hooks/LanguageContext.jsx'

function Hero() {
    const { t } = useLanguage()

    return(
        <section id="hero-section" className="v-stack sm:h-stack sm:justify-between justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 border-b-2 border-neutral-500 bg-blue-200" aria-label="Page principal">
 
            <div className=" v-stack justify-center items-center sm:items-start sm:flex-1 text-center sm:text-left text-neutral-700" role="region" aria-labelledby="hero-title">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4" aria-label="title">
                    {t.hero.title}
                    <br />
                    <strong className="text-blue-900 font-extrabold">
                        {t.hero.subtitleStrong}
                        <br />
                        {t.hero.subtitleStrong2}
                        <br />
                        {t.hero.subtitleStrong3}
                        <br />
                    </strong>
                </h1>
                
                <p className="description text-sm sm:text-base lg:text-xl mb-4 leading-relaxed max-w-2xl text-neutral-700" aria-label="description">
                    {t.hero.description}
                </p>
                
                <div className="cont-btn v-stack sm:h-stack justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 w-full sm:w-auto" role="group" aria-label="Botones de acción principal">
                    <a href="#form-section" className="btn-form inline-block px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl text-sm sm:text-base lg:text-lg font-bold hover:opacity-90 transition whitespace-nowrap bg-sky-950 text-neutral-100 no-underline">
                        {t.hero.buttonPrimary}
                    </a>
                    <a href="#services-section" className="inline-block text-sm sm:text-base lg:text-lg border border-neutral-300 px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl no-underline text-neutral-700 hover:opacity-90 transition">
                        {t.hero.buttonSecondary}
                    </a>
                </div>
            </div>
            
            <figure className="bg-sky-950 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 my-8 sm:my-12 lg:my-16 rounded-2xl sm:rounded-3xl relative center mx-auto shrink-0" role="img" aria-label="Icono decorativo de animación de respiración">
                <IconHero />
            </figure>
            
        </section>
    )
}
export default Hero