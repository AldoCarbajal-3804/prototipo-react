import { useState, useEffect, useRef } from 'react';
import { Link } from "../components/Link"
import logo from '../assets/images/logo.png';
import translateIcon from '../assets/svg/translate.svg'
import menuIcon from '../assets/svg/menu.svg'
import closeIcon from '../assets/svg/close.svg'


function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: "Inicio", link: "#inicio" },
        { name: "Quiénes somos", link: "#quienes-somos" },
        { name: "Servicios", link: "#servicios" },
        { name: "Contacto", link: "#contacto" },
    ];

    return( 
        <nav 
            className="nav-bar border-b-2 border-gray-600 sticky top-0 z-50 bg-blue-100 flex items-center justify-between px-4 sm:px-6 md:px-8 py-4" 
            role="navigation"
            aria-label="Navegación principal"
        >   
            <section  className="flex items-center" aria-label="Logo de J&A Partners">
                <img src={logo} alt="Logo de la empresa" className='w-16 sm:w-20'/>
                <strong className="lema text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ml-2 sm:ml-0">
                    J&A Partners
                </strong>
            </section>

            <div className="flex items-center gap-4">
                <ul className='hidden md:flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center'> 
                    {navLinks.map((item) => (
                        <Link key={item.link} name={item.name} link={item.link} />
                    ))}
                    <li>
                        <button aria-label="Cambiar idioma" className="cursor-pointer hover:bg-gray-300 rounded-full p-3 transition-colors duration-300">
                            <img src={translateIcon} alt="Cambiar idioma" />
                        </button>
                    </li>
                </ul>

                <button 
                    className="md:hidden p-2" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isMenuOpen}
                >
                    <img src={isMenuOpen ? closeIcon : menuIcon} alt="" className="w-6 h-6" />
                </button>
            </div>

            {isMenuOpen && (
                <div 
                    ref={menuRef}
                    className="absolute top-full left-0 right-0 bg-blue-100 border-b-2 border-gray-600 md:hidden"
                >
                    <ul className="flex flex-col p-4 gap-4">
                        {navLinks.map((item) => (
                            <li key={item.link} onClick={() => setIsMenuOpen(false)}>
                                <Link name={item.name} link={item.link} />
                            </li>
                        ))}
                        <li>
                            <button aria-label="Cambiar idioma" className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
                                <img src={translateIcon} alt="Cambiar idioma" />
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar