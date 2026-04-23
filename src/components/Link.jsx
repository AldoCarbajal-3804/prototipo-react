import { useState, useEffect } from 'react';

export const Link = ({name, link}) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const checkActive = () => {
            setIsActive(window.location.hash === link);
        };
        checkActive();
        window.addEventListener('hashchange', checkActive);
        return () => window.removeEventListener('hashchange', checkActive);
    }, [link]);

    const handleClick = (e) => {
        e.preventDefault();
        const id = link.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const isHashLink = link.startsWith('#');

    if (isHashLink) {
        return (
            <li>
                <button 
                    onClick={handleClick}
                    className="text-xs sm:text-sm md:text-base text-black hover:underline transition-colors duration-300 cursor-pointer" 
                    aria-label={name}
                    aria-current={isActive ? "page" : undefined}
                >
                    {name}
                </button>
            </li>
        );
    }

    return (
        <li>
            <a 
                href={link} 
                className="text-xs sm:text-sm md:text-base text-black hover:underline transition-colors duration-300" 
                aria-label={name}
                aria-current={isActive ? "page" : undefined}
            >
                {name}
            </a>
        </li>
    );
};