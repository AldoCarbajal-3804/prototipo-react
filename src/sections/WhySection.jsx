import { useState } from 'react';
import { AccordionItem } from '../components/AccordionItem';

function WhySection() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "Attract the right opportunities",
      desc: "We identify and reach high-value prospects through targeted digital channels, ensuring your business connects with the right audience at the right time.",
      category: "Lead Generation"
    },
    {
      title: "Build trust instantly",
      desc: "We craft a clear and compelling value proposition that communicates credibility, expertise and differentiation from the very first interaction.",
      category: "Brand Authority"
    },
    {
      title: "Capture real demand",
      desc: "Through optimized user journeys and intelligent forms, we transform interest into actionable leads while minimizing friction.",
      category: "Innovation"
    },
    {
      title: "Filter what matters",
      desc: "We evaluate each lead based on key criteria such as business needs, urgency, budget and technological readiness to prioritize high-impact opportunities.",
      category: "Lead Scoring"
    },
    {
      title: "Convert into meetings",
      desc: "Qualified prospects are seamlessly guided into scheduling meetings, ensuring every interaction has context and business relevance.",
      category: "Sales Automation"
    },
    {
      title: "Scale long-term growth",
      desc: "We implement continuous follow-ups, automation and performance tracking to generate sustainable growth and long-term partnerships.",
      category: "Strategic Growth"
    }
  ];

  return (
    <section id="why-section" className="bg-blue-100 py-20 lg:py-32 px-6 sm:px-12 lg:px-24 border-b border-gray-200">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

        <div className="lg:w-1/3 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-gray-900">
            At J&A Partners, we build systems designed to turn attention into growth.
          </h2>
        </div>
        
        <div className="lg:w-2/3">
          <div className="flex flex-col">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                desc={item.desc}
                category={item.category}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

      </section>
    </section>
  );
}

export default WhySection;