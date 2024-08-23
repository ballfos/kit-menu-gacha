import "./ShareButton.css";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
*/
interface ShareButtonProps {
    url: string;
    text: string;
    className?: string;
    [key: string]: any;
}

export default function ShareButton({url, text, className, ...rest }: ShareButtonProps) {
    return (
        <a className="share-button" href={`https://twitter.com/intent/tweet?text=${text}&hashtags=オルタスガチャ&url=${url}`} {...rest}>
         結果をXで共有する
        </a>
    );
}