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
        <div className="border-t border-gray-400/30 last:border-b last:border-gray-400/30">
            <header className="group" onClick={onToggle}>
                <summary className="flex justify-between items-center py-6 cursor-pointer list-none">
                <span className="text-xl sm:text-2xl font-medium text-gray-800 group-hover:text-blue-900 transition-colors">
                    {title}
                </span>
                <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                    {category}
                </span>
                </summary>
            </header>
            <footer 
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: height }}
            >
                <div id={`content-${title.replace(/\s+/g, '-')}`} className="pb-8 pr-12">
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {desc}
                    </p>
                </div>
            </footer>
        </div>
    );
}
