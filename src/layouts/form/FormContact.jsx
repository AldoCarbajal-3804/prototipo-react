import {useLanguage} from "@/hooks/LanguageContext";
import { Info } from "@/components/ui/Info"

function FormContact() {
    const { t } = useLanguage()
    return (
        
        <aside className="aside w-full lg:w-2/5" aria-labelledby="contact-title">
            <h2
                id="contact-title"
                className="title text-2xl sm:text-3xl md:text-4xl font-bold pb-4 sm:pb-6"
            >
                {t.form.heading}
            </h2>
            <p
                className="description text-sm sm:text-base md:text-lg pb-6 sm:pb-8 md:pb-10"
                aria-describedby="contact-title"
            >
                {t.form.description}
            </p>
            <ul className="flex flex-col gap-4 sm:gap-5 md:gap-6" aria-label={t.form.heading}>
                {t.form.contactInfo.map((item, i) => (
                    <Info key={i} icon={item.icon} title={item.title} value={item.value} />
                ))}
            </ul>
            <a
                href="#agenda-section"
                className="inline-flex mt-6 sm:mt-8 items-center justify-center px-4 sm:px-5 py-3 rounded-lg font-semibold text-sm sm:text-base border-2 transition border-cyan-700 text-gray-200"
            >
                {t.form.ctaButton}
            </a>
        </aside>

    )

}

export default FormContact