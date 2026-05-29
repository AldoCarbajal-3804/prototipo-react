
export const CardSchedule = ({title,icon,description,href,cta,primary,external}) => {

    return(
        <article
            key={title}
            className="flex flex-col gap-3 sm:gap-4 p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-gray-800"
            role="listitem"
        >
            <span className="text-2xl sm:text-3xl" role="img" aria-hidden="true">
                {icon}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
            <p className="text-sm sm:text-base text-color-3 flex-1">
                {description}
            </p>
            <a
                href={href}
                className={
                    primary
                        ? "bg-cyan-700 inline-flex items-center justify-center px-4 sm:px-5 py-3 rounded-lg font-semibold text-sm sm:text-base border-none"
                        : "bg-cyan-700 inline-flex items-center justify-center px-4 sm:px-5 py-3 rounded-lg font-semibold text-sm sm:text-base border-none"
                }
                {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
            >
                {cta}
            </a>
        </article>
    )

}