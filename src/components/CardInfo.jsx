export const CardInfo = ({ emoji, title, description }) => {
    return (
        <blockquote className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 hover:shadow-xl transition">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-800 mb-4">
                {emoji} {title}
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base lg:text-xl">
                {description}
            </p>
        </blockquote>
    );
};
