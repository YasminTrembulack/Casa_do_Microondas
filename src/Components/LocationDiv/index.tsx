import { Div, Title, Logo, Description, Icon, Text } from "./styles";

export default function LocationDiv(
    { link, title, img, description } : { link: string, title: string , img: string, description: string}
)
{
    return (
        <Div href={link} target="_blank">
            <Logo src={img} alt="" />
            <Text>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Text>
            <Icon src="maps-and-flags.png"></Icon>
        </Div>
    )
}