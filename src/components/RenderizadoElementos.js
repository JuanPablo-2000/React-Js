import React, {Component} from "react";
import data from "../helpers/Data.json";

function ElementoLista (props){
    return(
        <li>
            <a href={props.el.web} target="_blank" rel="noopener noreferrer"> {props.el.name} </a>
        </li>
    )
}

export default class RenderizadoElementos extends Component{
    constructor(props) {
        super(props);
        this.state = {
            season : ["Primavera","Verano","Otoño","Invierno"],
        }
    }


    render() {
        return(
            <div>
                <h2>RenderizadoElementos </h2>
                <h3> Estaciones del año </h3>
                <ol>
                    {
                        this.state.season.map((el, index) => <li key={index}> {el} </li>)
                    }
                </ol>
                <h3> Frameworks Frontend JavaScript</h3>
                <ul>
                    {
                        data.frameworks.map((el) => (
                        <ElementoLista key={el.id} el={el}/>))
                    }
                </ul>
            </div>
        );
    }
}