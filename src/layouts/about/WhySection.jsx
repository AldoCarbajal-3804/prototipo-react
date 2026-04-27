import { useState } from 'react';
import { useLanguage } from '../../hooks/LanguageContext.jsx';
import { AccordionItem } from '../../components/AccordionItem.jsx';

function WhySection() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useLanguage();

  const items = t.whySection.items;

  return (
    <article id="why-section" className="bg-blue-100 py-20 lg:py-32 px-6 sm:px-12 lg:px-24 border-b-2 border-gray-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-blue-200 via-cyan-100 to-blue-300 animate-gradient-slow" />
      <section className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/3 w-64 h-64 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </section>
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        <div className="lg:w-1/3 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-gray-900">
            {t.whySection.heading}
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
    </article>
  );
}

export default WhySection;