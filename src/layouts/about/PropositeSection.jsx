import {useLanguage} from '../../hooks/LanguageContext.jsx'
import { useScrollAnimation } from '../../hooks/useScrollAnimation.jsx'

function PropositeSection() {
    const {t} = useLanguage()
    const [missionRef, missionVisible] = useScrollAnimation()
    const [visionRef, visionVisible] = useScrollAnimation()

    return(
        <section className="relative mx-auto py-0 border-b-2 border-gray-500 bg-blue-100">

            <main className="relative max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 px-4 sm:px-6">
                
                <div
                    ref={missionRef}
                    className={`md:col-start-1 md:row-start-1 bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-xl transition ${
                        missionVisible ? 'lg:animate-slide-right' : 'lg:opacity-0'
                    }`}
                >
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
                        🚀 {t.propositeSection.mission}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-xl text-justify">
                        {t.propositeSection.missionDesc}
                    </p>
                </div>
 
                <div
                    ref={visionRef}
                    className={`md:col-start-2 md:row-start-2 bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-xl transition ${
                        visionVisible ? 'lg:animate-slide-left' : 'lg:opacity-0'
                    }`}
                >
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
                        🌎 {t.propositeSection.vision}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-xl text-justify">
                        {t.propositeSection.visionDesc}
                    </p>
                </div>
 
            </main>
            
        </section>
    )

}

export default PropositeSection
