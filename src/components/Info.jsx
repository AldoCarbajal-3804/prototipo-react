export const Info = ({ icon, title, value }) => {
    return(
        <li className="flex items-center gap-4">
            <span className="icon text-2xl bg-[#1b1f2e] p-2 rounded-lg shrink-0">{icon}</span>
            <div className="min-w-0">
                <strong className="block text-sm sm:text-base">{title}</strong>
                <p className="mt-1 text-xs sm:text-sm break-all">{value}</p>
            </div>
        </li>
    )
}