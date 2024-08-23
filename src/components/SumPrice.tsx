

import './SumPrice.css';

interface SumPriceProps {
    price: number;
    className?: string;
    [key: string]: any;
}

export default function SumPrice({ price, className, ...rest }: SumPriceProps) {
    return (
        <div className={`sum-price ${className}`}  {...rest}>
           <p>合計金額: ¥{price}</p>
        </div>
    );
}