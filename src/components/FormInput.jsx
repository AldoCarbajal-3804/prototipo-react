export function FormInput({
  id,
  name,
  label,
  type = "text",
  placeholder,
  colSpan = false,
  error
}) {
  return (
    <fieldset className={`v-stack gap-2 ${colSpan ? "sm:col-span-2" : ""}`}>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        <span aria-label="requerido" className="text-red-500">*</span>
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`p-3 sm:p-4 rounded-lg placeholder-gray-400 text-sm text-black focus:outline-none focus:ring-2 ${
          error ? "ring-2 ring-red-500" : "focus:ring-[#3AA1B8]"
        }`}
        required
        aria-required="true"
        aria-describedby={`${id}-error`}
        aria-invalid={!!error}
      />
      <span id={`${id}-error`} role="alert" className="text-red-400 text-xs">
        {error ?? ""}
      </span>
    </fieldset>
  )
}