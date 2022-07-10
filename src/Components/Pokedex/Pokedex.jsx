import React, { Component } from 'react';
import Pokecard from '../Pokecard/Pokecard';
import '../Pokedex/Pokedex.css'

class Pokedex extends Component {
    render() {
        let title
        if(this.props.isWinner) {
            title = <h1 className='Pokedex-winner'>WINNING HAND</h1>
        } else {
            title = <h1 className='Pokedex-loser'>LOSING HAND</h1>

        }
        return (
        <div className='Pokedex'>
            {title}
            <p>Total Experience: {this.props.exp}</p>
            <div className='Pokedex-cards'>
            {this.props.pokemon.map((p) => (
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
            ))}
            </div>
        </div>
        )
    }
}

export default Pokedex