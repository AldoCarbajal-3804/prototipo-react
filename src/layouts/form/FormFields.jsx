import Submit from "@/layouts/form/Submit"

function FormFields({ formAction, state, formI18n, serviceOptions, stageOptions, budgetOptions, loadTime }) {
    const baseClass =
        "bg-gray-200 p-3 sm:p-4 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-700 w-full"
    const errorClass = "bg-red-200 p-3 sm:p-4 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 w-full border border-red-600"
    const errs = state.fields || {}

    const field = (id, label, type, placeholder, opts) => {
        const hasErr = !!errs[id]
        const errId = `${id}-error`
        const descIds = [hasErr && errId, opts?.hint && `${id}-hint`].filter(Boolean).join(" ") || undefined
        const Tag = type === "select" ? "select" : type === "textarea" ? "textarea" : "input"
        const inputProps = {
            id,
            name: id,
            className: hasErr ? errorClass : `${baseClass} placeholder-gray-400`,
            "aria-required": opts?.required ? "true" : undefined,
            "aria-invalid": hasErr ? "true" : undefined,
            "aria-describedby": descIds,
            required: opts?.required || undefined,
            ...(opts?.attrs || {}),
        }
        return (
            <fieldset className={`flex flex-col gap-2 ${opts?.wide ? "sm:col-span-2" : ""}`}>
                <label htmlFor={id} className="text-sm font-medium">
                    {label}
                    {opts?.required && <span aria-label="required" className="text-red-500">*</span>}
                </label>
                {Tag === "select" ? (
                    <select {...inputProps} defaultValue="">
                        {opts.options.map(({ value, label }) => (
                            <option key={value || "empty"} value={value} disabled={!value}>{label}</option>
                        ))}
                    </select>
                ) : Tag === "textarea" ? (
                    <textarea {...inputProps} />
                ) : (
                    <input {...inputProps} />
                )}
                {opts?.hint && (
                    <span id={`${id}-hint`} className="text-xs text-gray-500">{opts.hint}</span>
                )}
                {hasErr && (
                    <span id={errId} className="text-xs text-red-400 font-medium" role="alert">{errs[id]}</span>
                )}
            </fieldset>
        )
    }

    return (
        <form
            className="bg-gray-900 w-full lg:w-1/2 p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
            action={formAction}
            aria-labelledby="form-title"
            noValidate
        >
            <h2 id="form-title" className="sr-only">
                {formI18n.formLabel}
            </h2>

            {state.ok === false && state.message && !Object.keys(errs).length && (
                <div role="alert" aria-live="polite"
                    className="sm:col-span-2 p-3 sm:p-4 rounded-lg text-sm sm:text-base bg-red-900/30 text-red-200 border border-red-600">
                    {state.message}
                </div>
            )}

            {field("fullName", formI18n.labels.fullName, "text", formI18n.placeholders.fullName, {
                required: true,
                attrs: { autoComplete: "name" },
            })}

            {field("email", formI18n.labels.email, "email", formI18n.placeholders.email, {
                required: true,
                attrs: { autoComplete: "email" },
            })}

            {field("company", formI18n.labels.company, "text", formI18n.placeholders.company, {
                required: true,
                attrs: { autoComplete: "organization" },
            })}

            {field("phone", formI18n.labels.phone, "tel", formI18n.placeholders.phone, {
                attrs: { autoComplete: "tel" },
                hint: formI18n.optional,
            })}

            {field("service", formI18n.labels.service, "select", "", {
                required: true,
                options: serviceOptions,
            })}

            {field("stage", formI18n.labels.stage, "select", "", {
                required: true,
                options: stageOptions,
            })}

            {field("budget", formI18n.labels.budget, "select", "", {
                options: budgetOptions,
                wide: true,
            })}

            {field("challenge", formI18n.labels.challenge, "textarea", formI18n.placeholders.challenge, {
                required: true,
                wide: true,
                hint: formI18n.minLength,
                attrs: { minLength: 20, rows: 4 },
            })}

            <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="absolute w-px h-px opacity-0"
                aria-hidden="true"
            />
            <input type="hidden" name="_loadTime" value={loadTime} />

            <Submit
                disabled={state.ok === true}
                label={formI18n.button}
                sending={formI18n.buttonSending}
            />
        </form>
    )
}

export default FormFields
