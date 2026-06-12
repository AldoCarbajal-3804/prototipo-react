
import { useLanguage } from '@/hooks/LanguageContext.jsx'
import { SocialLink } from '@/components/ui/SocialLink.jsx'
import twitter from '@/assets/svg/social/twitter.svg'
import youtube from '@/assets/svg/social/youtube.svg'
import linkedin from '@/assets/svg/social/linkedin.svg'

function Footer() {

    const {t} = useLanguage()

    return (
        <footer
            className="border-t border-gray-800 bg-black text-gray-300 px-6 sm:px-8 md:px-12 lg:px-20 py-16"
            role="contentinfo"
        >   
            {/* Contenedor de Columnas */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between items-start gap-12 lg:gap-8">

                {/* Columna 1: Acerca de la empresa */}
                <aside className="w-full lg:max-w-xs" aria-label="Acerca de JA Partners">
                    <div className="flex items-center gap-2 mb-5">
                        {/* Placeholder para el logo si lo necesitas, o puedes meter tu etiqueta <img> */}
                        <div className="logo bg-blue-600 w-3 h-3 rounded-full"></div>
                        <h2 className="font-bold text-xl text-white tracking-tight">
                            J&A Partners
                        </h2>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                        {t.footer.header.about}
                    </p>
                </aside>

                {/* Columna 2: Call to Action (CTA) */}
                <section className="w-full lg:max-w-sm" aria-labelledby="cta-heading">
                    <h3
                        id="cta-heading"
                        className="text-xs font-bold tracking-widest text-white mb-5 uppercase"
                    >
                        {t.footer.header.cta}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                        {t.footer.header.description}
                    </p>
                    <a
                        href="#form-section"
                        className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-gray-200 active:scale-95 transition-all duration-200"
                    >
                        {t.footer.header.asesors}
                    </a>
                </section>

                {/* Columna 3: Redes Sociales */}
                <section className="w-full lg:w-auto min-w-40" aria-labelledby="social-heading">
                    <h3 id="social-heading" className="text-xs font-bold tracking-widest text-white mb-5 uppercase">
                        {t.footer.quickLinks}
                    </h3>
                    <nav aria-label={t.footer.quickLinks}>
                        <ul className="space-y-3">
                            <SocialLink
                                icon={twitter}
                                name="Twitter"
                                link="https://www.twitter.com/"
                            />
                            <SocialLink
                                icon={youtube}
                                name="Youtube"
                                link="https://www.youtube.com/"
                            />
                            <SocialLink
                                icon={linkedin}
                                name="LinkedIn"
                                link="https://pe.linkedin.com/"
                            />
                        </ul>
                    </nav>
                </section>
            </div>

            {/* Barra Inferior */}
            <div className="max-w-7xl mx-auto border-t border-gray-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                {/* Contacto en línea */}
                <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1">
                    <span>{t.footer.contact.address}</span>
                    <span className="hidden md:inline text-gray-700">|</span>
                    <a href="tel:+51925290477" className="hover:text-gray-300 transition-colors">{t.footer.contact.phone}</a>
                    <span className="hidden md:inline text-gray-700">|</span>
                    <a href="mailto:contacto@japartners.com" className="hover:text-gray-300 transition-colors">{t.footer.contact.email}</a>
                    <span className="hidden md:inline text-gray-700">|</span>
                    <span>{t.footer.contact.hours}</span>
                </div>

                {/* Políticas */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    <a href="/privacy-policy" className="hover:text-gray-300 transition-colors">
                        {t.footer.politics.privacy}
                    </a>
                    <a href="/terms" className="hover:text-gray-300 transition-colors">
                        {t.footer.politics.terms}
                    </a>
                    <a href="/cookies" className="hover:text-gray-300 transition-colors">
                        {t.footer.politics.cookies}
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <p className="max-w-7xl mx-auto mt-4 pt-4 border-t border-gray-900 text-center text-xs text-gray-600">
                © {new Date().getFullYear()} J&A Partners. {t.footer.politics.copyright}.
            </p>
        </footer>
    );
}

export default Footer