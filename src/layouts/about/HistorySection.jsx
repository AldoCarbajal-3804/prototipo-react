import { useLanguage } from "../../hooks/LanguageContext.jsx"

function HistorySection() {
  const { t } = useLanguage();

  return (
    <section className="relative mx-auto py-12 sm:py-16 md:py-20 lg:py-24 bg-blue-200 px-6">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
    
            <article className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-12">
                <header className="w-full lg:w-1/3 flex items-center lg:justify-end">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight lg:text-right">
                        {t.historySection.title1}
                    </h2>
                </header>

                <footer className="flex gap-4 lg:gap-12 w-full lg:w-2/3">
                    <span className="w-[2px] bg-blue-950 self-stretch shrink-0"></span>
                    <div className="flex flex-col justify-center text-left w-full">
                        <p className="text-gray-600 text-base lg:text-xl leading-relaxed">
                            {t.historySection.desc1}
                        </p>
                    </div>
                </footer>
            </article>

            <article className="flex flex-col lg:flex-row-reverse items-stretch gap-6 lg:gap-12">
                <header className="w-full lg:w-1/3 flex items-center lg:justify-start">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight text-left">
                        {t.historySection.title2}
                    </h2>
                </header>

                <footer className="flex gap-4 lg:gap-12 w-full lg:w-2/3">
                    <div className="flex flex-col justify-center text-left lg:text-right w-full">
                        <p className="text-gray-600 text-base lg:text-xl leading-relaxed">
                            {t.historySection.desc2}
                        </p>
                    </div>
                    <span className="w-[2px] bg-blue-950 self-stretch shrink-0"></span>
                </footer>
            </article>

        </div>
    </section>
  );
}

export default HistorySection;