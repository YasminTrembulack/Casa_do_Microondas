
export default function LocationDiv({ text } : { text: string })
{
    return (
        <div>
            <img src="maps-and-flags.png"/>
            <p>{text}</p>
        </div>
    )
}