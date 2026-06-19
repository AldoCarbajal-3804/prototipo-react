import { useEffect, useState } from "react"
import { useLanguage } from "@/hooks/LanguageContext.jsx"
import ScheduleFallback from "@/layouts/schedule/ScheduleFallback"

function resolveCalendlyUrl() {
    const defaultUrl = import.meta.env.VITE_CALENDLY_URL?.trim()
    if (!defaultUrl) return ""

    try {
        const raw = sessionStorage.getItem("ja-calendly-prefill")
        if (!raw) return defaultUrl

        const { service } = JSON.parse(raw)

        if (service) {
            const key = `VITE_CALENDLY_URL_${service.toUpperCase()}`
            const serviceUrl = import.meta.env[key]?.trim()
            if (serviceUrl) return serviceUrl
        }
    } catch {
        /* ignore */
    }

    return defaultUrl
}

function buildPrefillParams() {
    try {
        const raw = sessionStorage.getItem("ja-calendly-prefill")
        if (!raw) return ""

        const { name, email } = JSON.parse(raw)
        const params = new URLSearchParams()
        if (name) params.set("name", name)
        if (email) params.set("email", email)

        return params.toString()
    } catch {
        return ""
    }
}

function Schedule() {
    const { t } = useLanguage()
    const [bookingDone, setBookingDone] = useState(false)

    const CALENDLY_URL = resolveCalendlyUrl()
    const prefillStr = buildPrefillParams()
    const calendlyUrlWithPrefill = prefillStr
        ? `${CALENDLY_URL}?${prefillStr}`
        : CALENDLY_URL

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

        const handler = () => setBookingDone(true)
        window.addEventListener("calendly.event_scheduled", handler)

        return () => {
            script.remove()
            window.removeEventListener("calendly.event_scheduled", handler)
        }
    }, [CALENDLY_URL])

    function handleBack() {
        setBookingDone(false)
        sessionStorage.removeItem("ja-calendly-prefill")
    }

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
                    {bookingDone
                        ? ""
                        : CALENDLY_URL
                            ? t.schedule.descriptionCalendly
                            : t.schedule.descriptionFallback}
                </p>
            </header>

            {bookingDone ? (
                <div className="bg-white/10 rounded-xl md:rounded-2xl p-8 sm:p-12 md:p-16 center flex-col gap-4 text-center">
                    <span className="text-5xl" aria-hidden="true">🎉</span>
                    <p className="text-emerald-300 text-xl sm:text-2xl font-semibold">
                        {t.schedule.bookingConfirmed}
                    </p>
                    <button
                        onClick={handleBack}
                        className="mt-4 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition text-sm"
                    >
                        {t.schedule.title}
                    </button>
                </div>
            ) : CALENDLY_URL ? (
                <div
                    className="calendly-inline-widget calendly-embed w-full rounded-xl md:rounded-2xl overflow-hidden"
                    data-url={calendlyUrlWithPrefill}
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