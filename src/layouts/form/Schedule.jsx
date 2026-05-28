import { useEffect } from "react"

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL?.trim() || ""

const BOOKING_OPTIONS = [
    {
        icon: "📋",
        title: "Formulario de diagnóstico",
        description: "Cuéntanos tu proyecto y te respondemos en 24–48 h hábiles.",
        href: "#form-section",
        cta: "Completar formulario",
        primary: true,
    },
    {
        icon: "💬",
        title: "WhatsApp",
        description: "Escríbenos y coordinamos fecha y hora contigo.",
        href: "https://wa.me/51925290477?text=Hola%2C%20quiero%20agendar%20una%20reuni%C3%B3n%20de%20diagn%C3%B3stico%20con%20J%26A%20Partners.",
        cta: "Abrir WhatsApp",
        external: true,
    },
    {
        icon: "📧",
        title: "Correo",
        description: "Indica tu disponibilidad y te proponemos horarios.",
        href: "mailto:contacto@japartners.com?subject=Solicitud%20de%20reuni%C3%B3n%20de%20diagn%C3%B3stico",
        cta: "Enviar correo",
    },
]

function ScheduleFallback() {
    return (
        <div
            className="schedule-options grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
            role="list"
            aria-label="Opciones para agendar una reunión"
        >
            {BOOKING_OPTIONS.map(
                ({ icon, title, description, href, cta, primary, external }) => (
                    <article
                        key={title}
                        className="schedule-option flex flex-col gap-3 sm:gap-4 p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl"
                        role="listitem"
                    >
                        <span className="text-2xl sm:text-3xl" role="img" aria-hidden="true">
                            {icon}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
                        <p className="text-sm sm:text-base text-[var(--color-3)] flex-1">
                            {description}
                        </p>
                        <a
                            href={href}
                            className={
                                primary
                                    ? "schedule-cta-primary inline-flex items-center justify-center px-4 sm:px-5 py-3 rounded-lg font-semibold text-sm sm:text-base transition hover:opacity-90"
                                    : "schedule-cta-secondary inline-flex items-center justify-center px-4 sm:px-5 py-3 rounded-lg font-semibold text-sm sm:text-base border-2 transition hover:opacity-90"
                            }
                            {...(external
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {})}
                        >
                            {cta}
                        </a>
                    </article>
                )
            )}
        </div>
    )
}

function Schedule() {
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
                    Agenda una reunión
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[var(--color-3)]">
                    {CALENDLY_URL
                        ? "Elige el horario que mejor te convenga para una sesión de diagnóstico sin compromiso con nuestro equipo."
                        : "Coordina tu sesión de diagnóstico por el canal que prefieras. Te respondemos a la brevedad."}
                </p>
            </header>

            {CALENDLY_URL ? (
                <div
                    className="calendly-inline-widget calendly-embed w-full rounded-xl md:rounded-2xl overflow-hidden"
                    data-url={CALENDLY_URL}
                    style={{ minWidth: "320px", height: "700px" }}
                    role="region"
                    aria-label="Calendario de reservas"
                />
            ) : (
                <ScheduleFallback />
            )}
        </section>
    )
}

export default Schedule