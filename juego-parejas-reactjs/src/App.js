import React, { Component} from 'react';
import Header from './Header';
import Tablero from './Tablero';
import './App.css';
import construirBaraja from './utils/construirBaraja';


const getEstadoInicial = () => {
  const baraja = construirBaraja();
  return {
    baraja,
    parejaSeleccionada: [],
    estaComparando: false
  }
}

class App extends Component {
  constructor (props){
    super(props);
    this.state = getEstadoInicial()
  }

  render () {
    return (
    <div className="App">
      <Header />
      <Tablero 
        baraja = {this.state.baraja}
        parejaSeleccionada = {this.state.parejaSeleccionada}
        SeleccionarCarta = {() => this.SeleccionarCarta(carta)}
      />
    </div>
    );    
  }

  SeleccionarCarta (carta) {
    if (
      this.state.estaComparando || 
      this.state.parejaSeleccionada.indexOf(carta) > -1 ||
      carta.fueAdivinada
    ) {
      return;
    }

    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
    this.setState({
      parejaSeleccionada
    }) 
  }

}

export default App;
