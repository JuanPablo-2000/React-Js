import React, { Component } from "react";

export default class Padre extends Component {
    state = {
        contador: 0,
    };

    //Comunicación entre un componente hijo y su padre
    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    render() {
        return(
            <>
                <h2> Comunicación entre Componentes </h2>
                <p> Contador <b>{this.state.contador}</b></p>
                {/*Comunicación entre un componente padre y su hijo*/}
                <Hijo mensaje="Mensaje para el componente hijo 1"/>
                <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el componente hijo 2"/>
            </>
        );
    }
}

//Comunicación entre un componente padre y su hijo
function Hijo (props){
    return (
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}>+</button>
        </>
    )
}