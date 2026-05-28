export const Info = ({ icon, title, value }) => {
    return(
        <li className="flex items-center gap-4">
            <span className="icon text-2xl p-2 rounded-lg shrink-0" role="img" aria-label={title}>{icon}</span>
            <div className="min-w-0 v-stack gap-1">
                <strong className="block text-sm sm:text-base" id={`info-title-${title}`}>{title}</strong>
                <p className="text-xs sm:text-sm" aria-label={`${title}: ${value}`}>{value}</p>
            </div>
        </li>
    )
}