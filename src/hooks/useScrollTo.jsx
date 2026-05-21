import { useCallback } from 'react';

export function useScrollTo() {
    const scrollTo = useCallback((link) => {
        const id = link.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            const nav = document.querySelector('nav');
            const offset = nav ? nav.offsetHeight : 0;
            const top = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }, []);

    return scrollTo;
}
