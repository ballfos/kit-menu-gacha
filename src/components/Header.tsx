import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
interface HeaderProps {
  onBack: () => void;
}

export default function Header({ onBack }: HeaderProps) {
  return (
    <header>
      <FontAwesomeIcon icon={faArrowLeft} onClick={onBack} />
    </header>
  );
}
