import { useState,useEffect } from "react"

export const CardTrafic = ({title, desc,index }) => {

    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setVisible(true)
    }, [])

    return(
        <div
            className={`group relative p-8 border border-gray-600 rounded-2xl transition-all duration-500 
            hover:border-[#3AA1B8] hover:-translate-y-3 hover:shadow-[0_15px_50px_rgba(58,161,184,0.25)]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
            style={{ transitionDelay: `${index * 120}ms` }}
        >
            <div className="absolute -top-6 -left-4 text-6xl font-bold text-[#3AA1B8] opacity-20 group-hover:opacity-40 transition">
                {index}
            </div>
            <h4 className="text-[#D1D5DB] font-semibold text-xl mt-2">
                {title}
            </h4>
            <p className="text-[#D1D5DB] text-sm mt-3 opacity-80 leading-relaxed">
                {desc}
            </p>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(58,161,184,0.15),transparent_70%)]"></div>
        </div>
    )

}