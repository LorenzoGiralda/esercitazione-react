import { useState } from 'react';

import style from './Container.module.css'
import Batigol from '../img/batigol.jpg';
import Card from './Card'

const Container = () => {

    const giocatori = [
        {nome: 'Francesco',
        cognome: 'Totti',
        img: 'https://images.nrc.nl/aeamOPGLYlqHf5Q9XdBWFE9yGeM=/1280x/filters:no_upscale()/s3/static.nrc.nl/bvhw/files/2016/09/data5183242.jpg',
        descrizione: 'Francesco è stato il capitano della Roma, considerato il campione assoluto.'
        },
        {nome: 'Gabriel Omar',
        cognome: 'Batistuta',
        img: Batigol,
        descrizione: 'Batistuta, detto anche il re leone è stato il bomber dello scudetto del 2001.'
        },
        {nome: 'Marco',
        cognome: 'Delvecchio',
        img: 'https://media.asroma.com/prod/images/original/815e7e58e73b-dps06522fdcgkk.jpg',
        descrizione: 'Marco è stato il miglior marcatore nei derby di tutti i tempi'
        },  
        ]

const [stateDescription, changeStateDescription]  = useState()

const [statePlayer, changeStatePlayer]  = useState(giocatori)

const showDetail = (para) => {
const filterPlayer =  giocatori.filter(giocatore => giocatore.nome === para)
changeStateDescription(filterPlayer)
changeStatePlayer(filterPlayer)
}

const returnDetail = () =>{
changeStatePlayer(giocatori)
changeStateDescription() 
}


return(
<div style={{'background': 'rgb(241, 241, 241)'}}>
<h2>UTILIZZO COMPONENTI • con PROPS per ricezione - evento ed useState</h2>
<div className={style.container}>

{ statePlayer.map(giocatore =>
 <Card
 key = {giocatore.nome}
 nome = {giocatore.nome}
 cognome = {giocatore.cognome}
 img = {giocatore.img}
 descrizione = {giocatore.descrizione}
 showDetail = {showDetail}
 statePlayer = {statePlayer}
 returnDetail = {returnDetail}
 ></Card>   
)
}

{ stateDescription === undefined ? '' :  stateDescription.map( stato =>
<p style={{'textAlign': 'center', 'width' : '100%'}}>{stato.descrizione}</p>
)

}
</div>
</div>
)};

export default Container