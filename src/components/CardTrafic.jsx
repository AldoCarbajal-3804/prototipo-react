import { useState,useEffect } from "react"

export const CardTrafic = ({title, desc,index }) => {

    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setVisible(true)
    }, [])

    return(
        <div
            className={`bg-blue-200 group relative p-8 border border-gray-600 rounded-2xl transition-all duration-500 
            hover:border-cyan-500 hover:-translate-y-3 hover:shadow-[0_15px_50px_rgba(58,161,184,0.25)]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
            style={{ transitionDelay: `${index * 120}ms` }}
        >
            <h4 className="text-gray-700 font-semibold text-xl mt-2">
                {title}
            </h4>
            <p className="text-gray-700 text-sm mt-3 opacity-80 leading-relaxed">
                {desc}
            </p>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(58,161,184,0.15),transparent_70%)]"></div>
        </div>
    )

}