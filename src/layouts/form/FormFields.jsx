import Submit from "@/layouts/form/Submit"

function FormFields({ formAction, state, formI18n, serviceOptions, stageOptions, budgetOptions, loadTime }) {
    const baseClass =
        "bg-gray-200 p-3 sm:p-4 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-700 w-full"

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

            {state.message && (
                <div
                    role="alert"
                    aria-live="polite"
                    className={`sm:col-span-2 p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
                        state.ok
                            ? "bg-emerald-900/40 text-emerald-200 border border-emerald-600"
                            : "bg-red-900/30 text-red-200 border border-red-600"
                    }`}
                >
                    {state.message}
                </div>
            )}

            <fieldset className="flex flex-col gap-2">
                <label htmlFor="fullName" className="text-sm font-medium">
                    {formI18n.labels.fullName}
                    <span aria-label="required" className="text-red-500">*</span>
                </label>
                <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder={formI18n.placeholders.fullName}
                    className={`${baseClass} placeholder-gray-400`}
                    required
                    aria-required="true"
                />
            </fieldset>

            <fieldset className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                    {formI18n.labels.email}
                    <span aria-label="required" className="text-red-500">*</span>
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={formI18n.placeholders.email}
                    className={`${baseClass} placeholder-gray-400`}
                    required
                    aria-required="true"
                />
            </fieldset>

            <fieldset className="flex flex-col gap-2">
                <label htmlFor="company" className="text-sm font-medium">
                    {formI18n.labels.company}
                    <span aria-label="required" className="text-red-500">*</span>
                </label>
                <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder={formI18n.placeholders.company}
                    className={`${baseClass} placeholder-gray-400`}
                    required
                    aria-required="true"
                />
            </fieldset>

            <fieldset className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium">
                    {formI18n.labels.phone}
                </label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={formI18n.placeholders.phone}
                    className={`${baseClass} placeholder-gray-400`}
                    aria-describedby="phone-hint"
                />
                {formI18n.optional && (
                    <span id="phone-hint" className="text-xs text-gray-500">
                        {formI18n.optional}
                    </span>
                )}
            </fieldset>

            <fieldset className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-medium">
                    {formI18n.labels.service}
                    <span aria-label="required" className="text-red-500">*</span>
                </label>
                <select
                    id="service"
                    name="service"
                    className={baseClass}
                    required
                    aria-required="true"
                    defaultValue=""
                >
                    {serviceOptions.map(({ value, label }) => (
                        <option key={value || "empty"} value={value} disabled={!value}>
                            {label}
                        </option>
                    ))}
                </select>
            </fieldset>

            <fieldset className="flex flex-col gap-2">
                <label htmlFor="stage" className="text-sm font-medium">
                    {formI18n.labels.stage}
                    <span aria-label="required" className="text-red-500">*</span>
                </label>
                <select
                    id="stage"
                    name="stage"
                    className={baseClass}
                    required
                    aria-required="true"
                    defaultValue=""
                >
                    {stageOptions.map(({ value, label }) => (
                        <option key={value || "empty"} value={value} disabled={!value}>
                            {label}
                        </option>
                    ))}
                </select>
            </fieldset>

            <fieldset className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="budget" className="text-sm font-medium">
                    {formI18n.labels.budget}
                </label>
                <select
                    id="budget"
                    name="budget"
                    className={baseClass}
                    defaultValue=""
                >
                    {budgetOptions.map(({ value, label }) => (
                        <option key={value || "empty"} value={value} disabled={!value}>
                            {label}
                        </option>
                    ))}
                </select>
            </fieldset>

            <fieldset className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="challenge" className="text-sm font-medium">
                    {formI18n.labels.challenge}
                    <span aria-label="required" className="text-red-500">*</span>
                </label>
                <textarea
                    id="challenge"
                    name="challenge"
                    placeholder={formI18n.placeholders.challenge}
                    className={`${baseClass} placeholder-gray-400 resize-none`}
                    required
                    aria-required="true"
                    minLength={20}
                    rows={4}
                    aria-describedby="challenge-hint"
                />
                {formI18n.minLength && (
                    <span id="challenge-hint" className="text-xs text-gray-500">
                        {formI18n.minLength}
                    </span>
                )}
            </fieldset>

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
