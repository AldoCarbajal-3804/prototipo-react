export const Card = ({ icon, name, description, index }) => {
    return(
        <blockquote 
            className="card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg bg-gradient-to-br from-blue-300 via-blue-200 to-cyan-200"
            style={{ 
                backgroundSize: '200% 200%',
                animation: `cardShimmer 2s ease-in-out infinite`
            }}
            role="region" 
            aria-labelledby={`card - ${name}`}
        >
            <div className="bg-sky-800 w-10 sm:w-12 h-10 sm:h-12 rounded-lg center mb-3 cursor-pointer" role="img" aria-label={`Icono de ${name}`}>
                <img src={icon} alt="icon" aria-hidden="true"/>
            </div>
            <h3 className="text-gray-700 text-lg sm:text-xl font-semibold mt-0" id={`card-title-${name}`}>{name}</h3>
            <p className="text-gray-700 text-sm sm:text-base mt-2 leading-relaxed" id={`card-desc-${name}`}>{description}</p>
        </blockquote>
    )
}