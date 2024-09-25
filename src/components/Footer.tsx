import { useState } from "react";
import "./Footer.css";
import hattoIcon from "../assets/hatto.png";
import aramIcon from "../assets/Aram.jpeg";
import Characters from "./Characters";

interface FooterProps {
  className?: string;
  [key: string]: any;
}

export default function Footer({ className, ...rest }: FooterProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`footer `} {...rest}>
      <div
        className={`footer-title ${isCollapsed ? "" : "stop"}`}
        onClick={toggleCollapse}
      >
        つくったひと <span className={`arrow `}>{isCollapsed ? "▼" : "▲"}</span>
      </div>
      <ul
        className="profiles"
        style={isCollapsed ? { height: 0, opacity: 0 } : {}}
      >
        <li className="profile">
          <a
            href="https://x.com/eiram93840577"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={aramIcon} alt="Icon 2" />
            <p>Aらm</p>
          </a>
        </li>
        <li className="profile">
          <a
            href="https://x.com/pipipihatto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={hattoIcon} alt="Icon 1" />
            <p>はっと</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
