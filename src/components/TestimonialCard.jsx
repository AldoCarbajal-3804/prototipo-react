import star from '@/assets/svg/stars.svg'

export const TestimonialCard = ({ name, role, content, avatar, stars }) => {
  return (
        <div 
            className="bg-white/80 backdrop-blur-sm border border-neutral-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
        >
            <header className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-cyan-400 center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                {avatar}
                </div>
                <div className="ml-4">
                <h4 className="text-neutral-900 font-bold leading-tight">{name}</h4>
                <p className="text-neutral-600 text-xs sm:text-sm">{role}</p>
                </div>
            </header>
            <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-blue-100 font-serif leading-none select-none">"</span>
                <p className="text-neutral-600 leading-relaxed relative z-10">
                {content}
                </p>
            </div>
            <footer className="mt-6 flex">
                {[...Array(stars)].map((_UNUSED, _INDEX) => (
                    <img src={star} alt="Star" key={_INDEX} />
                ))}
            </footer>
        </div>
  );
};
