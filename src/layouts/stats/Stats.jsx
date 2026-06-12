import { useLanguage } from '@/hooks/LanguageContext.jsx';
import './stats.css';

function Stats() {
    const { t } = useLanguage()
    
    return (
        <section
            id="stats-section"
            className="relative bg-neutral-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b-2 border-neutral-500"
        >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <span className="particle-bounce bg-blue-400" style={{ animationDuration: "12s, 8s" }}></span>
                <span className="particle-bounce bg-pink-400" style={{ animationDuration: "10s, 6s" }}></span>
                <span className="particle-bounce bg-purple-400" style={{ animationDuration: "14s, 9s" }}></span>
                <span className="particle-bounce bg-purple-500" style={{ animationDuration: "13s, 7s" }}></span>
                <span className="particle-bounce bg-purple-200" style={{ animationDuration: "15s, 10s" }}></span>
                <span className="particle-bounce bg-cyan-300" style={{ animationDuration: "11s, 7s" }}></span>
            </div>
            <header className="relative max-w-4xl mx-auto text-center px-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 tracking-tight">
                    {t.stats.heading}
                </h2>
                <p className="text-neutral-600 mt-4 text-base md:text-lg">
                    {t.stats.subtitle}
                </p>
            </header>
            <article className="relative max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6">
                {t.stats.metrics.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white border border-neutral-200 rounded-xl p-4 sm:p-6 text-center transition duration-300 hover:shadow-md hover:-translate-y-1"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-800">
                            {item.value}
                        </h2>
                        <p className="text-neutral-700 mt-2 text-sm sm:text-base font-medium">
                            {item.text}
                        </p>
                        <p className="text-xs sm:text-sm md:text-base text-neutral-500 mt-2 line-clamp-2">
                            {item.extra}
                        </p>
                    </div>
                ))}
            </article>
            
            <span className="relative max-w-4xl mx-auto mt-16 text-center px-6">
                <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                    {t.stats.metricsText}
                </p>
            </span>

            <div className="relative max-w-6xl mx-auto mt-16 border-t border-neutral-200"></div>
            
            <article className="relative max-w-6xl mx-auto mt-12 px-6">
                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-800 mb-12">
                    {t.stats.performanceHeading}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.stats.performanceCards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-neutral-200 p-6 text-center
                            transition duration-300 hover:shadow-md hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 center text-xl">
                                {card.icon}
                            </div>

                            <h3 className="text-neutral-700 font-medium">
                                {card.title}
                            </h3>

                            <p className="text-2xl sm:text-3xl font-semibold mt-2 text-neutral-900">
                                {card.value}
                            </p>

                            <p className="text-xs sm:text-sm md:text-base text-neutral-500 mt-2">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </article>
            <footer className="relative max-w-3xl mx-auto mt-16 text-center px-6">
                <p className="text-neutral-700 text-sm sm:text-base">
                    {t.stats.cta}
                </p>
                <button className="mt-4 px-6 py-3 bg-blue-900 text-white rounded-lg 
                    hover:bg-blue-800 transition duration-300">
                    <a href="#form-section">
                        {t.stats.buttonCta}
                    </a>
                </button>
            </footer>
        </section>
    )
}
export default Stats