
import { Info } from "../components/Info"
import { Link } from "../components/Link"

function Footer(){
    return(
        <footer class="footer flex flex-col sm:flex-row justify-between gap-8 sm:gap-10 md:gap-12 p-6 sm:p-8 md:p-12 lg:p-20 text-gray-300 border-t-2 border-gray-600" role="contentinfo">
            <aside class="summary w-full sm:w-1/2 md:w-1/3" aria-label="Acerca de J&A Partners">
                <div class="flex items-center gap-2 mb-4 sm:mb-5 font-bold text-sm sm:text-base">
                    <div class="logo px-2 py-1 rounded text-xs" aria-label="Logo"></div>
                    J&A Partners
                </div>
                <p class="leading-relaxed text-xs sm:text-sm" aria-label="Information">Leading the charge in AI-driven business intelligence and research automation. Engineering the tools for tomorrow's industry leaders.</p>
            </aside>
            <nav className="nav">
                <h3 class=" mb-4 sm:mb-5 text-xs sm:text-sm font-bold tracking-widest">QUICK LINKS</h3>
                <ul class="list-none flex flex-col gap-2">
                    <Link name="Home" link="#"></Link>
                    <Link name="Services" link="#services-section"></Link>
                    <Link name="Contact" link="#form-section"></Link>
                </ul>
            </nav>
            <ul className="more-info" aria-labelledby="contact-heading">
                <h3 class="text-white mb-4 sm:mb-5 text-xs sm:text-sm font-bold tracking-widest" aria-label="Información de contacto">CONNECT</h3>
                <Info icon="📧" value="hello@japartners.ai" />
                <Info icon="📍" value="San Francisco, CA" />
                <Info icon="📞" value="+1 (555) 123-4567" />
            </ul>
        </footer>
    )
}

export default Footer