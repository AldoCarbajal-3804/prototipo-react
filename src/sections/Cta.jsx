function CtaSection(){
    return(
        <section className="cta-section p-4 sm:p-6 md:p-8 lg:p-8">
            <blockquote className="cta rounded-xl sm:rounded-2xl p-8 sm:p-12 shadow-lg">
                <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl pb-4 sm:pb-6 md:pb-8">Ready to Evolve?</h1>
                <p className="text-center text-sm sm:text-base md:text-lg pb-6 sm:pb-8 px-4">Transform your business with AI-driven automation today. Let's build something extraordinary together.</p>
                <div className="text-center"><button className="btn-cta px-4 sm:px-5 md:px-6 py-3 sm:py-4 rounded-lg md:rounded-xl font-bold text-sm sm:text-base md:text-lg cursor-pointer hover:opacity-90 transition"> <a href="#form-section">Contact Us Today</a></button></div>
            </blockquote>
        </section>
    )
}

export default CtaSection