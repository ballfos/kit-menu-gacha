import React, { useState } from "react";
import "./Footer.css";
import hattoIcon from "../assets/rainbowhatto2.png";
import aramIcon from "../assets/IMG_3989.jpg";

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
    <div
      className={`footer ${isCollapsed ? "collapsed" : ""} ${className}`}
      {...rest}
    >
      <p className="footer-title" onClick={toggleCollapse}>
        つくったひと {isCollapsed ? "▼" : "▲"}
      </p>
      {!isCollapsed && (
        <div className="icons">
          <div className="icon-container">
            <a
              href="https://x.com/pipipihatto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={hattoIcon} alt="Icon 1" />
            </a>
            <p className="icon-name">はっと</p>
          </div>
          <div className="icon-container">
            <a
              href="https://x.com/eiram93840577"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={aramIcon} alt="Icon 2" />
            </a>
            <p className="icon-name">Aらm</p>
          </div>
        </div>
      )}
    </div>
  );
}
