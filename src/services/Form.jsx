import { Info } from "../components/Info"
import { useFormStatus } from "react-dom"


function Submit(){
    const {pending} = useFormStatus()
    
    return(
        <button disabled={pending} type="submit" className="btn-submit sm:col-span-2 p-3 sm:p-4 rounded-lg font-bold cursor-pointer mt-2 hover:opacity-90 transition text-sm sm:text-base">
            {pending ? "Sending Message" : "Send Message"}
        </button>
    )
}


async function handleFormSubmit(formData){
    console.log(Object.fromEntries(formData));
    alert("Enviado");
}

function Form(){
    return(
        <section 
            id="form-section" 
            className="form-section v-stack lg:h-stack justify-between gap-8 sm:gap-10 md:gap-12 p-4 sm:p-8 md:p-12 lg:p-20 text-white"
            aria-label="Sección de contacto"
        >
            <aside 
                className="aside w-full lg:w-2/5"
                aria-labelledby="contact-title"
            >
                <h2 
                    id="contact-title"
                    className="title text-2xl sm:text-3xl md:text-4xl font-bold pb-4 sm:pb-6"
                >
                    Get in Touch
                </h2>
                <p 
                    className="description text-sm sm:text-base md:text-lg pb-6 sm:pb-8 md:pb-10"
                    aria-describedby="contact-title"
                >
                    Whether you're looking for a custom AI agent or a complete business automation overhaul, our team is ready to help you scale.
                </p>
                <ul 
                    className="v-stack gap-4 sm:gap-5 md:gap-6"
                    aria-label="Información de contacto"
                >
                    <Info icon="📧" title="Email Us" value="hello@japartners.ai" />
                    <Info icon="📍" title="Our Headquarters" value="San Francisco, CA" />
                    <Info icon="📞" title="Call Us" value="+1 (555) 123-4567" />
                </ul>
            </aside>

            <form 
                className="form w-full lg:w-1/2 p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
                action={handleFormSubmit}
                aria-labelledby="form-title"
                noValidate
            >
                <h2 
                    id="form-title"
                    className="sr-only"
                >
                    Formulario de contacto
                </h2>

                <fieldset className="v-stack gap-2">
                    <label htmlFor="fullName" className="text-sm font-medium">
                        Full Name
                        <span aria-label="requerido" className="text-red-500">*</span>
                    </label>
                    <input 
                        id="fullName"
                        name="fullName" 
                        type="text" 
                        placeholder="John Doe" 
                        className="p-3 sm:p-4 rounded-lg placeholder-gray-400 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#3AA1B8]"
                        required
                        aria-required="true"
                        aria-describedby="fullName-error"
                    />
                    <span id="fullName-error" className="sr-only"></span>
                </fieldset>

                <fieldset className="v-stack gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                        Work Email
                        <span aria-label="requerido" className="text-red-500">*</span>
                    </label>
                    <input 
                        id="email"
                        name="email" 
                        type="email" 
                        placeholder="john@company.com" 
                        className="p-3 sm:p-4 rounded-lg placeholder-gray-400 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#3AA1B8]"
                        required
                        aria-required="true"
                        aria-describedby="email-error"
                    />
                    <span id="email-error" className="sr-only"></span>
                </fieldset>

                <fieldset className="v-stack gap-2 sm:col-span-2">
                    <label htmlFor="company" className="text-sm font-medium">
                        Company
                        <span aria-label="requerido" className="text-red-500">*</span>
                    </label>
                    <input 
                        id="company"
                        name="company" 
                        type="text" 
                        placeholder="Company Name" 
                        className="p-3 sm:p-4 rounded-lg placeholder-gray-400 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#3AA1B8]"
                        required
                        aria-required="true"
                        aria-describedby="company-error"
                    />
                    <span id="company-error" className="sr-only"></span>
                </fieldset>

                <fieldset className="v-stack gap-2 sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium">
                        Message
                        <span aria-label="requerido" className="text-red-500">*</span>
                    </label>
                    <textarea 
                        id="message"
                        name="message" 
                        placeholder="Tell us about your project goals..." 
                        className="resize-none p-3 sm:p-4 rounded-lg text-black placeholder-gray-400 text-sm h-24 sm:h-32 focus:outline-none focus:ring-2 focus:ring-[#3AA1B8]"
                        required
                        aria-required="true"
                        aria-describedby="message-error"
                    ></textarea>
                    <span id="message-error" className="sr-only"></span>
                </fieldset>

                <Submit />
            </form>
        </section>
    )
}

export default Form