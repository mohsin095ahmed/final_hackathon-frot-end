import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
//import RecipePage from '../../components/Recipe/RecipePage'
import { lazy, Suspense } from 'react'
import SearchAppBar from '../../components/Appbar/AppBar'
const RecipePage = lazy(()=>import('../../components/Recipe/RecipePage'))
const Recipe = () => {
    const [meal, setMeal] = useState({})
    const {id}= useParams()
    const navigate = useNavigate()
    useEffect(()=>{
       axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
       .then(res => setMeal(res.data.meals[0]))
       .catch(err => console.log(err))
    },[])
    const searchRecpie = (value)=>{
      navigate(`/SearchMeal/${value}`)
   }
  return (
    <>
    <SearchAppBar searchRecpie={searchRecpie}/>
    <Suspense fallback={<div>please Wait.....</div>}>
        <RecipePage meal={meal}/>
    </Suspense>
    
    </>
    
  )
}

export default Recipe