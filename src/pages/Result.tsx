import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuRepository, { Meal } from "../repositories/MenuRepository";
import DishCard from "../components/DishCard";
import SumPrice from "../components/SumPrice";
import ShareButton from "../components/ShareButton";
import RetryButton from "../components/RetryButton";
import Header from "../components/Header";

export default function Result() {
  // URLパラメータをnumber型に変換して取得
  const params = useParams<{ price?: string }>();
  const price = params.price ? Number(params.price) : 500;

  const [randomMeal, setRandomMeal] = useState<Meal | null>(null);
  const sumPrice =
    randomMeal?.dishList.reduce((sum, dish) => sum + dish.price, 0) || 0;

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate(`/`);
  };

  const menuRepository = MenuRepository.getInstance();

  const fetchMenu = async (price: number) => {
    const menu = await menuRepository.getRandomMeal(price);
    setRandomMeal(menu);
  };

  // 最初に一度だけ実行
  useEffect(() => {
    fetchMenu(price);
  }, [price]);

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header onBack={navigateToHome} />
      {randomMeal === null ? (
        <p>読み込み中...</p>
      ) : (
        randomMeal.dishList.map((dish, index) => (
          <DishCard
            key={index}
            dish={dish}
            style={{ width: "95vw", maxWidth: "800px" }}
          />
        ))
      )}
      <SumPrice price={sumPrice} style={{ width: "95vw", maxWidth: "800px" }} />
      <ShareButton meal={randomMeal || undefined} />
      <RetryButton
        price={price}
        onClick={() => fetchMenu(price)}
        style={{ width: "80vw", maxWidth: "600px" }}
      />
    </div>
  );
}
