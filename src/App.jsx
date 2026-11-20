import { Routes,Route } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"
import Home from "./pages/public/Home"
import Explore from "./pages/public/Explore"
import About from "./pages/public/About"
import Contact from "./pages/public/Contact"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"
import AddProperty from "./pages/host/AddProperty"
import ProtectedRoute from "./components/guards/ProtectedRoute"
import HostDashboard from "./pages/host/HostDashboard"
import MyProperties from "./pages/host/MyProperties"
import PropertyDetails from "./pages/host/PropertyDetails"



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
      <Route path ="/login" element = {<Login />} />
      <Route path="/add-property" element = {
        <ProtectedRoute allowedRoles={["host"]} >
           <AddProperty />
        </ProtectedRoute>
       
    } />
    <Route path="/host-Dashboard" element = {
              <ProtectedRoute allowedRoles={["host"]} >
                 <HostDashboard />
                 </ProtectedRoute>  
      } />
      <Route path="my-properties" element = {<MyProperties />} />
      <Route path="property-details/:id" element= {<PropertyDetails />} />
   </Routes>
   </>
  )
}

export default App



