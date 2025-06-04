import { useNavigate } from "react-router-dom";
import GachaButton from "../components/GachaButton";
import Footer from "../components/Footer";
import Characters from "../components/Characters";

export default function Home() {
  const navigate = useNavigate();
  const navigateToResult = (price: number) => {
    navigate(`/result/${price}`);
  };
  return (
    <div className="container">
      <h1 style={{ marginTop: "32px" }}>オルタスガチャ</h1>
      <GachaButton
        price={500}
        onClick={() => navigateToResult(500)}
        style={{ width: "80vw", maxWidth: "600px" }}
      />
      <GachaButton
        price={650}
        onClick={() => navigateToResult(650)}
        style={{ width: "80vw", maxWidth: "600px" }}
      />
      <GachaButton
        price={1000}
        onClick={() => navigateToResult(1000)}
        style={{ width: "80vw", maxWidth: "600px" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {/* <Characters /> */}
        {/* <Footer style={{ width: "95vw", maxWidth: "800px" }} /> */}
      </div>
    </div>
  );
}
