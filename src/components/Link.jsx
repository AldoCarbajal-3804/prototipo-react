export const Link = ({name,link}) => {
    return(
        <li>
            <a href={link} className=" text-gray-300 no-underline hover:text-white hover:underline transition">
                {name}
            </a>
        </li>
    )
}