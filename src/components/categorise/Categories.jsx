import React from 'react'
import "./Categories.css"
import {  NavLink } from 'react-router-dom'
function Categories({recipe}) {
  
  return (
    <>
    <div className='parent'>
       {
        
        recipe && recipe.map((r, index)=>(
         <div key={index} className='border content '  >
            <div className='img'>
                <img src={r.strCategoryThumb} alt="" />
            </div>
            <h1>{r.strCategory}</h1>
            
            <NavLink to={`/categorise/${r.strCategory}`}>  <button> GO TO  RECIPES </button></NavLink>
            
         </div>
        ))
       }

    </div>
    
    </>
  )
}

export default Categories