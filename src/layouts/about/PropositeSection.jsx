import {useLanguage} from '../../hooks/LanguageContext.jsx'

function PropositeSection() {
    const {t} = useLanguage()

    return(
        <section className="relative mx-auto py-0 border-b-2 border-gray-500 bg-blue-100">

            <main className="relative max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 grid md:grid-cols-2 gap-8 sm:gap-10 px-4 sm:px-6">
                
                <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-xl transition">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
                        🚀 {t.propositeSection.mission}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-xl">
                        {t.propositeSection.missionDesc}
                    </p>
                </div>
 
                <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-xl transition">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
                        🌎 {t.propositeSection.vision}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-xl">
                        {t.propositeSection.visionDesc}
                    </p>
                </div>
 
            </main>
            
        </section>
    )

}

export default PropositeSection
