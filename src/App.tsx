import { useState } from 'react'
import './App.css'
import MenuRepository, {Meal} from './repositories/MenuRepository'
import GachaButton from './components/GachaButton'
import DishCard from './components/DishCard'
import ShareButton from './components/ShareButton'

enum Screen {
  First,
  Loading,
  Result
}

function App() {
  const [screen, setScreen] = useState<Screen>(Screen.First)
  const [randomMeal, setRandomMeal] = useState<Meal | null>(null)

  const menuRepository = MenuRepository.getInstance()

  const fetchMenu = async (price: number) => {
    if (screen === Screen.Loading) 
      return
    setScreen(Screen.Loading)
    try {
      setRandomMeal(await menuRepository.getRandomMeal(price))
    } catch (error) {
      console.error(error)
    } finally {
      setScreen(Screen.Result)
    }
  }

  return (
    <div className='container'>
      {
        screen === Screen.First && (
          <>
            <h1>オルタスガチャ</h1>
            <GachaButton price={500} onClick={() => fetchMenu(500)} style={{ width: '80vw' }} />
            <GachaButton price={650} onClick={() => fetchMenu(650)} style={{ width: '80vw' }} />
            <GachaButton price={1000} onClick={() => fetchMenu(1000)} style={{ width: '80vw' }} />
          </>
        ) || screen === Screen.Loading && (
          <p>Loading...</p>
        ) || screen === Screen.Result && (
          <>  
            {randomMeal?.dishList.map((dish, index) => (
              <DishCard key={index} dish={dish} style={{ width: '95vw' }} />
            ))}
            <ShareButton 
              url="" 
              text={randomMeal?.dishList.map(dish => dish.name + ' ' + dish.price + '円').join('%0A') || ""} 
              style={{width: '60px', height: '60px', position: 'fixed', bottom: '10px', right: '10px'}} 
            /> 
          </>
        )
      }
    </div>


    // <div className='container'>
    //   {
    //     screen === Screen.First && (
    //       <p>First</p>
    //     )
    //   }
    //   


    //   

    //   
    // </div>
  )

}

export default App
