export const Link = ({name,link}) => {
    return(
        <li>
            <a href={link} className="nav-link text-gray-300 no-underline hover:text-white transition" aria-label={name} aria-current={link === window.location.pathname ? "page" : undefined}>
                {name}
            </a>
        </li>
    )
}