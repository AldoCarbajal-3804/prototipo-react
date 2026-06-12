import { useLanguage } from '@/hooks/LanguageContext.jsx'

export const SkipLink = () => {
  const { language } = useLanguage()
  const text = language === 'es'
    ? 'Saltar al contenido principal'
    : 'Skip to main content'

  return (
    <a href="#hero-section" className="skip-link" id="skip-link">
      {text}
    </a>
  )
}
