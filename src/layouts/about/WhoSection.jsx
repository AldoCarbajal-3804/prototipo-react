import ai from "../../assets/images/ai.webp"
import company from "../../assets/images/company.webp"
import innovation from "../../assets/images/innovation.webp"
import latam from "../../assets/images/latam.webp"
import leader from "../../assets/images/leader.webp"
import team from "../../assets/images/team.webp"
import { CardWork } from "../../components/CardWork.jsx"
import { useLanguage } from '../../hooks/LanguageContext.jsx'
import {useState,useEffect,useMemo, useCallback} from 'react'

function WhoSection(){
    const { t } = useLanguage()
    const images = [ai, company, innovation, latam, leader, team]
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setItemsToShow(1);
            else if (window.innerWidth < 1024) setItemsToShow(2);
            else setItemsToShow(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    const totalCards = t.whoSection.cards.length;
    const maxIndex = totalCards - itemsToShow;

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return(
        <section id="who-section" className="bg-blue-200 py-16 sm:py-24 border-b-2 border-gray-400 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                <h3 className="text-gray-800 mb-12 text-center text-3xl sm:text-4xl font-bold">
                    {t.whoSection.heading}
                </h3>

                <div className="relative group">
                
                <article className="overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                    >
                        {t.whoSection.cards.map((card, index) => (
                            <div 
                                key={index} 
                                className="shrink-0 px-2"
                                style={{ width: `${100 / itemsToShow}%` }}
                            >
                                <CardWork 
                                    title={card.title}
                                    desc={card.desc}
                                    img={images[index]}
                                />
                            </div>
                        ))}
                        </div>
                    </article>

                <button 
                    onClick={prevSlide}
                    className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 group-hover:left-2 z-10"
                    aria-label="Anterior"
                >
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>

                <button 
                    onClick={nextSlide}
                    className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 group-hover:right-2 z-10"
                    aria-label="Siguiente"
                >
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>

                <article className="flex justify-center gap-2 mt-10">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-2 transition-all rounded-full ${currentIndex === i ? 'w-8 bg-blue-900' : 'w-2 bg-blue-400'}`}
                        />
                    ))}
                </article>

                </div>
            </div>
        </section>
    )
}

export default WhoSection