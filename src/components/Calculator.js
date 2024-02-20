import style from './Calculator.module.css'
import { useState} from 'react';

const Calculator = () => {

const [result, changeResult] = useState(0)
const [number, changeNumber] = useState('')
const [toggleResult, changeToggle] = useState(false)
const [stateOperator, changeOperator] = useState('')

// useEffect(() => {   
// },)

const viewNumber = (para) => {
if(number === ''){
changeNumber(para)  
}else if(toggleResult === true){
changeToggle(false)    
changeNumber(number + para) 
}else{
changeToggle(false) 
changeNumber(number + para)    
 } 
}


const Somma = () => {
changeOperator('+')
changeToggle(false) 
if(number !== '' && result === 0){
changeResult(parseInt(number))
changeNumber('')
}else if(number !== '' && result !== 0){ 
changeResult(result + parseInt(number))
changeNumber('')
}else{
return    
}
}

const Sottrai = () => {
changeOperator('-')
changeToggle(false) 
if(number !== '' && result === 0){
changeResult(parseInt(number))
changeNumber('')
}else if(number !== '' && result !== 0){
changeResult(result - parseInt(number))
changeNumber('')
}else{
return    
}
}


const Moltiplica = () => {
changeOperator('X')
changeToggle(false) 
if(number !== '' && result === 0){
changeResult(parseInt(number))
changeNumber('')
}else if(number !== '' && result !== 0){
changeResult(result * parseInt(number))
changeNumber('')
}else{
return    
}
}


const Dividi = () => {
changeOperator(':')
changeToggle(false) 
if(number !== '' && result === 0){
changeResult(parseInt(number))
changeNumber('')
}else if(number !== '' && result !== 0){
changeResult(result / parseInt(number))
changeNumber('')
}else{
return    
}
}


const Total = () => {
if(result !== 0 && toggleResult === false && number !== '' && stateOperator === '+'){
changeNumber('')
changeResult(result + parseInt(number))
}else if(result !== 0 && toggleResult === false && number !== '' && stateOperator === '-'){
changeNumber('')
changeResult(result - parseInt(number))
}else if(result !== 0 && toggleResult === false && number !== '' && stateOperator === 'X'){
changeNumber('')
changeResult(result * parseInt(number))
}else if(result !== 0 && toggleResult === false && number !== '' && stateOperator === ':'){
changeNumber('')
changeResult(result / parseInt(number))
}else{
return}
changeToggle(true)
}

const cancelValue = () => {
changeResult(0) 
changeNumber('')
changeToggle(false)
}


return(
<div style={{'background': 'ghostwhite'}}>
<div className={style.container}>
<h2 style={{'marginTop': '30px'}}>CALCOLATRICE - combinando EVENTI ed useState</h2>
<div className={style.containerCalculator}>
<div className={style.containerTasti}>
<h2>CALCULATOR</h2>
<div style={{'padding': '0 5px'}}>

<div className={style.result}>{ toggleResult ? result : number }</div>
</div>
<ul>
<li onClick={() => viewNumber('7')}>7</li>
<li onClick={() => viewNumber('8')}>8</li>
<li onClick={() => viewNumber('9')}>9</li>
<li onClick={Dividi}>:</li> 
<li onClick={() => viewNumber('4')}>4</li>
<li onClick={() => viewNumber('5')}>5</li>
<li onClick={() => viewNumber('6')}>6</li>
<li onClick={Moltiplica}>X</li> 
<li onClick={() => viewNumber('1')}>1</li>
<li onClick={() => viewNumber('2')}>2</li>
<li onClick={() => viewNumber('3')}>3</li>
<li onClick={Sottrai}>-</li>
<div className={style.totalUgual}>
<li onClick={() => viewNumber('0')}>0</li>
<li onClick={Total} style={{'margin': '0 0', 'width':'45.5%','marginBottom': '5px'}}>=</li>
<li onClick={Somma}>+</li>
</div>
</ul>
<label style={{'textAlign': 'center', 'marginTop': '10px'}} onClick={cancelValue}>cancella</label>
{/* <div>risultato{result}</div>
<div>number{number}</div> */}
</div>    
</div>
</div>
</div>
)};

export default Calculator;