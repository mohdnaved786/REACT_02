import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import {Routes, Route} from "react-router-dom"
import Products from './Components/Products'

function App() {

  return (
    <>
   <Navbar />
   <Routes>
    <Route exact path="/" Component={Home}></Route>
    <Route exact path="/products" Component={Products}></Route>
   </Routes>
    </>
  )
}

export default App
