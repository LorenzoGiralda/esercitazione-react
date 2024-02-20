import style from './Profili.module.css'

const Profili = (props) => {

return(
<div style={{'background': 'ghostwhite'}}>
<div className={style.containerData}>
<h3 style={{'width': '100%', 'margin': '30px 0px'}}>Pagina profili aggiunti</h3>
{ props.datiForm.map(dato => 
<div className={style.CardData}>
<div className={style.CardBox}>
<div><strong>Nominativo:</strong> {dato.nome} {dato.cognome}</div>
<div><strong>Luogo e data di Nascita:</strong>{dato.nascita} {dato.data}</div> 
<div><strong>Residenza:</strong> {dato.indirizzo} {dato.citta} {dato.provincia}</div> 
<div><strong>Curriculum:</strong> {dato.curriculum}</div> 
<div><strong>Telefono:</strong> {dato.telefono}</div> 
<div><strong>E-mail: </strong>{dato.mail}</div>  
<div onClick={() => props.cancellaBox(dato.id)} style={{'marginTop':'10px', 'background': 'white',
'width': 'fit-content','padding' :'5px 5px', 'borderRadius' : '5px'}}>Cancella questo profilo</div> 
</div>
</div> )}
</div>
</div>
)}

export default Profili;