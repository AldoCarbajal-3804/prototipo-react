
export const CardSchedule = () => {

    return(
        <article
            key={title}
            className="flex flex-col gap-3 sm:gap-4 p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl"
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
                        ? "inline-flex items-center justify-center px-4 sm:px-5 py-3 rounded-lg font-semibold text-sm sm:text-base transition hover:opacity-90"
                        : "inline-flex items-center justify-center px-4 sm:px-5 py-3 rounded-lg font-semibold text-sm sm:text-base border-2 transition hover:opacity-90"
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