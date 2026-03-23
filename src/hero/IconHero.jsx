import './IconHero.css';

function IconHero(){
    return (
        <>
            <div className="absolute w-40 sm:w-48 lg:w-64 h-40 sm:h-48 lg:h-64 border border-[#3AA1B8] rounded-full breathing-lg"></div>
            <div className="w-32 sm:w-40 lg:w-56 h-32 sm:h-40 lg:h-56 border border-[#3AA1B8] rounded-full center breathing-md">
                <div className="w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 border border-[#3AA1B8] rounded-full center breathing-sm">
                    <svg className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 breathing-svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="#3AA1B8" strokeWidth="1.5" fill="none"/>
                        <path d="M8 21h8l-1.5-4h-5L8 21z" stroke="#3AA1B8" strokeWidth="1.5" fill="none"/>
                        <path d="M12 17v-4" stroke="#3AA1B8" strokeWidth="1.5" fill="none"/>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default IconHero