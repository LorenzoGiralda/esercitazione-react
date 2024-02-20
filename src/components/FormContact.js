import { useState } from 'react';
import style from './FormConctact.module.css'

const FormContact = (props) => {

const [stateNome, changeNome] = useState('')
const [stateCognome, changeCognome] = useState('')
const [stateNascita, changeNascita] = useState('')
const [stateData, changeData] = useState('')
const [stateIndirizzo, changeIndirizzo] = useState('')
const [stateCitta, changeCitta] = useState('')
const [stateProvincia, changeProvincia] = useState('nessuno')
const [stateCurriculum, changeCurriculum] = useState('')
const [stateLavoro, changeLavoro] = useState('part')
const [stateTelefono, changeTelefono] = useState('')
const [stateMail, changeMail] = useState('')



// DISABILITARE IL BUTTON INVIO FORM CON USE EFFECT ed ALTRO STATO //

// const [disabledBtn, stateDisableBtn] = useState(true)

// useEffect(()=>{
// if(stateNome !== '' && stateCognome !== ''){
// stateDisableBtn(false)}else{
// stateDisableBtn(true)
// console.log('ciao')
// }},[stateNome, stateCognome])


const [stateForm, ChangeForm] = useState([])

///////////////////////////////////////////////////////
const [stateActiveNome, changeActiveNome] = useState(false)
const [stateActiveCognome, changeActiveCognome] = useState(false)
const [stateActiveNascita, changeActiveNascita] = useState(false)
const [stateActiveData, changeActiveData] = useState(false)
const [stateActiveIndirizzo, changeActiveIndirizzo] = useState(false)
const [stateActiveCitta, changeActiveCitta] = useState(false)
const [stateActiveProvincia, changeActiveProvincia] = useState(false)
const [stateActiveCurriculum, changeActiveCurriculum] = useState(false)
const [stateActiveTelefono, changeActiveTelefono] = useState(false)
const [stateActiveMail, changeActiveMail] = useState(false)

const [stateControlForm, changeControlForm] = useState(true)


const InvioForm = (event) => {
event.preventDefault()

const datiForm = {
id: Math.random(),
nome: stateNome,
cognome: stateCognome,
luogoNascita: stateNascita,
data: stateData.split("-").reverse().join("-"),
indirizzo: stateIndirizzo,
citta: stateCitta,
provincia: stateProvincia,
curriculum: stateCurriculum,
lavoro: stateLavoro,
telefono: stateTelefono,
mail: stateMail   
}
ChangeForm([datiForm])
changeControlForm(false)
changeCurriculum('')
}

const returnForm = () => {
changeControlForm(true)    
}


///////////////////////////////////////////////////////

const validateName = (event) => {
const evento = event.target.value
if(evento === ''){
changeActiveNome(true)
changeNome(evento)
}else{
changeActiveNome(false)
changeNome(evento)  
}}

const validateCognome = (event) => {
const evento = event.target.value
if(evento === ''){
changeActiveCognome(true)
changeCognome(evento)
}else{
changeActiveCognome(false)
changeCognome(evento)  
}}

const validateNascita = (event) => {
const evento = event.target.value
if(evento === ''){
changeActiveNascita(true)
changeNascita(evento)
}else{
changeActiveNascita(false)
changeNascita(evento)  
}}


const validateData = (event) => {
const evento = event.target.value
if(evento === ''){
changeActiveData(true)
changeData(evento)
}else{
// const ConvertDataItaliana = evento.split("-").reverse().join("-")  
changeActiveData(false)
changeData(evento)
}}


const validateIndirizzo = (event) => {
const evento = event.target.value
if(evento === ''){
changeActiveIndirizzo(true)
changeIndirizzo(evento)
}else{
changeActiveIndirizzo(false)
changeIndirizzo(evento)
}}


const validateCitta = (event) => {
const evento = event.target.value
if(evento === ''){
changeActiveCitta(true)
changeCitta(evento)
}else{
changeActiveCitta(false)
changeCitta(evento)
}}


const validateProvincia = (event) => {
const evento = event.target.value
console.log(evento)
if(evento === 'nessuno'){
changeActiveProvincia(true)
changeProvincia(evento)
}else{  
changeActiveProvincia(false)
changeProvincia(evento)
}}


const validateCurriculum = (event) => {
const evento = event.target.value
console.log(stateCurriculum)
console.log(evento)
if(evento === ''){
changeActiveCurriculum(true)
changeCurriculum(evento)
}else{  
changeActiveCurriculum(false)
changeCurriculum(evento)
}}


const validateTelefono = (event) => {
const evento = event.target.value
console.log(stateCurriculum)
console.log(evento)
if(evento === ''){
changeActiveTelefono(true)
changeTelefono(evento)
}else{  
changeActiveTelefono(false)
changeTelefono(evento)
}}


const validateMail = (event) => {
const evento = event.target.value
console.log(stateCurriculum)
console.log(evento)
if(evento === ''){
changeActiveMail(true)
changeMail(evento)
}else{  
changeActiveMail(false)
changeMail(evento)
}}


const cambiaRadioValue = (event) => {
const evento = event.target.value
changeLavoro(evento)
}


// DISABILITARE IL BTN SENZA UTILIZZO DI ALTRI STATI
// CAMBIANDO SOLAMENTE IL VALORE DELLA VARIABILE LET
// AL VERIFICARSI DI UNA CONDIZIONE AL CAMBIO DI STATI GIA PRESENTI

let disabledBtn = true

if(stateNome !== '' && stateCognome !== '' && stateNascita !== '' && stateData !== ''
&& stateIndirizzo !== '' && stateCitta !== '' && stateProvincia !== 'nessuno'
&& stateCurriculum !== '' && stateTelefono !== '' && stateMail !== ''){
disabledBtn = false
}



////////////////////////////////////////////////////////
return(
<div style={{'background': 'ghostwhite'}}>
<div className={style.container}>
{ stateControlForm ?
<form onSubmit={InvioForm}>
<h3 style={{'width':'100%', 'marginBottom': '20px'}}>COMPILA TUTTI I CAMPI ed INVIA LA TUA SCHEDA PROFESSIONALE</h3>
<div className={style.grid}>
<div className={style.inputBox}>
<label>Nome</label>
<input className={stateActiveNome ? style.active : ''}
onBlur={validateName}
type='text'  name='nome' defaultValue={stateNome}></input>
{stateActiveNome ? <label>Compila il campo!</label> : ''}
</div>
</div>  

<div className={style.grid}>
<div className={style.inputBox}>
<label>Cognome</label>
<input className={stateActiveCognome ? style.active : ''}
onBlur={validateCognome}
type='text' name='cognome' defaultValue={stateCognome}></input>
{stateActiveCognome ? <label>Compila il campo!</label> : ''}
</div>
</div> 

<div className={style.grid}>
<div className={style.inputBox}>
<label>Luogo di nascita</label>
<input className={stateActiveNascita ? style.active : ''}
onBlur={validateNascita}
type='text' name='nascita' defaultValue={stateNascita}></input>
{stateActiveNascita ? <label>Compila il campo!</label> : ''}
</div>
</div> 

<div className={style.grid}>
<div className={style.inputBox}>
<label>Data di nascita</label>
<input className={stateActiveData ? style.active : ''}
onBlur={validateData}
type='date' name='data' defaultValue={stateData}></input>
{stateActiveData ? <label>Seleziona una data!</label> : ''}
</div>
</div>

<div className={style.grid}>
<div className={style.inputBox}>
<label>Indirizzo</label>
<input className={stateActiveIndirizzo ? style.active : ''} 
onBlur={validateIndirizzo}
type='text' name='indirizzo' defaultValue={stateIndirizzo}></input>
{stateActiveIndirizzo ? <label>Compila il campo!</label> : ''}
</div>
</div>

<div className={style.classCitta}>
<div className={style.inputBox}>
<label>Città</label>
<input className={stateActiveCitta ? style.active : ''} 
onBlur={validateCitta}
type='text'  name='citta' defaultValue={stateCitta}></input>
{stateActiveCitta ? <label>Compila il campo!</label> : ''}
</div>
</div>

<div className={style.classProvincia}>
<div className={style.inputBox}>
<label>Provincia</label>
<select className={stateActiveProvincia ? style.active : ''} 
onBlur={validateProvincia}
name='provincia' defaultValue={stateProvincia}>
<option value='nessuno'>Seleziona</option>
<option value='Frosinone'>Frosinone</option>  
<option value='Viterbo'>Viterbo</option>  
<option value='Rieti'>Rieti</option>  
<option value='Latina'>Latina</option>      
</select>
{stateActiveProvincia ? <label>Seleziona una provincia</label> : ''}
</div>
</div> 


<div className={style.grid}>
<div className={style.inputBox}>
<label>Carica il tuo curriculum</label>
<input className={stateActiveCurriculum ? style.active : ''}
onBlur={validateCurriculum}
defaultValue={stateCurriculum} name='curriculum' accept="application/pdf" type='file' ></input>
{stateActiveCurriculum ? <label>Scegli un file</label> : ''}
</div>
</div>


<div className={style.resizeRadio}>
<div className={style.inputBox}>
<label>Orario lavoro desiderato</label>
<div className={style.radio}>
<div className={style.boxRadio}>
<label style={{'marginBottom' : '0px'}}>Part-time</label>
<input onChange={cambiaRadioValue} defaultChecked type='radio' name='lavoro' value='part'/>
</div>
<div style={{'marginLeft': '20px'}} className={style.boxRadio}>
<label style={{'marginBottom' : '0px'}}>Full-time</label>
<input onChange={cambiaRadioValue} type='radio' name='lavoro' value='full'/>    
</div>
</div>
</div>
</div>


<div className={style.grid}>
<div className={style.inputBox}>
<label>Telefono</label>
<input className={stateActiveTelefono ? style.active : ''}
onBlur={validateTelefono}
defaultValue={stateTelefono} name='tel' type='number'></input>
{stateActiveTelefono ? <label>Compila il campo!</label> : ''}
</div>
</div>


<div className={style.grid}>
<div className={style.inputBox}>
<label>E-mail</label>
<input className={stateActiveMail ? style.active : ''}
onBlur={validateMail}
defaultValue={stateMail} name='email' type='email' ></input>
{stateActiveMail ? <label>Compila il campo!</label> : ''}
</div>
</div>

<div style={{'width': '100%'}} className={style.grid}>
<button disabled={disabledBtn} type='submit'
className={disabledBtn ? style.btnDisabled : style.btnForm}>Invio</button>
</div>


</form>
: <div style={{'display':'flex', 'flexDirection': 'column', 'alignItems': 'center'}}>
<h2>Conferma i dati da inviare o torna indietro</h2>

{stateForm.map(form => 

<div key={form.id} className={style.BoxDiv}>

<div className={style.divBox}>
<strong style={{'marginRight': '10px'}}>Nome:</strong>
<div>{form.nome}</div></div>


<div className={style.divBox}>
<strong style={{'marginRight': '10px'}}>Cognome:</strong>
<div>{form.cognome}</div></div>

<div className={style.divBox}>
<strong style={{'marginRight': '10px'}}>Luogo di Nascita:</strong>
<div>{form.luogoNascita}</div></div>

<div className={style.divBox}>
<strong style={{'marginRight': '10px'}}>Data di nascita:</strong>
<div>{form.data}</div></div>

<div className={style.divBox}>
<strong style={{'marginRight': '10px'}}>Indirizzo:</strong>
<div>{form.indirizzo}</div></div>


<div className={style.divBox}>
<strong style={{'marginRight': '10px'}}>Città:</strong>
<div>{form.citta}</div></div>

<div className={style.divBox}>
<strong style={{'marginRight': '10px'}}>Provincia:</strong>
<div>{form.provincia}</div></div>

<div className={style.divBox}>
<strong style={{'marginRight': '10px'}}>Curriculum:</strong>
<div>{form.curriculum}</div></div>

<div className={style.divBox}>
<strong style={{'marginRight': '10px'}}>Disponibilità lavorativa:</strong>
<div>{form.lavoro}</div></div>

<div className={style.divBox}>
<strong style={{'marginRight': '10px'}}>Telefono:</strong>
<div>{form.telefono}</div></div>

<div className={style.divBox}>
<strong style={{'marginRight': '10px'}}>E-mail:</strong>
<div>{form.mail}</div></div>

</div>
)}
</div>
} 
{ stateControlForm ? '' :
<div style={{'display': 'flex', 'width' : '100%', 'paddingTop': '20px', 'justifyContent': 'center'}}>
<button style={{'marginRight': '10px'}} className={style.btnForm1} onClick={returnForm}>Torna indietro</button>
<button className={style.btnForm1} onClick={() => props.updateForm(stateForm)}>Registra il tuo profilo</button>
</div>
}
</div>
</div>
)}

export default FormContact;