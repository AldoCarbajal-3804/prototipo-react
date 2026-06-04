import { useEffect } from "react"
import { useLanguage } from "@/hooks/LanguageContext.jsx"
import ScheduleFallback from "@/layouts/schedule/ScheduleFallback"

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL?.trim() || ""

function Schedule() {
    const { t } = useLanguage()

    useEffect(() => {
        if (!CALENDLY_URL) {
            if (import.meta.env.DEV) {
                console.info(
                    "[Agenda] Añade VITE_CALENDLY_URL en .env para el widget de Calendly. En producción, configúrala en las variables del hosting."
                )
            }
            return
        }

        const existing = document.querySelector('script[src*="calendly.com"]')
        if (existing) return

        const script = document.createElement("script")
        script.src = "https://assets.calendly.com/assets/external/widget.js"
        script.async = true
        document.body.appendChild(script)

        return () => {
            script.remove()
        }
    }, [])

    return (
        <section
            id="agenda-section"
            className="schedule-section flex flex-col gap-6 sm:gap-8 md:gap-10 p-4 sm:p-8 md:p-12 lg:p-20 text-white"
            aria-labelledby="schedule-title"
        >
            <header className="max-w-3xl">
                <h2
                    id="schedule-title"
                    className="text-2xl sm:text-3xl md:text-4xl font-bold pb-3 sm:pb-4"
                >
                    {t.schedule.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg">
                    {CALENDLY_URL
                        ? t.schedule.descriptionCalendly
                        : t.schedule.descriptionFallback}
                </p>
            </header>

            {CALENDLY_URL ? (
                <div
                    className="calendly-inline-widget calendly-embed w-full rounded-xl md:rounded-2xl overflow-hidden"
                    data-url={CALENDLY_URL}
                    style={{ minWidth: "320px", height: "700px" }}
                    role="region"
                    aria-label={t.schedule.calendlyLabel}
                />
            ) : (
                <ScheduleFallback
                    options={t.schedule.options}
                    fallbackLabel={t.schedule.fallbackLabel}
                />
            )}
        </section>
    )
}

export default Schedule