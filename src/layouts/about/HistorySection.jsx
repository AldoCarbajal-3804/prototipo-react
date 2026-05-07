import { useLanguage } from "../../hooks/LanguageContext.jsx"
import { useScrollAnimation } from "../../hooks/useScrollAnimation.jsx"

function HistorySection() {
  const { t } = useLanguage();
  const [title1Ref, isVisible1] = useScrollAnimation({ threshold: 0.3 });
  const [title2Ref, isVisible2] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="relative mx-auto py-[6%] px-[4%] bg-blue-200">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
    
            <article className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-12">
                <header ref={title1Ref} className="w-full lg:w-1/3 flex items-center lg:justify-end">
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight lg:text-right transition-all duration-500 ${
                      isVisible1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        {t.historySection.title1}
                    </h2>
                </header>

                <footer className="flex gap-4 lg:gap-12 w-full lg:w-2/3">
                    <span className="w-0.5 bg-blue-950 self-stretch shrink-0"></span>
                    <div className="flex flex-col justify-center text-left w-full">
                        <p className="text-gray-600 text-base lg:text-xl leading-relaxed">
                            {t.historySection.desc1}
                        </p>
                    </div>
                </footer>
            </article>

            <article className="flex flex-col lg:flex-row-reverse items-stretch gap-6 lg:gap-12">
                <header ref={title2Ref} className="w-full lg:w-1/3 flex items-center lg:justify-start">
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight text-left transition-all duration-500 ${
                      isVisible2 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        {t.historySection.title2}
                    </h2>
                </header>

                <footer className="flex gap-4 lg:gap-12 w-full lg:w-2/3">
                    <div className="flex flex-col justify-center text-left lg:text-right w-full">
                        <p className="text-gray-600 text-base lg:text-xl leading-relaxed">
                            {t.historySection.desc2}
                        </p>
                    </div>
                    <span className="w-0.5 bg-blue-950 self-stretch shrink-0"></span>
                </footer>
            </article>

        </div>
    </section>
  );
}

export default HistorySection;
