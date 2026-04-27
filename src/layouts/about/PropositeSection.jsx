import {useLanguage} from '../../hooks/LanguageContext'

function PropositeSection() {
    const {t} = useLanguage()

    return(
        <section className="relative mx-auto py-12 sm:py-16 md:py-20 lg:py-24 border-b-2 border-gray-500 bg-blue-200">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
                {t.propositeSection.title1}
            </h2>
 
            <article className="max-w-4xl mx-auto text-center px-4 sm:px-6">
                <p className="text-gray-600 text-sm sm:text-base lg:text-xl leading-relaxed mt-4">
                    {t.propositeSection.desc1}
                </p>
 
                <p className="text-gray-600 text-sm sm:text-base lg:text-xl leading-relaxed mt-4">
                    {t.propositeSection.desc2}
                </p>
            </article>
            
            <article className="relative max-w-7xl mx-auto mt-16 sm:mt-20 lg:mt-24 px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
                    {t.propositeSection.title2}
                </h2>
 
                <p className="text-gray-600 text-sm sm:text-base lg:text-xl leading-relaxed max-w-4xl mx-auto text-center mt-4">
                    {t.propositeSection.desc3}
                </p>
            </article>
        
            <main className="relative max-w-7xl mx-auto mt-16 sm:mt-20 lg:mt-24 grid md:grid-cols-2 gap-8 sm:gap-10 px-4 sm:px-6">
                
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
            <menu className="relative max-w-7xl mx-auto mt-16 sm:mt-20 text-center px-4 sm:px-6">
                <p className="text-gray-700 text-sm sm:text-base lg:text-xl">
                    {t.propositeSection.desc4}
                </p>
 
                <a href="#form-section">
                    <button className="mt-6 px-10 py-4 rounded-lg text-white font-medium
                        transition duration-300 hover:scale-105 hover:shadow-lg bg-blue-950"
                    >
                        {t.propositeSection.button}
                    </button>
                </a>
            </menu>
        </section>
    )

}

export default PropositeSection