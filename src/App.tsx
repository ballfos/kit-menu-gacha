import { useState } from 'react'
import './App.css'
import MenuRepository, {Menu, Meal} from './repositories/MenuRepository'
import GachaButton from './components/GachaButton'

function App() {
  const [menu, setMenu] = useState<Menu | null>(null)
  const [randomMeal, setRandomMeal] = useState<Meal | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const menuRepository = MenuRepository.getInstance()

  const fetchMenu = async () => {
    if (isLoading) 
      return
    setIsLoading(true)
    try {
      setMenu(await menuRepository.getMenu())
      setRandomMeal(await menuRepository.getRandomMeal(500))
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <h1>Menu</h1>
      {isLoading ? <p>Loading...</p> : <pre>{JSON.stringify(menu?.dishList, null, 2)}</pre>}
      <GachaButton price={500} onClick={fetchMenu} style={{ width: '40vw' }} />
      <h2>Random Meal</h2>
      {isLoading ? <p>Loading...</p> : <pre>{JSON.stringify(randomMeal, null, 2)}</pre>}
      <h3>Last Fetch</h3>
      <p>{menu ? new Date(menu.cachedAt).toLocaleString() : 'Never'}</p>
      <h3>Expires At</h3>
      <p>{menu ? new Date(menu.expiresAt).toLocaleString() : 'Never'}</p>
    </div>
  )

}

export default App
