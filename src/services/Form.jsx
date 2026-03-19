import { Info } from "../components/Info"

function Form(){
    return(
        <section id="form-section" className="form-section flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 md:gap-12 p-4 sm:p-8 md:p-12 lg:p-20 text-white">
            <aside class="aside w-full lg:w-2/5">
                <h2 class="title text-2xl sm:text-3xl md:text-4xl font-bold pb-4 sm:pb-6">Get in Touch</h2>
                <p class="description text-sm sm:text-base md:text-lg pb-6 sm:pb-8 md:pb-10">
                    Whether you're looking for a custom AI agent or a complete business automation overhaul, our team is ready to help you scale.
                </p>
                <ul class="flex flex-col gap-4 sm:gap-5 md:gap-6">
                    <Info icon="📧" title="Email Us" value="hello@japartners.ai" />
                    <Info icon="📍" title="Our Headquarters" value="San Francisco, CA" />
                    <Info icon="📞" title="Call Us" value="+1 (555) 123-4567" />
                </ul>
            </aside>
            <form class="form w-full lg:w-1/2 p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">   
                <fieldset class="flex flex-col gap-2">
                    <label class="text-sm">Full Name</label>
                    <input type="text" placeholder="John Doe" class="p-3 sm:p-4 rounded-lg placeholder-gray-400 text-sm"/>
                </fieldset>
                <fieldset class="flex flex-col gap-2">
                    <label class="text-sm">Work Email</label>
                    <input type="email" placeholder="john@company.com" class="p-3 sm:p-4 rounded-lg placeholder-gray-400 text-sm"/>
                </fieldset>
                <fieldset class="flex flex-col gap-2 sm:col-span-2">
                    <label class="text-sm">Company</label>
                    <input type="text" placeholder="Company Name" class="p-3 sm:p-4 rounded-lg placeholder-gray-400 text-sm"/>
                </fieldset>
                <fieldset class="flex flex-col gap-2 sm:col-span-2">
                    <label class="text-sm">Message</label>
                    <textarea placeholder="Tell us about your project goals..." class="resize-none p-3 sm:p-4 rounded-lg text-white placeholder-gray-400 text-sm h-24 sm:h-32"></textarea>
                </fieldset>
                <button type="submit" class="btn-submit sm:col-span-2 p-3 sm:p-4 rounded-lg font-bold cursor-pointer mt-2 hover:opacity-90 transition text-sm sm:text-base">Send Message</button>
            </form>
        </section>
    )
}

export default Form