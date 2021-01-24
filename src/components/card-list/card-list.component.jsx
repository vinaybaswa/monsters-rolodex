import React from 'react';
import './card-list.css'

export const Cardlist = props => {
  return (
    <div className='card-list'>
      {props.monsters.map(monster => {
        return (
          <h1 key={monster.id}>{monster.name}</h1>
        )
      })}
    </div>)
}