import { useState, useEffect, useRef } from 'react';
import { Link } from '../components/Link.jsx';
import translateIcon from '../assets/svg/translate.svg';

export const DesktopMenu = ({ t, toggleLanguage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleScrollTo = (link) => {
    const id = link.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <ul className="flex items-center gap-2 lg:gap-6">
      {t.nav.links.map((item) => {
        if (item.submenu) {
          return (
            <li key={item.link} className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1.5 px-4 py-2 text-gray-700 font-medium hover:text-blue-700 hover:bg-blue-50 rounded-full transition-all duration-200 cursor-pointer"
                aria-expanded={isDropdownOpen}
              >
                {item.name}
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute top-full right-0 mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 transition-all duration-300 origin-top-right z-50 
                ${isDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
              >
                {t.nav.dropdown.map((subItem) => (
                  <button
                    key={subItem.link}
                    onClick={() => handleScrollTo(subItem.link)}
                    className="block w-full text-left px-5 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 font-medium"
                  >
                    {subItem.name}
                  </button>
                ))}
              </div>
            </li>
          );
        }

        return (
          <li key={item.link}>
            <Link 
              name={item.name} 
              link={item.link} 
            />
          </li>
        );
      })}

      <li className="ml-2 border-l border-gray-300 pl-4">
        <button 
          onClick={toggleLanguage} 
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 transition-all duration-300 cursor-pointer group"
          title="Change Language"
        >
          <img 
            src={translateIcon} 
            alt="Language" 
            className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" 
          />
        </button>
      </li>
    </ul>
  );
};

