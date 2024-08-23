import "./Footer.css";

interface FooterProps {
    className?: string;
    [key: string]: any;
}

export default function Footer({ className, ...rest }: FooterProps) {
    return (
        <div className={`footer ${className}`}  {...rest}>
          <p>製作者<br />
                <img src="/path/to/icon1.png" alt="はっと" /> はっと<br />
                <img src="/path/to/icon2.png" alt="Aらm" /> Aらm</p>
        </div>
    );
}