import '@/styles/App.css'
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/carta" element={<Menu />}></Route>
    </Routes>
  )
}

export default App
