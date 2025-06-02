import { Icon, Div, Link } from "./styles";

export default function LocationDiv({ link, text } : { link: string, text: string })
{
    return (
        <Div>
            <Icon src="maps-and-flags.png"/>
            <Link href={link} target="_blank">{text}</Link>
        </Div>
    )
}