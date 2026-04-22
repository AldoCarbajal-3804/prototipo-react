export const Link = ({name, link}) => {
    return (
        <li>
            <a 
                href={link} 
                className="text-xs sm:text-sm md:text-base text-black hover:underline transition-colors duration-300" 
                aria-label={name}
            >
                {name}
            </a>
        </li>
    );
};