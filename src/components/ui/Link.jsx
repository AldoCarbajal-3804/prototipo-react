import { useState, useEffect } from 'react';
import { useScrollTo } from '@/hooks/useScrollTo';

export const Link = ({name, link, sectionActive = false}) => {
    const [isHashActive, setIsHashActive] = useState(false);
    const scrollTo = useScrollTo();

    useEffect(() => {
        const checkActive = () => {
            setIsHashActive(window.location.hash === link);
        };
        checkActive();
        window.addEventListener('hashchange', checkActive);
        return () => window.removeEventListener('hashchange', checkActive);
    }, [link]);

    const isActive = sectionActive || isHashActive;

    const handleClick = (e) => {
        e.preventDefault();
        scrollTo(link);
    };

    const isHashLink = link.startsWith('#');

    if (isHashLink) {
        return (
            <button 
                onClick={handleClick}
                className={`text-sm sm:text-base transition-all duration-150 cursor-pointer ${
                    isActive
                        ? 'text-blue-700 font-semibold'
                        : 'text-black hover:text-blue-600'
                }`}
                aria-label={name}
                aria-current={isActive ? "page" : undefined}
            >
                {name}
            </button>
        );
    }

    return (
        <a 
            href={link} 
            className={`text-sm sm:text-base transition-colors duration-300 ${
                isActive
                    ? 'text-blue-700 font-semibold'
                    : 'text-black hover:text-blue-600'
            }`}
            aria-label={name}
            aria-current={isActive ? "page" : undefined}
        >
            {name}
        </a>
    );
};
