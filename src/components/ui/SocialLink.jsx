export const SocialLink = ({icon,name,link}) => {

    return(
        <li className="flex justify-start gap-4 items-center">
            <img src={icon} alt={name} />
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-white">{name}</a>
        </li>
    )

}