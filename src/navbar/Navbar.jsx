import { useState, useEffect, useRef } from 'react';
import { Link } from "../components/Link"
import logo from '../assets/images/logo.png';

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Why', href: '#why-section' },
    { name: 'Who', href: '#who-section' },
    { name: 'Services', href: '#services-section' },
    { name: 'Contact', href: '#form-section' },
];

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return( 
        <nav 
            className="nav-bar border-b-2 border-gray-600 sticky top-0 z-50 bg-blue-100" 
            role="navigation"
            aria-label="Navegación principal"
        >
            <div className="flex justify-between items-center px-4">
                
                <section 
                    className="logo flex items-center gap-2 shrink-0"
                    aria-label="Logo de J&A Partners"
                >
                    
                    <img src={logo} alt="Company Logo" className='w-20'/>
                    
                    <strong className="lema text-sm sm:text-base md:text-lg lg:text-xl">
                        J&A Partners
                    </strong>
                </section>
                
                <ul 
                    className="hidden sm:ml-auto sm:flex items-center list-none gap-3 sm:gap-6 md:gap-8 lg:gap-12"
                    role="menubar"
                    aria-label="Menú de navegación"
                >
                    {navLinks.map(({ name, href }) => (
                        <Link key={name} name={name} link={href} />
                    ))}
                </ul>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="sm:hidden ml-auto v-stack gap-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-[#3AA1B8] rounded"
                    aria-label="Abrir menú de navegación"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    <span 
                        className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                            isOpen ? 'rotate-45 translate-y-2' : ''
                        }`}
                        aria-hidden="true"
                    ></span>

                    <span 
                        className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                            isOpen ? 'opacity-0' : ''
                        }`}
                        aria-hidden="true"
                    ></span>

                    <span 
                        className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                            isOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                        aria-hidden="true"
                    ></span>
                </button>
            </div>

            <div 
                id="mobile-menu"
                ref={menuRef}
                className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                role="menu"
                aria-label="Menú móvil"
                aria-hidden={!isOpen}
            >
                <ul className="v-stack list-none gap-4 px-4 py-4 border-t border-gray-700">
                    {navLinks.map(({ name, href }) => (
                        <li key={name} role="none">
                            <a 
                                href={href} 
                                className="block py-2 text-black hover:text-[#3AA1B8] transition"
                                role="menuitem"
                                onClick={() => setIsOpen(false)}
                            >
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar