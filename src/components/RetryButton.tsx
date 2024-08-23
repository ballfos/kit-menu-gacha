import "./RetryButton.css";

interface RetryButtonProps {
    price: number;
    onClick: () => void;
    className?: string;
    [key: string]: any;
}

export default function RetryButton({ price, onClick, className, ...rest }: RetryButtonProps) {
    return (
        <button className={`retry-button ${className}`} onClick={onClick} {...rest}>
           もう一度回す
        </button>
    );
}