import "./ShareButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

interface ShareButtonProps {
    url: string;
    text: string;
    className?: string;
    [key: string]: any;
}

export default function ShareButton({url, text, className, ...rest }: ShareButtonProps) {
    return (
        <a className="share-button" href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`} {...rest}>
           <FontAwesomeIcon className="twitter-icon" icon={faXTwitter} />
        </a>
    );
}