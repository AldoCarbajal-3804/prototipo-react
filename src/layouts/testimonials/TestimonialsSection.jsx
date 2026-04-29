import { TestimonialCard } from '../../components/TestimonialCard.jsx';
import { useLanguage } from '../../hooks/LanguageContext.jsx';

function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="testimonials-section"
      className="py-24 bg-white border-b-2 border-gray-600 relative overflow-hidden"
    >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <aside className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                    {t.testimonials.title}
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    {t.testimonials.description}
                </p>
            </aside>

            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.testimonials.cards.map((testimonial, index) => (
                    <TestimonialCard
                    key={index}
                    name={testimonial.name}
                    role={testimonial.role}
                    content={testimonial.content}
                    avatar={testimonial.avatar}
                    stars={testimonial.stars}
                    />
                ))}
            </main>
        </div>
    </section>
  );
}

export default TestimonialsSection;