import { useRef } from 'react'
import { useLanguage } from '../../hooks/LanguageContext.jsx'
import { useScroll } from '../../hooks/useScroll.js'

function CtaSection(){
    const { t } = useLanguage()
    const sectionRef = useRef(null)
    const { scrollY, isVisible } = useScroll(sectionRef)

    return(
        <section ref={sectionRef} className="cta-section relative overflow-hidden p-4 sm:p-6 md:p-8 lg:p-8 bg-blue-200 border-b-2 border-gray-500">
            <div 
                className="cta rounded-xl sm:rounded-2xl p-8 sm:p-12 shadow-lg bg-sky-100 transition-all duration-700"
                style={{
                    transform: isVisible ? `scale(${0.9 + scrollY * 0.1}) translateY(${(1 - scrollY) * 30}px)` : 'scale(0.9) translateY(30px)',
                    opacity: isVisible ? scrollY : 0,
                }}
            >
                <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl pb-4 sm:pb-6 md:pb-8">{t.cta.title}</h1>
                <p className="text-center text-sm sm:text-base md:text-lg pb-6 sm:pb-8 px-4">{t.cta.description}</p>
                <div className="text-center"><button className="bg-blue-950 px-4 sm:px-5 md:px-6 py-3 sm:py-4 rounded-lg md:rounded-xl font-bold text-sm sm:text-base md:text-lg cursor-pointer hover:opacity-90 transition text-gray-100"> <a href="#form-section">{t.cta.button}</a></button></div>
            </div>
        </section>
    )
}

export default CtaSection
