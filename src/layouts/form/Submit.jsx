import { useFormStatus } from "react-dom"

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

export default Submit
