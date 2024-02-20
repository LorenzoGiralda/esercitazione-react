import { useState, useEffect, useCallback } from "react";
import style from './DatiFetch.module.css'

const DatiFetch = () => {

const [stateCocktail, changeStateCocktail] =  useState([])
const [stateCaricamento, changeCaricamento] = useState('')
const [stateInput, changeInput] = useState()


const fetchCocktail = useCallback(async() => {
changeCaricamento('Caricamento in corso')
const response = await fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
if(!response.ok){
//..  
console.log('error') 
}else{

const data = await response.json()

changeStateCocktail(data.drinks.slice(0,12))

// console.log(data.results)
//console.log(data.drinks[0].strDrinkThumb)
}
changeCaricamento('')
},[])
 
 
useEffect(() => {
fetchCocktail()
 },[fetchCocktail])


const filtraInput = (event) => {
changeInput(event.target.value.toLowerCase())
console.log(stateInput)
}


let testoNoResult = ''
let filtraCocktail = stateCocktail
const filter = stateCocktail.filter(cocktail => cocktail.strDrink.toLowerCase().includes(stateInput))

if(stateInput !== undefined && filter.length > 0 ){
filtraCocktail = filter
}else if(stateInput !== undefined && filter.length === 0){
testoNoResult = 'nessun risultato trovato'
filtraCocktail = []
}else{
filtraCocktail = stateCocktail    
}




return(
<div style={{'background': 'rgb(241, 241, 241)'}}>
<div className={style.container}>
<h2 style={{'marginTop': '30px', 'width': '100%'}}>
CARICAMENTO e FILTRO DATI API cocktail <br></br> con http request - useEffect e useState</h2>
<div style={{'width':'100%', 'margin': '20px 10px'}}>
<button onClick={fetchCocktail}>Carica cocktail list</button>
{stateCocktail !== undefined ?
<div>
<h3 style={{'marginTop': '20px'}}>Filtra per nome</h3>
<input onChange={filtraInput} type="text"></input>    
</div> : '' 
}
<p>{stateCaricamento}</p>
<div>   
</div>
</div> 

{filtraCocktail.map( cocktail =>
<div key={cocktail.idDrink} className={style.containerCard}>
<div className={style.card}>
<h3>{cocktail.strDrink}</h3> 
<div style={{'marginBottom': '10px'}}>
<img src={cocktail.strDrinkThumb} alt="cocktail"></img> 
</div> 
</div>
</div>
)}  
<p style={{'width': '100%'}}>{testoNoResult}</p>
</div>
</div>
)};

export default DatiFetch;