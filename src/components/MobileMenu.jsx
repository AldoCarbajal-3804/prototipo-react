import { useState } from 'react';
import { Link } from '../components/Link.jsx';
import translateIcon from '../assets/svg/translate.svg';

export const MobileMenu = ({ isOpen, closeMenu, t, toggleLanguage, menuRef }) => {
    const [isSubOpen, setIsSubOpen] = useState(false);

    const handleScrollTo = (link) => {
        const id = link.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsSubOpen(false);
        closeMenu();
    };

    return (
        <div
            ref={menuRef}
            className={`md:hidden border-t border-gray-200 bg-blue-100 overflow-hidden transition-all duration-350 ease-out ${isOpen ? 'max-h-175 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
        >
            <ul className="flex flex-col px-4 py-2 gap-1">
                {t.nav.links.map((item) => (
                    <li key={item.link}>
                        {item.submenu ? (
                            <div className="flex flex-col">
                                <button
                                    onClick={() => setIsSubOpen(!isSubOpen)}
                                    className="flex items-center justify-between w-full py-3 text-sm sm:text-base text-gray-800 font-medium cursor-pointer"
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
                                    <div className="ml-4 border-l-2 border-blue-300 pl-4 my-1 flex flex-col gap-1">
                                        {t.nav.dropdown.map((sub) => (
                                            <button
                                                key={sub.link}
                                                onClick={() => handleScrollTo(sub.link)}
                                                className="w-full text-left px-3 py-2 text-sm sm:text-base text-gray-600 hover:text-blue-900 hover:bg-blue-100 rounded-lg transition-colors duration-150 font-medium cursor-pointer"
                                            >
                                                {sub.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div onClick={closeMenu} className="py-3 text-sm sm:text-base text-gray-800 font-medium">
                                <Link name={item.name} link={item.link} />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <div className="border-t border-gray-200 px-4 py-4">
                <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-3 text-sm sm:text-base text-gray-700 font-medium cursor-pointer"
                >
                    <img src={translateIcon} className="w-5 h-5" alt="" />
                    {t.nav.language}
                </button>
            </div>
        </div>
    );
};
