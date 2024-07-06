import "./GachaButton.css";

interface GachaButtonProps {
    price: number;
    onClick: () => void;
    className?: string;
    [key: string]: any;
}

export default function GachaButton({ price, onClick, className, ...rest }: GachaButtonProps) {
    return (
        <button className={`gacha-button ${className}`} onClick={onClick} {...rest}>
            ￥{price} ガチャ
        </button>
    );
}