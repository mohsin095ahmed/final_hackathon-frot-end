import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import Home from "../Page/Home/Home.jsx"
import Categorise from "../Page/About/Catogories.jsx"
import Recipe from "../Page/Reciep/Recipe.jsx"
import Search from "../Page/Search/Search.jsx"
import SignUp from "../Page/UserStory/SignUp"
import SignIn from "../Page/UserStory/SiginIn"
import { useEffect, useState } from "react"
const AppRouter = () => {
  const [userData , setUserData] = useState(false)

  useEffect(
     ()=>{
      const isUser = localStorage.getItem("user-data")
      console.log("user--->", isUser)
      if(isUser){
          setUserData(true)
      }
     },[]

  )

  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={  userData  ?  <Home/> : <Navigate to={"/Signin"} />}/>
       <Route path="/categorise/:name" element={<Categorise/>}/>
       <Route path="/Recipe/:id" element={<Recipe/>}/>
       <Route path="/SearchMeal/:search" element={<Search></Search>}/>
       <Route path="/Signup" element={<SignUp/>}/>
       <Route path="/Signin" element ={ userData ? <Navigate to={"/"}/> : <SignIn/>}/>
     </Routes> 
    </BrowserRouter>
   
  )
}

export default AppRouter