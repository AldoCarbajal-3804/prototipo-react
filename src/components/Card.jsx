export const Card = ({ icon, name, description }) => {
    return(
        <article 
            className="card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg bg-linear-to-br from-blue-300 via-blue-200 to-cyan-200 v-stack gap-3"
            style={{ 
                backgroundSize: '200% 200%',
                animation: `cardShimmer 2s ease-in-out infinite`
            }}
            role="region" 
            aria-labelledby={`card-title-${name}`}
        >
            <div className="bg-sky-800 w-10 sm:w-12 h-10 sm:h-12 rounded-lg center cursor-pointer" role="img" aria-label={`Icono de ${name}`}>
                <img src={icon} alt="icon" aria-hidden="true"/>
            </div>
            <h3 className="text-neutral-800 text-lg sm:text-xl font-semibold" id={`card-title-${name}`}>{name}</h3>
            <p className="text-neutral-800 text-sm sm:text-base leading-relaxed" id={`card-desc-${name}`}>{description}</p>
        </article>
    )
}