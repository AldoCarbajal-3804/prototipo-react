import { useState } from 'react';
import { Link } from "../components/Link"

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return( 
        <nav 
            className="nav-bar border-b-2 border-gray-600 sticky top-0 z-50"
            role="navigation"
            aria-label="Navegación principal"
        >
            <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 py-3 sm:py-4">
                
                <section 
                    className="logo flex items-center gap-2 shrink-0"
                    aria-label="Logo de J&A Partners"
                >
                    <a 
                        href="#hero-section"
                        className="icon inline-block px-2 sm:px-3 py-1 rounded text-sm sm:text-base md:text-lg"
                        aria-label="Ir al inicio"
                    >
                    </a>
                    <strong className="lema text-sm sm:text-base md:text-lg lg:text-xl">
                        J&A Partners
                    </strong>
                </section>
                
                <ul 
                    className="hidden sm:ml-auto sm:flex items-center list-none gap-3 sm:gap-6 md:gap-8 lg:gap-12"
                    role="menubar"
                    aria-label="Menú de navegación"
                >
                    <Link name="Home" link="#" />
                    <Link name="Services" link="#services-section" />
                    <Link name="Contact" link="#form-section" />
                </ul>

                <button
                    onClick={toggleMenu}
                    className="sm:hidden ml-auto flex flex-col gap-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-[#3AA1B8] rounded"
                    aria-label="Abrir menú de navegación"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    <span 
                        className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                            isOpen ? 'rotate-45 translate-y-2' : ''
                        }`}
                        aria-hidden="true"
                    ></span>

                    <span 
                        className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                            isOpen ? 'opacity-0' : ''
                        }`}
                        aria-hidden="true"
                    ></span>

                    <span 
                        className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                            isOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                        aria-hidden="true"
                    ></span>
                </button>
            </div>

            <div 
                id="mobile-menu"
                className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
                role="menu"
                aria-label="Menú móvil"
                aria-hidden={!isOpen}
            >
                <ul className="flex flex-col list-none gap-4 px-4 py-4 border-t border-gray-700">
                    <li role="none">
                        <a 
                            href="#" 
                            className="block py-2 text-gray-300 hover:text-white transition"
                            role="menuitem"
                            onClick={closeMenu}
                        >
                            Home
                        </a>
                    </li>
                    <li role="none">
                        <a 
                            href="#services-section" 
                            className="block py-2 text-gray-300 hover:text-white transition"
                            role="menuitem"
                            onClick={closeMenu}
                        >
                            Services
                        </a>
                    </li>
                    <li role="none">
                        <a 
                            href="#form-section" 
                            className="block py-2 text-gray-300 hover:text-white transition"
                            role="menuitem"
                            onClick={closeMenu}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar