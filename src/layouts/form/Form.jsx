import { useActionState, useState } from "react"
import { useLanguage } from "@/hooks/LanguageContext.jsx"
import FormContact from "@/layouts/form/FormContact"
import FormFields from "@/layouts/form/FormFields"
import { validate } from "@/layouts/form/FormValidation"

function Form() {
    const { t } = useLanguage()
    const [loadTime] = useState(() => Date.now())

    const SERVICE_OPTIONS = t.form.options.service
    const STAGE_OPTIONS = t.form.options.stage
    const BUDGET_OPTIONS = t.form.options.budget

    async function handleFormSubmit(_prevState, formData) {
        const error = validate(formData, t.form.validation)
        if (error) {
            if (error.ok && !error.message) return { ok: true, message: "" }
            return error
        }

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

    const showSuccess = state.ok === true && state.message !== ""

    return (
        <section
            id="form-section"
            className="bg-gray-800 flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 md:gap-12 p-4 sm:p-8 md:p-12 lg:p-20 text-white"
            aria-label={t.form.heading}
        >
            <FormContact />

            {showSuccess ? (
                <div
                    role="alert"
                    className="bg-gray-900 w-full lg:w-1/2 p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl center"
                >
                    <p className="text-emerald-300 text-lg text-center font-medium">
                        {state.message}
                    </p>
                </div>
            ) : (
                <FormFields
                    formAction={formAction}
                    state={state}
                    formI18n={t.form}
                    serviceOptions={SERVICE_OPTIONS}
                    stageOptions={STAGE_OPTIONS}
                    budgetOptions={BUDGET_OPTIONS}
                    loadTime={loadTime}
                />
            )}
        </section>
    )
}

export default Form
