//import { SetMeal } from '@mui/icons-material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import SearchAppBar from '../../components/Appbar/AppBar';
import Cate from '../../components/Cate/Cate';

const Search = () => {
  const params = useParams();
  const navigate = useNavigate()
  const [meal, setMeal] = useState([])
    useEffect(()=>{
     if(params.search.length === 1){
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?f=${params.search}`).then(res => setMeal(res.data.meals)).catch(err=>console.err)
     }else if(params.search.length > 1 && params.search !== "random" ){
      axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.search}`).then(res => setMeal(res.data.meals)).catch(err=>console.err)
     }
     else{
      axios(`https://www.themealdb.com/api/json/v1/1/random.php`).then(res => setMeal(res.data.meals)).catch(err=>console.err)
     }
    }, [params.search])

    const searchRecpie = (value)=>{
      navigate(`/SearchMeal/${value}`)
   }
  return (
    <>
    
    
    <SearchAppBar searchRecpie={searchRecpie}/>
    <Cate meal={meal}/>
    </>
  )
}

export default Search