import { useLanguage } from '../../hooks/LanguageContext.jsx';

function Stats() {
    const { t } = useLanguage()
    
    return (
        <section
            id="stats-section"
            className="relative bg-gray-50 py-20 border-b border-gray-200 overflow-hidden"
        >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="particle-bounce bg-blue-400" style={{ animationDuration: "12s, 8s" }}></div>
            <div className="particle-bounce bg-pink-400" style={{ animationDuration: "10s, 6s" }}></div>
            <div className="particle-bounce bg-purple-400" style={{ animationDuration: "14s, 9s" }}></div>
            <div className="particle-bounce bg-purple-500" style={{ animationDuration: "13s, 7s" }}></div>
            <div className="particle-bounce bg-purple-200" style={{ animationDuration: "15s, 10s" }}></div>
            <div className="particle-bounce bg-cyan-300" style={{ animationDuration: "11s, 7s" }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
                {t.stats.heading}
            </h1>
            <p className="text-gray-600 mt-4 text-base md:text-lg">
                {t.stats.subtitle}
            </p>
        </div>
        <div className="relative max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6">
            {t.stats.metrics.map((item, index) => (
                <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 text-center transition duration-300 hover:shadow-md hover:-translate-y-1"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-600">
                        {item.value}
                    </h2>
                    <p className="text-gray-700 mt-2 text-sm font-medium">
                        {item.text}
                    </p>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                        {item.extra}
                    </p>
                </div>
            ))}
        </div>
        <div className="relative max-w-4xl mx-auto mt-16 text-center px-6">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {t.stats.metricsText}
            </p>
        </div>

        <div className="relative max-w-6xl mx-auto mt-16 border-t border-gray-200"></div>
        <div className="relative max-w-6xl mx-auto mt-12 px-6">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-12">
                {t.stats.performanceHeading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.stats.performanceCards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl border border-gray-200 p-6 text-center
                        transition duration-300 hover:shadow-md hover:-translate-y-1"
                    >
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-xl">
                            {card.icon}
                        </div>

                        <h3 className="text-gray-700 font-medium">
                            {card.title}
                        </h3>

                        <p className="text-2xl font-semibold mt-2 text-gray-900">
                            {card.value}
                        </p>

                        <p className="text-xs text-gray-500 mt-2">
                            {card.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
        <div className="relative max-w-3xl mx-auto mt-16 text-center px-6">
            <p className="text-gray-700 text-base">
                {t.stats.cta}
            </p>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg 
                hover:bg-blue-700 transition duration-300">
                <a href="#form-section">
                            {t.stats.buttonCta}
                        </a>
            </button>
            </div>
        </section>
    )
}
export default Stats