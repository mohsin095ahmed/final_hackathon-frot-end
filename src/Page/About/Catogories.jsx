import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Cate from '../../components/Cate/Cate';
import SearchAppBar from '../../components/Appbar/AppBar';
const Categorise = () => {
  const [ meal , setMeal] = useState([])
const {name } = useParams();
const navigate = useNavigate()
//console.log(name)
  useEffect(()=>{
     axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
     .then(res => setMeal( res.data.meals))
     .catch(err=> console.log("err---->", err))
  },[])

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

export default Categorise