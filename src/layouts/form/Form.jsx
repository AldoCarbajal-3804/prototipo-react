import { useActionState } from "react"
import { useLanguage } from "@/hooks/LanguageContext.jsx"
import FormContact from "@/layouts/form/FormContact"
import FormFields from "@/layouts/form/FormFields"
import { validate } from "@/layouts/form/FormValidation"

function Form() {
    const { t } = useLanguage()

    const SERVICE_OPTIONS = t.form.options.service
    const STAGE_OPTIONS = t.form.options.stage
    const BUDGET_OPTIONS = t.form.options.budget

    async function handleFormSubmit(_prevState, formData) {
        const error = validate(formData, t.form.validation)
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
            <FormContact />

            <FormFields
                formAction={formAction}
                state={state}
                formI18n={t.form}
                serviceOptions={SERVICE_OPTIONS}
                stageOptions={STAGE_OPTIONS}
                budgetOptions={BUDGET_OPTIONS}
            />
        </section>
    )
}

export default Form
