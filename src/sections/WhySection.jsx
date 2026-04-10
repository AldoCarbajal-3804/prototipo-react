import {CardTrafic} from '../components/CardTrafic'

function WhySection() {
    
    return(
        <section id="why-section" className="why-section flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20">

            <h1 className="title text-3xl sm:text-4xl lg:text-7xl mb-6 font-bold sm:mb-8 leading-tight">A system designed to <br />
                <strong>turn attention into growth</strong>
            </h1>
            <br />
            <br />

            <div className="cont-cards grid sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                <CardTrafic
                    title="Attract the right opportunities"
                    desc="We identify and reach high-value prospects through targeted digital channels, ensuring your business connects with the right audience at the right time."
                    index="1"
                />
                <CardTrafic
                    title="Build trust instantly"
                    desc="We craft a clear and compelling value proposition that communicates credibility, expertise and differentiation from the very first interaction."
                    index="2"
                />
                <CardTrafic
                    title="Capture real demand"
                    desc="Through optimized user journeys and intelligent forms, we transform interest into actionable leads while minimizing friction."
                    index="3"
                />
                <CardTrafic
                    title="Filter what matters"
                    desc="We evaluate each lead based on key criteria such as business needs, urgency, budget and technological readiness to prioritize high-impact opportunities."
                    index="4"
                />
                <CardTrafic
                    title="Convert into meetings"
                    desc="Qualified prospects are seamlessly guided into scheduling meetings, ensuring every interaction has context and business relevance."
                    index="5"
                />
                <CardTrafic
                    title="Scale long-term growth"
                    desc="We implement continuous follow-ups, automation and performance tracking to generate sustainable growth and long-term partnerships."
                    index="6"
                />
                

            </div>
            
        </section>
    )

}

export default WhySection