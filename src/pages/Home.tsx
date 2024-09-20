import { useNavigate } from "react-router-dom"
import GachaButton from "../components/GachaButton"
import Footer from "../components/Footer"

export default function Home() {
    const navigate = useNavigate()
    const navigateToResult = (price: number) => {
        navigate(`/result/${price}`)
    }
    return (
        <div className="container">

            <h1>オルタスガチャ</h1>
            <GachaButton price={500} onClick={() => navigateToResult(500)} style={{ width: '80vw' }} />
            <GachaButton price={650} onClick={() => navigateToResult(650)} style={{ width: '80vw' }} />
            <GachaButton price={1000} onClick={() => navigateToResult(1000)} style={{ width: '80vw' }} />
            <Footer />
        </div>
    )
}