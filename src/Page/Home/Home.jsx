import { useEffect, useState } from 'react'
//import './App.css'
import axios from 'axios';
import Categories from '../../components/categorise/Categories';
import SearchAppBar from '../../components/Appbar/AppBar';
import { useNavigate } from 'react-router-dom';
import { colors } from '@mui/material';
import { red } from '@mui/material/colors';

function Home() {
  const [recipe, setrecipe] = useState([]);
  const navigate = useNavigate()

 


useEffect(()=>{
   axios("https://www.themealdb.com/api/json/v1/1/categories.php").then( res => setrecipe(res.data.categories)).catch(err=> console.log(err))
        


},[])
       const searchRecpie = (value)=>{
        navigate(`/SearchMeal/${value}`)
       }
  return (
    <>
      {/* <SearchAppBar searchRecpie={searchRecpie}/> */}
      
<div>
  <h1>
    homehhh
  </h1>
</div>
 


 <button
 onClick={()=>{
    localStorage.removeItem("user-data")
 }}
 >

  remove
 </button>

    </>
  )
}

export default Home
