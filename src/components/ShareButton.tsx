import "./ShareButton.css";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
*/
import packageJson from "../../package.json";

interface ShareButtonProps {
    text: string;
    className?: string;
    [key: string]: any;
}

export default function ShareButton({url, text, className, ...rest }: ShareButtonProps) {
    return (
      
        <a className="share-button" href={`https://twitter.com/intent/tweet?text=${text}&url=${packageJson.homepage}`} {...rest}>
              <div className={`dishcard-name `}></div>
         結果をツイート
        </a>
    );
}