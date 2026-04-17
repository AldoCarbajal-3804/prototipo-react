
import './App.css'
import Navbar from './navbar/Navbar.jsx'
import Hero from './hero/Hero.jsx'
import Services from './sections/Services.jsx'
import WhySection from './sections/WhySection.jsx'
import WhoSection from './sections/WhoSection.jsx'
import Stats from './sections/Stats.jsx'
import Cta from './sections/Cta.jsx'
import Form from './sections/Form.jsx'
import Footer from './footer/Footer.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <WhySection />
      <WhoSection />
      <Stats />
      <Services />
      <Cta/>
      <Form />
      <Footer />
    </>
  )
}

export default App
