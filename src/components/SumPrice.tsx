import "./SumPrice.css"; // CSSファイルをインポート

interface SumPriceProps {
  price: number;
  className?: string;
  [key: string]: any;
}

export default function SumPrice({ price, className, ...rest }: SumPriceProps) {
  return (
    <div className={`sum-price ${className}`} {...rest}>
      <p>合計</p>
      <p>¥{price}</p>
    </div>
  );
}
