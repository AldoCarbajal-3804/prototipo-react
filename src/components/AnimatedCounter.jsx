import { useState, useEffect, useRef, useCallback } from 'react'

function parseValue(str) {
  const cleaned = str.replace(/,/g, '')
  const match = cleaned.match(/^([^\d]*)(\d+\.?\d*)(.*)$/)
  if (!match) return null
  return {
    prefix: match[1],
    number: parseFloat(match[2]),
    suffix: match[3],
    hasDecimal: match[2].includes('.'),
    decimalPlaces: match[2].includes('.') ? (match[2].split('.')[1]?.length || 1) : 0,
  }
}

function formatDisplay(num, info) {
  if (info.hasDecimal) {
    return num.toFixed(info.decimalPlaces)
  }
  return Math.round(num).toLocaleString('en-US')
}

export const AnimatedCounter = ({ value, duration = 1500, ...rest }) => {
  const info = parseValue(String(value))
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const rafRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasAnimated])

  const animate = useCallback(() => {
    const target = info ? info.number : 0
    const startTime = performance.now()

    function step(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(target * eased)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }

    rafRef.current = requestAnimationFrame(step)
  }, [info, duration])

  useEffect(() => {
    if (hasAnimated) {
      animate()
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [hasAnimated, animate])

  if (!info) {
    return <span ref={ref} {...rest}>{value}</span>
  }

  return (
    <span ref={ref} {...rest}>
      {info.prefix}{formatDisplay(display, info)}{info.suffix}
    </span>
  )
}
