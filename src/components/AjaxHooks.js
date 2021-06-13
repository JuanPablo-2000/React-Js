import React, { useState,useEffect } from 'react';

function Pokemon({avatar, name}){
    return(
        <figure>
            <img src={avatar} alt={name} />
            <figcaption> {name} </figcaption>
        </figure>
    );
}

export default function AjaxHooks() {
    const [pokemons, setPokemons] = useState([])

    /*useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            json.results.forEach((e) => {
                fetch(e.url)
                .then((r) => r.json())
                .then((json) => {
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default
                    };

                    setPokemons((pokemons) => [...pokemons, pokemon]);
                })
            })
        })
    }, [])*/

    useEffect(() => {
        const getPokemons = async (url) => {
            let r = await fetch(url),
            json = await r.json();

            json.results.forEach(async (e) => {
                let r = await fetch(e.url),
                json = await r.json();
                 
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                };

                setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        }
        getPokemons("https://pokeapi.co/api/v2/pokemon/");
    }, []);

    return(
        <>
            <h2>Peticiones Asincrona con Hooks</h2>
            {pokemons.length === 0 ? (
                <h3> Cargando... </h3>
            ) : (
            pokemons.map((el) => (
                <Pokemon key={el.id} name={el.name} avatar={el.avatar} />    
            ))
            )}
        </>
    );
}