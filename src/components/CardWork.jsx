import { useState, useEffect } from "react"

export const CardWork = ({ title, desc, img }) => {

    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 50)
        return () => clearTimeout(timer)
    }, [])

    return(
        <div
            className={`bg-sky-100 group relative p-8 border border-gray-600 rounded-2xl transition-all duration-500 
            hover:border-[#3AA1B8] hover:-translate-y-3 hover:shadow-[0_15px_50px_rgba(58,161,184,0.25)]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
            style={{ transitionDelay: `${149}ms` }}
        >
            <img 
                src={img} 
                alt={title} 
                className="w-full h-40 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="p-6">
                <h4 className="text-gray-700 font-semibold text-xl">
                    {title}
                </h4>
                <p className="text-gray-700 text-sm mt-3 opacity-80 leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    )

}