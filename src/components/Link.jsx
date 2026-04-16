export const Link = ({name, link}) => {
    return (
        <li>
            <a 
                href={link} 
                className="text-black hover:underline hover:decoration-[#3AA1B8] hover:underline-offset-4 font-semibold transition-all duration-500" 
                aria-label={name}
            >
                {name}
            </a>
        </li>
    );
};