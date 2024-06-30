
import "./RecipePage.css"


const RecipePage = ({meal}) => {
   
    let count =1;
let arr = [];
for (const i in meal) {
    let inergadients = "";
    let messure = "";
    if(i.startsWith("strIngredient") && meal[i]){
        inergadients = meal[i];
        messure = meal[ `strMeasure` + count]
        count += 1;
        arr.push(`${inergadients} ${messure}`)

    }
}

let INERGADINTS = "INERGADINTS :";
//console.log(arr)
  return (
    <>

      {meal ?
      <div className='Rec'>
        <div className='parent_1'>
            <div className='image'>
                <img src={meal.strMealThumb} alt="" />
            </div>
            <div className='div-h1'>
              <h1>{meal.strMeal}</h1>
              <h2>{meal.strArea}</h2>
            </div>
            <div>
                <h2 className='iner'>{INERGADINTS}</h2>
                <ul className='ul-parent'>
                {
                    arr.map((a, index)=> (
                      <li className='child' key={index}>{a}</li>
                    ))
                }
                </ul>
                
            </div>
            <div>
                <h2 className='para'>RECIPE:</h2>
                <pre>
                    {meal.strInstructions}
                </pre>
                
            </div>
            <div className='btn'>
                <button><a href={meal.strYoutube} target="_blank">go to video</a></button>
            </div>
        </div>
      </div> :
      <div>
        lod
      </div>
    }
    
    
    </>
  )
}

export default RecipePage