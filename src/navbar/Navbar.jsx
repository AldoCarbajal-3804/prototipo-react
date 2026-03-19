import { useState } from 'react';
import { Link } from "../components/Link"

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return( 
        <nav className="nav-bar border-b-2 border-gray-600 sticky top-0 z-50">
            <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 py-3 sm:py-4">
                
                <section className="logo flex items-center gap-2 shrink-0">
                    <a className="icon inline-block px-2 sm:px-3 py-1 rounded text-sm sm:text-base md:text-lg">
                    </a>
                    <strong className="lema text-sm sm:text-base md:text-lg lg:text-xl">J&A Partners</strong>
                </section>
                
                <ul className="hidden sm:ml-auto sm:flex items-center list-none gap-3 sm:gap-6 md:gap-8 lg:gap-12">
                    <Link name="Home" link="#"></Link>
                    <Link name="Services" link="#services-section"></Link>
                    <Link name="Contact" link="#form-section"></Link>
                </ul>

                <button
                    onClick={toggleMenu}
                    className="sm:hidden ml-auto flex flex-col gap-1.5 p-2 focus:outline-none"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                        isOpen ? 'rotate-45 translate-y-2' : ''
                    }`}></span>

                    <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                        isOpen ? 'opacity-0' : ''
                    }`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                        isOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}></span>
                </button>
            </div>

            <div className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <ul className="flex flex-col list-none gap-4 px-4 py-4 border-t border-gray-700">
                    <Link name="Home" link="#"></Link>
                    <Link name="Services" link="#services-section"></Link>
                    <Link name="Contact" link="#form-section"></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
