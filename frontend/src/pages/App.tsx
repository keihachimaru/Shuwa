import '@/styles/App.css'
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import Sakes from '@/pages/Sakes';
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/carta" element={<Menu />}></Route>
      <Route path="/sakes" element={<Sakes />}></Route>
    </Routes>
  )
}

export default App
