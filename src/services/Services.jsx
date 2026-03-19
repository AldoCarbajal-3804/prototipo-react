import { Card } from "../components/Card"
import auto from '../assets/svg/auto.svg'
import chat from '../assets/svg/chat.svg'
import code from '../assets/svg/code.svg'
import flow from '../assets/svg/flow.svg'
import search from '../assets/svg/search.svg'
import stats from '../assets/svg/stats.svg'

function Services() {

    return(
        <article id="services-section" className="services-section border-b-2 border-gray-600">
            <h1 className="title text-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-4 sm:pb-6 text-3xl sm:text-4xl md:text-5xl font-bold">Our Expertise</h1>
            <p className="description text-center pb-8 sm:pb-10 md:pb-12 text-sm sm:text-base md:text-lg px-4">
                Tailored AI-driven solutions designed to navigate and simplify modern business complexity.
            </p>
            <div className="cards-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
                <Card 
                    icon={code}
                    name="Custom Software"
                    description="Bespoke development tailored to your specific infrastructure and business requirements."
                />
                <Card 
                    icon={chat}
                    name="Intelligent Chatbots"
                    description="LLM-powered agents that understand context and provide human-like customer interactions."
                />
                <Card 
                    icon={flow}
                    name="Agent Workflows"
                    description="Automated, multi-step agent processes that handle complex logical tasks autonomously."
                />
                <Card 
                    icon={auto}
                    name="Automation Agents"
                    description="Replace manual labor with AI agents that manage data, spreadsheets, and routine emails."
                />
                <Card 
                    icon={search}
                    name="AI for Research"
                    description="Rapidly synthesize large datasets and extract actionable insights with specialized AI models."
                />
                <Card 
                    icon={stats}
                    name="Optimization"
                    description="Reduce operational costs and eliminate bottlenecks through intelligent workflow analysis."
                />
            </div>
        </article>
    )
}

export default Services