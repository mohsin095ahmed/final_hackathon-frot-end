import React from 'react'
import "./Cate.css"
import {  NavLink } from 'react-router-dom'
function Cate({meal}) {


  return (
    <>
    <div className='parent'>
       {
        meal === null ? <div className='not'>RECIPE NOT FOUND</div> :
        meal && meal.map((r, index)=>(
         <div key={index} className='border content-1 '>
            <div className='img'>
                <img src={r.strMealThumb} alt="" />
            </div>
            <div className='data'>
              {
                r.strMeal.length > 55 ? <h2 className='h2'>{r.strMeal}</h2> : <h1 className='h1'>{r.strMeal}</h1>
              }
            
            <h2 className='area'>{r.strArea}</h2>
            <NavLink to={`/Recipe/${r.idMeal}`}>  <button> GO TO  RECIPES </button></NavLink>
            
            </div>
            
         </div>
        ))
       }

    </div>
    
    </>
  )
}

export default Cate