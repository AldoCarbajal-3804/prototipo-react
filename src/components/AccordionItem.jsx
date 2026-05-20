export const AccordionItem = ({ title, desc, category, isOpen, onToggle }) => {
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
            <div
                className="grid transition-all duration-300"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
                <div className="overflow-hidden min-h-0">
                    <div className="pb-8 pr-12">
                        <p className="text-neutral-600 leading-relaxed text-sm sm:text-base md:text-lg">
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
