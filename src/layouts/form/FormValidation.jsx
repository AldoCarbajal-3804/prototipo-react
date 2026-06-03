export const validate = (formData, messages) => {
    const fullName = formData.get("fullName")?.toString().trim()
    const email = formData.get("email")?.toString().trim()
    const company = formData.get("company")?.toString().trim()
    const service = formData.get("service")?.toString()
    const stage = formData.get("stage")?.toString()
    const challenge = formData.get("challenge")?.toString().trim()

    if (!fullName) return { ok: false, message: messages.fullName }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, message: messages.email }
    if (!company) return { ok: false, message: messages.company }
    if (!service) return { ok: false, message: messages.service }
    if (!stage) return { ok: false, message: messages.stage }
    if (!challenge || challenge.length < 20) return { ok: false, message: messages.challenge }
    return null
}
