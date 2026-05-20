

export const CardWork = ({ title, desc, img }) => {

    return(
        <div
            className="bg-white rounded-xl shadow-lg overflow-hidden h-full v-stack transition-transform hover:scale-[1.02] duration-300 mx-2"
        >
            <img 
                src={img} 
                alt={title} 
                className="w-full h-full object-cover"
            />
            <footer className="p-6">
                <h4 className="text-neutral-700 font-semibold text-lg sm:text-xl">
                    {title}
                </h4>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                    {desc}
                </p>
            </footer>
        </div>
    )

}