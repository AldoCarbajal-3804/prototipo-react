import { Info } from "../components/Info"
import { useFormStatus } from "react-dom"


function Submit(){
    const {pending} = useFormStatus()
    
    return(
        <button disabled={pending} type="submit" className="bg-cyan-500 sm:col-span-2 p-3 sm:p-4 rounded-lg font-bold cursor-pointer mt-2 hover:opacity-90 transition text-sm sm:text-base">
            {pending ? "Enviando Mensaje" : "Enviar Mensaje"}
        </button>
    )
}


async function handleFormSubmit(formData){
    console.log(Object.fromEntries(formData));
    alert("Enviado");
}

function Form(){

    const today = new Date().toISOString().split("T")[0];

    return(
        <section 
            id="form-section" 
            className="bg-gray-800 flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 md:gap-12 p-4 sm:p-8 md:p-12 lg:p-20 text-gray-300"
            aria-label="Sección de contacto"
        >
            <aside 
                className="w-full lg:w-2/5"
                aria-labelledby="contact-title"
            >
                <h2 
                    id="contact-title"
                    className="title text-2xl sm:text-3xl md:text-4xl font-bold pb-4 sm:pb-6"
                >
                    Contáctanos
                </h2>
                <p 
                    className="description text-sm sm:text-base md:text-lg pb-6 sm:pb-8 md:pb-10"
                    aria-describedby="contact-title"
                >
                    Ya sea que busques un agente de IA personalizado o una renovación completa de automatización empresarial, nuestro equipo está listo para ayudarte a escalar.
                </p>
                <ul 
                    className="flex flex-col gap-4 sm:gap-5 md:gap-6"
                    aria-label="Información de contacto"
                >
                    <Info icon="📧" title="Escríbenos" value="hello@japartners.ai" />
                    <Info icon="📍" title="Nuestra Sede" value="San Francisco, CA" />
                    <Info icon="📞" title="Llámanos" value="+1 (555) 123-4567" />
                </ul>
            </aside>

            <form 
                className="bg-gray-900 w-full lg:w-1/2 p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
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

                <fieldset className="flex flex-col gap-2">
                    <label htmlFor="fullName" className="text-gray-300 text-sm font-medium">
                        Nombre Completo
                        <span aria-label="requerido" className="text-red-500">*</span>
                    </label>
                    <input 
                        id="fullName"
                        name="fullName" 
                        type="text" 
                        placeholder="Juan Pérez" 
                        className="text-gray-300 bg-gray-800 p-3 sm:p-4 rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#3AA1B8]"
                        required
                        aria-required="true"
                        aria-describedby="fullName-error"
                    />
                    <span id="fullName-error" className="sr-only"></span>
                </fieldset>

                <fieldset className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-gray-300 text-sm font-medium">
                        Correo Corporativo
                        <span aria-label="requerido" className="text-red-500">*</span>
                    </label>
                    <input 
                        id="email"
                        name="email" 
                        type="email" 
                        placeholder="juan@empresa.com" 
                        className="text-gray-300 bg-gray-800 p-3 sm:p-4 rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#3AA1B8]"
                        required
                        aria-required="true"
                        aria-describedby="email-error"
                    />
                    <span id="email-error" className="sr-only"></span>
                </fieldset>

                <fieldset className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-gray-300 text-sm font-medium">
                        Empresa
                        <span aria-label="requerido" className="text-red-500">*</span>
                    </label>
                    <input 
                        id="company"
                        name="company" 
                        type="text" 
                        placeholder="Nombre de la Empresa" 
                        className="text-gray-300 bg-gray-800 p-3 sm:p-4 rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#3AA1B8]"
                        required
                        aria-required="true"
                        aria-describedby="company-error"
                    />
                    <span id="company-error" className="sr-only"></span>
                </fieldset>

                <fieldset className="flex flex-col gap-2">
                    <label htmlFor="date" className="text-gray-300 text-sm font-medium">
                        Fecha de Reunión
                        <span aria-label="requerido" className="text-red-500">*</span>
                    </label>
                    <input 
                        id="date"
                        name="date" 
                        type="date" 
                        placeholder="dd/mm/yyyy" 
                        className="text-gray-300 bg-gray-800 p-3 sm:p-4 rounded-lg placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#3AA1B8]"
                        required
                        min={today}
                        aria-required="true"
                        aria-describedby="date-error"
                    />
                    <span id="date-error" className="sr-only"></span>
                </fieldset>

                <fieldset className="flex flex-col gap-2 sm:col-span-2">
                    <label htmlFor="message" className="text-gray-300 text-sm font-medium">
                        Mensaje
                        <span aria-label="requerido" className="text-red-500">*</span>
                    </label>
                    <textarea 
                        id="message"
                        name="message" 
                        placeholder="Cuéntanos sobre los objetivos de tu proyecto..." 
                        className="bg-gray-800 resize-none p-3 sm:p-4 rounded-lg text-gray-300 placeholder-gray-400 text-sm h-24 sm:h-32 focus:outline-none focus:ring-2 focus:ring-[#3AA1B8]"
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