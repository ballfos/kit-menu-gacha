import { Dish } from "../repositories/MenuRepository";
import "./DishCard.css";

interface DishCardProps {
    dish : Dish;
    className?: string;
    [key: string]: any;
}

export default function DishCard({ dish, className, ...rest }: DishCardProps) {
    return (
        <div className={`dishcard ${className}`} {...rest}>
            <div className={`dishcard-name `}>
                <p>{dish.name}</p>
            </div>
            <div className="dishcard-split"></div>
            <div className={`dishcard-price `}>
               <p>¥{dish.price}</p>
            </div>
        </div>
        
    );
}