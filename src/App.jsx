
import './App.css'
import {lazy} from 'react'
const  Navbar = lazy(() => import('./layouts/navbar/Navbar.jsx'))
const  Hero = lazy(() => import('./layouts/hero/Hero.jsx'))
const  Services = lazy(() => import('./layouts/sections/Services.jsx'))
const  WhySection = lazy(() => import('./layouts/about/WhySection.jsx'))
const  WhoSection = lazy(() => import('./layouts/about/WhoSection.jsx'))
const  Stats = lazy(() => import('./layouts/stats/Stats.jsx'))
const  Cta = lazy(() => import('./layouts/form/Cta.jsx'))
const  Form = lazy(() => import('./layouts/form/Form.jsx'))
const  Footer = lazy(() => import('./layouts/footer/Footer.jsx'))
import { LanguageProvider } from './hooks/LanguageContext.jsx'

function App() {

  return (
    <LanguageProvider>
      <Navbar/>
      <Hero/>
      <WhySection />
      <WhoSection />
      <Stats />
      <Services />
      <Cta/>
      <Form />
      <Footer />
    </LanguageProvider>
  )
}

export default App
