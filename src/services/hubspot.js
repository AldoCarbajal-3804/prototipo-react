const PORTAL_ID = "51566808"
const FORM_ID = "afc35e3b-d6f7-4fc9-b124-8cb2186aa1e3"

const FIELD_MAP = {
  service: "service_of_interest",
  stage: "project_stage",
  budget: "estimated_budget",
  challenge: "main_challenge",
}

export async function submitForm(payload) {
  const nameParts = payload.fullName.trim().split(/\s+/)
  const firstName = nameParts[0] || ""
  const lastName = nameParts.slice(1).join(" ") || firstName

  const fields = [
    { name: "email", value: payload.email },
    { name: "firstname", value: firstName },
    { name: "lastname", value: lastName },
    { name: "hs_whatsapp_phone_number", value: payload.phone || "" },
    { name: "0-2/name", value: payload.company || "" },
    { name: FIELD_MAP.service, value: payload.service || "" },
    { name: FIELD_MAP.stage, value: payload.stage || "" },
    { name: FIELD_MAP.budget, value: payload.budget || "" },
    { name: FIELD_MAP.challenge, value: payload.challenge || "" },
    { name: "lead_score_total", value: String(payload.leadScore?.total ?? 0) },
    { name: "lead_score_tier", value: payload.leadScore?.tier ?? "" },
    { name: "utm_source", value: payload.utmSource || "" },
    { name: "utm_medium", value: payload.utmMedium || "" },
    { name: "utm_campaign", value: payload.utmCampaign || "" },
  ]

  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields,
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      }),
    }
  )

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.message || "Error al enviar formulario a HubSpot")
  }

  return res.json()
}
