import { CardSchedule } from "@/components/CardSchedule"

function ScheduleFallback({ options, fallbackLabel }) {
    return (
        <div
            className="schedule-options grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
            role="list"
            aria-label={fallbackLabel}
        >
            {options.map(
                ({ icon, title, description, href, cta, primary, external }) => (
                    <CardSchedule
                        icon={icon}
                        title={title}
                        description={description}
                        href={href}
                        cta={cta}
                        primary={primary}
                        external={external}
                    />
                )
            )}
        </div>
    )
}

export default ScheduleFallback
