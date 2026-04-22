
import { Info } from "../components/Info"
import { Link } from "../components/Link"
import { useLanguage } from '../hooks/LanguageContext.jsx'

function Footer(){
    const { t } = useLanguage()
    
    return(
        <footer className="bg-gray-900 v-stack sm:h-stack justify-between gap-8 sm:gap-10 md:gap-12 p-6 sm:p-8 md:p-12 lg:p-20 text-gray-300 border-t-2 border-gray-600" role="contentinfo">
            <aside className="summary w-full sm:w-1/2 md:w-1/3" aria-label="Acerca de J&A Partners">
                <div className="flex items-center gap-2 mb-4 sm:mb-5 font-bold text-sm sm:text-base">
                    <div className="logo px-2 py-1 rounded text-xs" aria-label="Logo"></div>
                    © 2026 - J&A Partners
                </div>
                <p className="leading-relaxed text-xs sm:text-sm" aria-label="Information">{t.footer.about}</p>
            </aside>
            <nav className="nav">
                <h3 className="text-gray-300 mb-4 sm:mb-5 text-xs sm:text-sm font-bold tracking-widest">{t.footer.quickLinks}</h3>
                <ul className="text-gray-300 list-none v-stack gap-2">
                    {t.footer.links.map((link, index) => (
                        <li key={index}><a className="text-gray-300" href={link.link}>{link.name}</a></li>
                    ))}
                </ul>
            </nav>
            <ul className="more-info" aria-labelledby="contact-heading">
                <h3 className="text-white mb-4 sm:mb-5 text-xs sm:text-sm font-bold tracking-widest" aria-label="Información de contacto">{t.footer.connect}</h3>
                {t.footer.contactInfo.map((info, index) => (
                    <Info key={index} icon={info.icon} value={info.value} />
                ))}
            </ul>
        </footer>
    )
}

export default Footer