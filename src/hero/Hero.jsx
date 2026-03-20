import IconHero from "./IconHero"

function Hero() {
    return(
        <section className="hero-section flex flex-col lg:flex-row lg:justify-between justify-center px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16 border-b border-gray-500" aria-label="Page principal">
 
            <div className="eslogan flex flex-col justify-center items-center lg:items-start lg:flex-1 text-center lg:text-left" role="region" aria-labelledby="hero-title">
                <h1 className="title text-3xl sm:text-4xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight" aria-label="title">
                    AI Solutions for 
                    <br />
                    <strong>
                        Research and 
                        <br />
                        Business
                        <br />
                        Automation
                    </strong>
                </h1>
                
                <p className="description text-sm sm:text-base lg:text-xl mb-8 sm:mb-12 lg:mb-14 leading-relaxed max-w-2xl" aria-label="description">
                    Empower your enterprise with intelligent agent workflows and custom software engineered for the next generation of operational excellence.
                </p>
                
                <div className="cont-btn flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 w-full sm:w-auto" role="group" aria-label="Botones de acción principal">
                    <button className="btn-form px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl text-sm sm:text-base lg:text-lg font-bold cursor-pointer hover:opacity-90 transition whitespace-nowrap">
                        <a href="#form-section">
                            Get Started
                        </a>
                    </button>
                    <button className="bg-transparent text-sm sm:text-base lg:text-lg cursor-pointer hover:text-white transition border border-gray-300 px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl">
                        <a href="#services-section" className="no-underline hover:text-white">
                            Explore Services ↓
                        </a>
                    </button>
                </div>
            </div>
            
            <figure className="icon-hero w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-2xl sm:rounded-3xl relative flex justify-center items-center mx-auto lg:mx-0 mt-8 sm:mt-12 lg:mt-0 lg:ml-8 shrink-0" role="img" aria-label="Icono decorativo de animación de respiración">
                <IconHero />
            </figure>
            
        </section>
    )
}
export default Hero