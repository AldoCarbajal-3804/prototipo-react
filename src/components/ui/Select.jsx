export const Select = ({
    label,
    name,
    options,
    required = false,
    spanCol = false,
}) => {
    const id = name

    return (
        <fieldset className={"flex flex-col gap-2" + (spanCol ? " sm:col-span-2" : "")}>
            <label htmlFor={id} className="text-sm font-medium">
                {label}
                {required && <span aria-label="required" className="text-red-500">*</span>}
            </label>
            <select
                id={id}
                name={name}
                className="bg-gray-200 p-3 sm:p-4 rounded-lg placeholder-gray-400 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-700"
                required={required}
                aria-required={required || undefined}
                defaultValue=""
            >
                {options.map(({ value, label }) => (
                    <option key={value || "empty"} value={value} disabled={!value}>
                        {label}
                    </option>
                ))}
            </select>
        </fieldset>
    )
}