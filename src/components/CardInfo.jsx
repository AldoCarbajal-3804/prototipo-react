export const CardInfo = ({ emoji, title, description }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-xl transition">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
                {emoji} {title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base lg:text-xl">
                {description}
            </p>
        </div>
    );
};
