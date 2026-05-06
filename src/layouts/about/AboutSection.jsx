import perfil from '../../assets/images/perfil.webp'
import {useLanguage} from '../../hooks/LanguageContext'
import { useState } from 'react'

function AboutSection(){

    const {t} = useLanguage()
    const [rainLines] = useState(() =>
        [...Array(15)].map(() => ({
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`
        }))
    )


    return(
        <section
            id="about-section"
            className="relative p-[4%] border-b-2 border-gray-500 bg-blue-100 overflow-hidden"
        >
            <aside className="absolute inset-0 pointer-events-none">
                {rainLines.map((style, i) => (
                    <div
                        key={i}
                        className="rain-line"
                        style={style}
                    />
                ))}
            </aside>
            <div className="relative max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700">
                     {t.aboutSection.title1}
                 </h1>
                <p className="text-gray-600 mt-4 text-sm sm:text-base lg:text-xl max-w-2xl mx-auto leading-relaxed">
                    {t.aboutSection.subtitle1}
                </p>
            </div>
             <main className="relative max-w-7xl mx-auto mt-10 sm:mt-16 lg:mt-20 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                <article className="lg:col-span-7">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-700 mb-4 sm:mb-6">
                        {t.aboutSection.title2}
                    </h2>

                    <p className="text-gray-700 text-sm sm:text-base lg:text-xl leading-relaxed text-justify mb-4 sm:mb-6 lg:mb-8">
                        {t.aboutSection.paragraph1}
                    </p>

                    <p className="text-gray-700 text-sm sm:text-base lg:text-xl leading-relaxed text-justify mt-4 mb-4 sm:mb-6 lg:mb-8">
                        {t.aboutSection.paragraph2}
                    </p>
                </article>
                <figure className="lg:col-span-5 flex flex-col items-center lg:items-end">
                    <aside className="relative group">
                        <img
                             src={perfil}
                             alt="Aaron Sosa"
                             className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-xl shadow-xl transition duration-500 group-hover:scale-105"
                         />
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-blue-300/40"></div>
                    </aside>
                    <main className="text-center mt-4 lg:text-right">
                        <p className="text-gray-700 font-semibold text-sm sm:text-base lg:text-xl">
                             {t.aboutSection.name}
                         </p>
                         <p className="text-gray-700 text-sm sm:text-base lg:text-xl">
                             {t.aboutSection.role}
                         </p>
                    </main>
                </figure>
            </main>
            
        </section>
    )
}

export default AboutSection