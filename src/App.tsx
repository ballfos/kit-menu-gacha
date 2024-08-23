import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Result from './pages/Result'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result/:price' element={<Result />} />
      </Routes>
    </Router>
  )

}

export default App
