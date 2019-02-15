import React from 'react';
import Character from '../Character/Character';

function CharacterList(props) {
  return (
    <section>
      {props.character.map(character => (
        <Character character={character} key={character.created} />
      ))}
    </section>
  );
}
export default CharacterList;
