import React, {Component} from "react";

//los componentes funcionales no tienen estado
function EstadoAHijo(props){
    return(
        <div> {props.contadorHijo} </div>
    );
}

export default class Estado extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };

        /*setInterval(() => {
            // No se debe cambiar el estado de los componentes de esta manera
            //this.state.contador += 1 ;
            this.setState({
                contador:this.state.contador + 1,
            });
        }, 1000);*/
    }

    render(){
        return(
            <div>
                <h2> El State </h2>
                <p>{this.state.contador} </p>
                <EstadoAHijo contadorHijo= {this.state.contador}/>
            </div>
        );
    }
}
