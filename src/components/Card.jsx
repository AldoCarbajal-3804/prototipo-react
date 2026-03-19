export const Card = ({ icon, name, description }) => {
    return(
        <blockquote className="card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="icon-wrapper w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mb-3 cursor-pointer">
                <img src={icon} alt="icon" />
            </div>
            <h3 className="title text-lg sm:text-xl font-semibold mt-0">{name}</h3>
            <p className="description text-sm sm:text-base mt-2 leading-relaxed">{description}</p>
        </blockquote>
    )
}