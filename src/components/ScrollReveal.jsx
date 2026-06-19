import { useScrollAnimation } from '@/hooks/useScrollAnimation.jsx'

export const ScrollReveal = ({ children, className = '', threshold = 0.15 }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
