import "./Characters.css";
import hattoAquatan from "../assets/15158.gif";
import aramAquatan from "../assets/15164.gif";

interface CharactersProps {
    className?: string;
    [key: string]: any;
}

export default function Characters({ className, ...rest }: CharactersProps) {
    return (
        <ul className="characters" {...rest}>
            <li className="character">
                <img src={aramAquatan} alt="Aram" />
            </li>
            <li className="character">
                <img src={hattoAquatan} alt="Hatto" />
            </li>
        </ul>
    )
}