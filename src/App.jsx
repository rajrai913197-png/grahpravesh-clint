import { Routes,Route } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"
import Home from "./pages/public/Home"
import Explore from "./pages/public/Explore"


const App = () => {
  return (
   <>
   <Routes>
      <Route  path = "/" element = {<MainLayout />} >
      <Route index element = {<Home />} />
      <Route path="/home" element = {<Home />} />
      <Route path="/explore" element = {<Explore />} />

      </Route>
   </Routes>
   </>
  )
}

export default App



