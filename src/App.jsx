import { Routes,Route } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"
import Home from "./pages/public/Home"
import Explore from "./pages/public/Explore"
import About from "./pages/public/About"
import Contact from "./pages/public/Contact"
import Register from "./pages/auth/Register"



const App = () => {
  return (
   <>
   <Routes>
      <Route  path = "/" element = {<MainLayout />} >
      <Route index element = {<Home />} />
      <Route path="/home" element = {<Home />} />
      <Route path="/explore" element = {<Explore />} />
      <Route path="/about" element = {<About />} />
      <Route path="/contact" element = {<Contact />} />
      </Route>
      <Route path="/register" element ={<Register />} />
   </Routes>
   </>
  )
}

export default App



