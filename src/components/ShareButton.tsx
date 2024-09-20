import "./ShareButton.css";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
*/
import packageJson from "../../package.json";
import { Dish, Meal } from "../repositories/MenuRepository";

interface ShareButtonProps {
  meal?: Meal;
  className?: string;
  [key: string]: any;
}

const dishToEmoji = (dish: Dish) => {
  const nameToEmoji = {
    味噌汁: "🍲",
    豚汁: "🍲",
    カレー: "🍛",
    卵: "🥚",
    ライス: "🍚",
    ポテト: "🥔",
    トンカツ: "🐷",
    魚: "🐟",
    サラダ: "🥗",
    チキン: "🐔",
    冷奴: "⬜️",
    納豆: "🫘",
  };
  for (const [key, value] of Object.entries(nameToEmoji)) {
    if (dish.name.includes(key)) {
      return value;
    }
  }

  switch (dish.category) {
    case "主菜":
      return "🍗";
    case "副菜":
      return "🥦";
    case "丼・カレー":
      return "🍛";
    case "麺類":
      return "🍜";
    case "デザート":
      return "🍨";
  }
};

const generateShareText = (meal?: Meal) => {
  return meal?.dishList
    .map((dish) => `${dishToEmoji(dish)} ${dish.name} ${dish.price}円`)
    .join("%0a")
    .concat("%0a", `計${meal.totalPrice}円%0a`, "%23オルタスガチャ%0a");
};

export default function ShareButton({
  url,
  meal,
  className,
  ...rest
}: ShareButtonProps) {
  return (
    <a
      className="share-button"
      href={`https://twitter.com/intent/tweet?text=${generateShareText(
        meal
      )}&url=${packageJson.homepage}`}
      {...rest}
    >
      <div className={`dishcard-name `}></div>
      結果をツイート
    </a>
  );
}
