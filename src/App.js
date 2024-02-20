import './App.css';
import Container from './components/Container';
import Calculator from './components/Calculator';
import DatiFetch from './components/DatiFetch';
import HomeForm from './components/HomeForm';
import Counter from './components/Counter';

function App() {
  return (
  <div className="App">
  <h1 style={{'margin': '0', 'background': 'rgb(80 80 206)', 'padding': '10px 10px', 'color': 'white'}}>VARIE PROVE - ESERCIZI UTILIZZO BASE REACT</h1>
  <Container></Container>
  <Calculator></Calculator>
  <DatiFetch></DatiFetch>
  <HomeForm></HomeForm>
  <Counter></Counter>
  </div>
  );
}

export default App;