export const validate = (formData, messages) => {
    const honeypot = formData.get("website")?.toString().trim()
    if (honeypot) return { ok: true, message: "" }

    const loadTime = parseInt(formData.get("_loadTime"), 10)
    if (loadTime && Date.now() - loadTime < 3000) return { ok: true, message: "" }

    const fields = {}
    const fullName = formData.get("fullName")?.toString().trim()
    const email = formData.get("email")?.toString().trim()
    const company = formData.get("company")?.toString().trim()
    const service = formData.get("service")?.toString()
    const stage = formData.get("stage")?.toString()
    const challenge = formData.get("challenge")?.toString().trim()

    if (!fullName) fields.fullName = messages.fullName
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fields.email = messages.email
    if (!company) fields.company = messages.company
    if (!service) fields.service = messages.service
    if (!stage) fields.stage = messages.stage
    if (!challenge || challenge.length < 20) fields.challenge = messages.challenge

    if (Object.keys(fields).length > 0) {
        return { ok: false, message: Object.values(fields)[0], fields }
    }
    return null
}
