import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { useLanguage } from "@/hooks/LanguageContext.jsx"
import { Info } from "@/components/ui/Info"
import { Input } from "@/components/ui/Input"
import { Select } from "@/components/ui/Select"

function Submit({ disabled, label, sending }) {
    const { pending } = useFormStatus()

    return (
        <button
            disabled={pending || disabled}
            type="submit"
            className="bg-cyan-700 sm:col-span-2 p-3 sm:p-4 rounded-lg font-bold cursor-pointer mt-2 hover:opacity-90 transition text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
            {pending ? sending : label}
        </button>
    )
}

function Form() {
    const { t } = useLanguage()

    const SERVICE_OPTIONS = t.form.options.service
    const STAGE_OPTIONS = t.form.options.stage
    const BUDGET_OPTIONS = t.form.options.budget   

    const validate = (formData) => {
        const fullName = formData.get("fullName")?.toString().trim()
        const email = formData.get("email")?.toString().trim()
        const company = formData.get("company")?.toString().trim()
        const service = formData.get("service")?.toString()
        const stage = formData.get("stage")?.toString()
        const challenge = formData.get("challenge")?.toString().trim()

        if (!fullName) return { ok: false, message: t.form.validation.fullName }
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, message: t.form.validation.email }
        if (!company) return { ok: false, message: t.form.validation.company }
        if (!service) return { ok: false, message: t.form.validation.service }
        if (!stage) return { ok: false, message: t.form.validation.stage }
        if (!challenge || challenge.length < 20) return { ok: false, message: t.form.validation.challenge }
        return null
    }

    async function handleFormSubmit(_prevState, formData) {
        const error = validate(formData)
        if (error) return error

        const payload = {
            fullName: formData.get("fullName")?.toString().trim(),
            email: formData.get("email")?.toString().trim(),
            company: formData.get("company")?.toString().trim(),
            phone: formData.get("phone")?.toString().trim(),
            service: formData.get("service")?.toString(),
            stage: formData.get("stage")?.toString(),
            budget: formData.get("budget")?.toString() || "",
            challenge: formData.get("challenge")?.toString().trim(),
            submittedAt: new Date().toISOString(),
        }

        const endpoint = import.meta.env.VITE_FORM_ENDPOINT?.trim()

        if (endpoint) {
            try {
                const res = await fetch(endpoint, {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                    body: JSON.stringify(payload),
                })
                if (!res.ok) return { ok: false, message: t.form.validation.submitError }
            } catch {
                return { ok: false, message: t.form.validation.connectionError }
            }
        } else if (import.meta.env.DEV) {
            console.log("[Diagnóstico]", payload)
        }

        return { ok: true, message: t.form.success }
    }

    const [state, formAction] = useActionState(handleFormSubmit, { ok: null, message: "" })

    return (
        <section
            id="form-section"
            className="bg-gray-800 flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 md:gap-12 p-4 sm:p-8 md:p-12 lg:p-20 text-white"
            aria-label={t.form.heading}
        >
            <aside className="aside w-full lg:w-2/5" aria-labelledby="contact-title">
                <h2
                    id="contact-title"
                    className="title text-2xl sm:text-3xl md:text-4xl font-bold pb-4 sm:pb-6"
                >
                    {t.form.heading}
                </h2>
                <p
                    className="description text-sm sm:text-base md:text-lg pb-6 sm:pb-8 md:pb-10"
                    aria-describedby="contact-title"
                >
                    {t.form.description}
                </p>
                <ul className="flex flex-col gap-4 sm:gap-5 md:gap-6" aria-label={t.form.heading}>
                    {t.form.contactInfo.map((item, i) => (
                        <Info key={i} icon={item.icon} title={item.title} value={item.value} />
                    ))}
                </ul>
                <a
                    href="#agenda-section"
                    className="inline-flex mt-6 sm:mt-8 items-center justify-center px-4 sm:px-5 py-3 rounded-lg font-semibold text-sm sm:text-base border-2 transition border-cyan-700 text-gray-200"
                >
                    {t.form.ctaButton}
                </a>
            </aside>

            <form
                className="bg-gray-900 w-full lg:w-1/2 p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
                action={formAction}
                aria-labelledby="form-title"
                noValidate
            >
                <h2 id="form-title" className="sr-only">
                    {t.form.formLabel}
                </h2>

                {state.message && (
                    <div
                        role="alert"
                        aria-live="polite"
                        className={`sm:col-span-2 p-3 sm:p-4 rounded-lg text-sm sm:text-base ${state.ok ? "bg-emerald-900/40 text-emerald-200 border border-emerald-600" : "bg-red-900/30 text-red-200 border border-red-600"}`}
                    >
                        {state.message}
                    </div>
                )}

                <Input label={t.form.labels.fullName} name="fullName" placeholder={t.form.placeholders.fullName} required />
                <Input label={t.form.labels.email} name="email" type="email" placeholder={t.form.placeholders.email} required />
                <Input label={t.form.labels.company} name="company" placeholder={t.form.placeholders.company} required />
                <Input label={t.form.labels.phone} name="phone" type="tel" placeholder={t.form.placeholders.phone} hint={t.form.optional} />
                <Select label={t.form.labels.service} name="service" options={SERVICE_OPTIONS} required />
                <Select label={t.form.labels.stage} name="stage" options={STAGE_OPTIONS} required />
                <Select label={t.form.labels.budget} name="budget" options={BUDGET_OPTIONS} spanCol />
                <Input label={t.form.labels.challenge} name="challenge" textarea placeholder={t.form.placeholders.challenge} required hint={t.form.minLength} minLength={20} spanCol />

                <Submit disabled={state.ok === true} label={t.form.button} sending={t.form.buttonSending} />
            </form>
        </section>
    )
}

export default Form
