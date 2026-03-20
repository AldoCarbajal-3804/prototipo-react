export const Link = ({name,link}) => {
    return(
        <li>
            <a href={link} className=" text-gray-300 no-underline hover:text-white hover:underline transition" aria-label={name} aria-current={link === window.location.pathname ? "page" : undefined}>
                {name}
            </a>
        </li>
    )
}