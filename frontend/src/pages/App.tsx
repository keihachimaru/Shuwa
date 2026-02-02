import '@/styles/App.css'
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";

function App() {
  const [theme] = useState<"light" | "dark">("light");
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/carta" element={<Menu />}></Route>
    </Routes>
  )
}

export default App
