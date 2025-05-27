import { ALink } from "./styles";

export default function StyledA({ to,  text } : { to: string, text: string })
{
    return <ALink href={to}>{text}</ALink>
}