import styles from './card.module.css'


const Card = (props) => {
return(
<div className={styles.container}>
<div className={styles.card}>
<div style={{'padding': '0 10px'}}>
<label className={styles.resizeLabel}>{props.nome}</label>
<h3 className={styles.resizeTitle}>{props.cognome}</h3>
</div>
<div className={styles.containerImg}> 
<img className={styles.imgStyle} src={props.img} alt="foto"></img>
</div>
<div></div>
<div style={{'padding': '10px 10px', 'width': '100%'}}>
{props.statePlayer.length > 1 ?
<button className={styles.BtnRes} onClick={() => props.showDetail(props.nome)}>Scopri di più</button>
: <button onClick={props.returnDetail}>Torna indietro</button>
}
</div>
</div>
</div>
)};

export default Card;