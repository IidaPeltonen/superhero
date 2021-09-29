import React from 'react'

export default function Detail(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.powerstats.intelligence}</h1>
            <h1>{props.powerstats.strength}</h1>
            <h1>{props.powerstats.speed}</h1>
            <h1>{props.powerstats.durability}</h1>
            <h1>{props.powerstats.power}</h1>
            <h1>{props.powerstats.combat}</h1>
            <h1>{props.biography['full-name']}</h1>
            <h1>{props.biography['alter-egos']}</h1>
            <h1>{props.biography.aliases}</h1>
            <h1>{props.biography['place-of-birth']}</h1>
            <h1>{props.biography['first-appearance']}</h1>
            <h1>{props.biography.publisher}</h1>
            <h1>{props.biography.alignment}</h1>
            <h1>{props.appearance.gender}</h1>
            <h1>{props.appearance.race}</h1>
            <h1>{props.appearance.height}</h1>
            <h1>{props.appearance.weight}</h1>
            <h1>{props.appearance['eye-color']}</h1>
            <h1>{props.appearance['hair-color']}</h1>
            <h1>{props.work.occupation}</h1>
            <h1>{props.work.base}</h1>
            <h1>{props.connections['group-affiliation']}</h1>
            <h1>{props.image.url}</h1>
            <a href="#" onClick={props.close}>Back to news</a>
        </div>
    )
}