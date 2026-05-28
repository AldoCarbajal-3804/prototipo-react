import { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '@/hooks/LanguageContext.jsx';
import {NavLogo} from '@/components/responsives/NavLogo.jsx';
import {DesktopMenu} from '@/components/responsives/DesktopMenu.jsx';
import {MobileMenu} from '@/components/responsives/MobileMenu.jsx';
import menuIcon from '@/assets/svg/menu.svg';
import closeIcon from '@/assets/svg/close.svg';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, toggleLanguage } = useLanguage();
    const menuRef = useRef(null);

    const closeMenu = useCallback(() => setIsMenuOpen(false), []);

    // Cerrar al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) closeMenu();
        };
        if (isMenuOpen) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen, closeMenu]);

    return (
        <nav className="sticky top-0 z-50 w-full bg-blue-200 backdrop-blur-md border-b-2 border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    
                    <NavLogo />

                    {/* Desktop */}
                    <div className="hidden md:block">
                        <DesktopMenu t={t} toggleLanguage={toggleLanguage} />
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-neutral-600 hover:bg-neutral-100 transition-colors"
                        >
                            <img src={isMenuOpen ? closeIcon : menuIcon} alt="menu" className="w-7 h-7" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Slide */}
            <MobileMenu 
                isOpen={isMenuOpen} 
                closeMenu={closeMenu} 
                t={t} 
                toggleLanguage={toggleLanguage}
                menuRef={menuRef}
            />
        </nav>
    );
}

export default Navbar;