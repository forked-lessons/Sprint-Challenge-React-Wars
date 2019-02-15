import React from 'react';
import Character from '../Character/Character';
import './StarWars.css';
function CharacterList(props) {
  return (
    <section className="character-list">
      {props.character.map(character => (
        <Character character={character} key={character.created} />
      ))}
    </section>
  );
}
export default CharacterList;
