import {useState, useEffect} from 'react';
    
export const AccordionItem = ({ title, desc, category, isOpen, onToggle }) => {

    const [height, setHeight] = useState(0);

    useEffect(() => {
        const content = document.getElementById(`content-${title.replace(/\s+/g, '-')}`);
        if (content) {
            const timer = setTimeout(() => {
                setHeight(isOpen ? content.scrollHeight : 0);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [isOpen, title]);

    return (
        <div className="border-t border-neutral-400/30 last:border-b last:border-neutral-400/30">
            <header className="group" onClick={onToggle}>
                <summary className="flex justify-between items-center py-6 cursor-pointer list-none text-left">
                <span className="text-base sm:text-lg md:text-xl font-medium text-neutral-800 group-hover:text-blue-900 transition-colors">
                    {title}
                </span>
                <span className="text-xs sm:text-sm text-neutral-500 font-medium uppercase tracking-wider text-right">
                    {category}
                </span>
                </summary>
            </header>
            <footer 
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: height }}
            >
                <div id={`content-${title.replace(/\s+/g, '-')}`} className="pb-8 pr-12">
                    <p className="text-neutral-600 leading-relaxed text-sm sm:text-base md:text-lg">
                        {desc}
                    </p>
                </div>
            </footer>
        </div>
    );
}
