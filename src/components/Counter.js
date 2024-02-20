import styles from './Counter.module.css'

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByPayload, cancel } from '../store/CounterLogic';
import { changeToggle } from '../store/ToggleLogic';

const Counter = () => {

const StateCounter = useSelector((state) => state.counter.value)
const StateToggle = useSelector( (state) => state.toggle.value )
const dispatch = useDispatch()

return(
<div style={{'background':'rgb(241, 241, 241)'}}>
<h2>Contatore utilizzando Redux</h2>
{ StateToggle ?
<div className={styles.container}>
<div className={styles.counterCard}>
<div className={styles.counter}>
<h3>COUNTER</h3>
<div style={{'marginTop' : '10px'}}>
<button onClick={ () => dispatch(increment()) } className={styles.BtnCounter}>+</button> 
<button onClick={ () => dispatch(decrement()) }  className={styles.BtnCounter}>-</button>
<button onClick={ () => dispatch(incrementByPayload(5)) }  className={styles.BtnCounter}>+5</button>  
</div>
<div style={{'marginTop' : '10px'}}>Result</div>
<div className={styles.result}>{StateCounter}</div>
<p style={{'cursor': 'pointer'}} onClick={ () => dispatch(cancel()) }>Reset counter</p>
</div>
</div>  
</div>
: '' }
<button className={styles.BtnCounterToggle} onClick={ () => dispatch(changeToggle())}>
{ !StateToggle ? 'Mostra' : 'Nascondi' } Contatore</button>
</div>
)}

export default Counter;