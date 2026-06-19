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
    const consent = formData.get("consent")?.toString()

    if (!fullName) fields.fullName = messages.fullName
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fields.email = messages.email
    if (!company) fields.company = messages.company
    if (!service) fields.service = messages.service
    if (!stage) fields.stage = messages.stage
    if (!challenge || challenge.length < 20) fields.challenge = messages.challenge
    if (consent !== "on") fields.consent = messages.consent

    if (Object.keys(fields).length > 0) {
        return { ok: false, message: Object.values(fields)[0], fields }
    }
    return null
}

export const leadScore = (formData) => {
    const stage = formData.get("stage")?.toString()
    const budget = formData.get("budget")?.toString()
    const service = formData.get("service")?.toString()

    const stagePoints = { idea: 1, mvp: 2, operacion: 3, optimizar: 3 }
    const budgetPoints = { "menos-5k": 1, "5k-15k": 2, "15k-50k": 3, "mas-50k": 4, "por-definir": 0 }
    const servicePoints = { ia: 3, automatizacion: 3, software: 3, consultoria: 2, otro: 1 }

    const total = (stagePoints[stage] || 0) + (budgetPoints[budget] || 0) + (servicePoints[service] || 0)
    const tier = total <= 3 ? "Cold" : total <= 6 ? "Warm" : "Hot"

    return { total, tier }
}
