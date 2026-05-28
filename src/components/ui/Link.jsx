import { useState, useEffect } from 'react';
import { useScrollTo } from '@/hooks/useScrollTo';

export const Link = ({name, link}) => {
    const [isActive, setIsActive] = useState(false);
    const scrollTo = useScrollTo();

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
        scrollTo(link);
    };

    const isHashLink = link.startsWith('#');

    if (isHashLink) {
        return (
            <button 
                onClick={handleClick}
                className="text-sm sm:text-base text-black hover:underline transition-colors duration-300 cursor-pointer" 
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
            className="text-sm sm:text-base text-black hover:underline transition-colors duration-300" 
            aria-label={name}
            aria-current={isActive ? "page" : undefined}
        >
            {name}
        </a>
    );
};
