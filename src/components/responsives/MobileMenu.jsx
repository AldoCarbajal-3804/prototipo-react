import { useState } from 'react';
import { Link } from '@/components/ui/Link.jsx';
import { useScrollTo } from '@/hooks/useScrollTo.jsx';
import translateIcon from '@/assets/svg/translate.svg';

export const MobileMenu = ({ isOpen, closeMenu, t, toggleLanguage, menuRef, activeSection }) => {
    const [isSubOpen, setIsSubOpen] = useState(false);
    const scrollTo = useScrollTo();

    const handleScrollTo = (link) => {
        scrollTo(link);
        setIsSubOpen(false);
        closeMenu();
    };

    return (
        <div
            ref={menuRef}
            className={`md:hidden border-t border-neutral-200 bg-blue-100 overflow-hidden transition-all duration-350 ease-out ${isOpen ? 'max-h-175 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
        >
            <ul className="v-stack px-4 py-2 gap-1">
                {t.nav.links.map((item) => {
                    const isAboutActive = ['about-section', 'history-section', 'why-section', 'who-section', 'stats-section'].includes(activeSection)
                    const linkTarget = {
                        'hero-section': '#hero-section',
                        'about-section': '#about-section',
                        'history-section': '#about-section',
                        'why-section': '#about-section',
                        'who-section': '#about-section',
                        'stats-section': '#about-section',
                        'services-section': '#services-section',
                        'testimonials-section': '#form-section',
                        'form-section': '#form-section',
                        'agenda-section': '#form-section',
                    }[activeSection] || ''

                    return (
                    <li key={item.link}>
                        {item.submenu ? (
                            <div className="v-stack">
                                <button
                                    onClick={() => setIsSubOpen(!isSubOpen)}
                                    className={`flex items-center justify-between w-full py-3 text-sm sm:text-base font-medium cursor-pointer ${
                                        isAboutActive ? 'text-blue-700' : 'text-neutral-800'
                                    }`}
                                    aria-expanded={isSubOpen}
                                >
                                    {item.name}
                                    <svg className={`w-5 h-5 transition-transform duration-200 ${isSubOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isSubOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="ml-4 border-l-2 border-blue-300 pl-4 my-1 v-stack gap-1">
                                        {t.nav.dropdown.map((sub) => {
                                            const subLink = sub.link.replace('#', '')
                                            const isSubActive = activeSection === subLink
                                            return (
                                            <button
                                                key={sub.link}
                                                onClick={() => handleScrollTo(sub.link)}
                                                className={`w-full text-left px-3 py-2 text-sm sm:text-base rounded-lg transition-colors duration-150 font-medium cursor-pointer ${
                                                    isSubActive
                                                        ? 'text-blue-700 bg-blue-100'
                                                        : 'text-neutral-600 hover:text-blue-900 hover:bg-blue-100'
                                                }`}
                                            >
                                                {sub.name}
                                            </button>
                                        )})}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div onClick={closeMenu} className="py-3 text-sm sm:text-base font-medium">
                                <Link name={item.name} link={item.link} sectionActive={linkTarget === item.link} />
                            </div>
                        )}
                    </li>
                )})}
            </ul>
            <div className="border-t border-neutral-200 px-4 py-4">
                <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-3 text-sm sm:text-base text-neutral-700 font-medium cursor-pointer"
                >
                    <img src={translateIcon} className="w-5 h-5" alt="" />
                    {t.nav.language}
                </button>
            </div>
        </div>
    );
};
