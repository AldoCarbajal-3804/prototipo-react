export const Input = ({
    label,
    name,
    type = "text",
    placeholder,
    required = false,
    hint,
    minLength,
    textarea = false,
    spanCol = false,
}) => {
    const id = name
    const Tag = textarea ? "textarea" : "input"
    const base = "bg-gray-200 p-3 sm:p-4 rounded-lg placeholder-gray-400 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-700"
    const inputClasses = textarea ? base + " resize-none" : base

    return (
        <fieldset className={"flex flex-col gap-2" + (spanCol ? " sm:col-span-2" : "")}>
            <label htmlFor={id} className="text-sm font-medium">
                {label}
                {required && <span aria-label="required" className="text-red-500">*</span>}
            </label>
            <Tag
                id={id}
                name={name}
                type={textarea ? undefined : type}
                placeholder={placeholder}
                className={inputClasses}
                required={required}
                aria-required={required || undefined}
                {...(textarea ? { minLength, rows: 4 } : {})}
                {...(hint ? { "aria-describedby": id + "-hint" } : {})}
            />
            {hint && (
                <span id={id + "-hint"} className="text-xs text-gray-500">{hint}</span>
            )}
        </fieldset>
    )
}