import React, {useState} from "react";

export default function Formularios() {
    const [form, setForm] = useState({});

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleChecked = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        alert("El formulario se ha enviado");
    }

    return (
        <>
            <h2> Formularios </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    value={form.nombre} 
                    onChange={handleChange}
                />
                <p>Elige tu Sabor JS Favorito</p>
                <br />
                <input 
                    type="radio" 
                    id="vanilla" 
                    name="sabor" 
                    value="vanilla" 
                    onChange={handleChange}
                    defaultChecked
                />
                <label htmlFor="vanilla">Vanilla</label>
                <br />
                <input 
                    type="radio" 
                    id="react" 
                    name="sabor" 
                    value="react"
                    onChange={handleChange}
                /> 
                <label htmlFor="react">React</label>
                <br />
                <input 
                    type="radio" 
                    id="angular" 
                    name="sabor" 
                    value="angular" 
                    onChange={handleChange}
                /> 
                <label htmlFor="angular">Angular</label>
                <br />
                <input 
                    type="radio" 
                    id="vue" 
                    name="sabor" 
                    value="vue" 
                    onChange={handleChange}
                />
                <label htmlFor="vue">Vue</label>
                <br />
                <input 
                    type="radio" 
                    id="svelte" 
                    name="sabor" 
                    value="svelte" 
                    onChange={handleChange}
                />
                <label htmlFor="svelte">Svelte</label>
                <p>Elige tu lengueaje de programación favorito</p>
                <select name="lengueaje" onChange={handleChange} defaultValue="js">
                    <option value=""> - </option>
                    <option value="js"> JavaScript </option>
                    <option value="php"> Php </option>
                    <option value="py"> Python </option>
                    <option value="go"> Go </option>
                    <option value="rb"> Ruby </option>
                </select>
                <br />
                <label htmlFor="terminos">Acepto términos y condiciones</label>
                <input 
                    type="checkbox" 
                    id="terminos" 
                    name="terminos"
                    onChange={handleChecked}/>
                <br />
                <input type="submit" />
            </form>
        </>
    );
}


