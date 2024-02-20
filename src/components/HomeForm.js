import { useState } from "react"
import FormContact from "./FormContact"
import style from './HomeForm.module.css'
import Profili from "./Profili"

const HomeForm = () => {

const [viewForm, stateViewForm] = useState(false)
const [datiForm, changeDatiForm] = useState([])


const changePage = (para) => {
stateViewForm(para)
}


const updateForm = (para) => {
if(datiForm.length === 0){
changeDatiForm(para)
}else{
const datiPara = {
id: para[0].id,
nome: para[0].nome,
cognome: para[0].cognome,
nascita: para[0].luogoNascita,
data: para[0].data,
indirizzo: para[0].indirizzo,
citta: para[0].citta,
provincia: para[0].provincia,
curriculum: para[0].curriculum,
lavoro: para[0].lavoro,
telefono: para[0].telefono,
mail: para[0].mail
}
changeDatiForm([...datiForm, datiPara])
}stateViewForm(true)
}


const cancellaBox = (para) => {

    const filtraBox = datiForm.filter(dato => dato.id !== para)
    changeDatiForm(filtraBox)

}


return(
<>
<div style={{'paddingTop': '30px', 'background': 'ghostwhite', 'padding': '0 30px'}}>
<h2>FORM <br></br> con validazione dati, conferma, aggiunta ed eventuale cancellazione nella sezione profili</h2>
{ viewForm ?
<button onClick={() => changePage(false)}
className={style.btnForm}>Compila il Form</button>
: datiForm.length > 0 ? <button onClick={() => changePage(true)}
className={style.btnForm}>Visualizza Profili registrati</button>
: ''}
</div>
{ !viewForm ?
<FormContact
updateForm = {updateForm}
></FormContact>
: <Profili
datiForm = {datiForm}
cancellaBox = {cancellaBox}
></Profili>
}
</>
)}

export default HomeForm;