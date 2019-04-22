import React from 'react';
import './Character.css';
const Character = props => {
  return (
    <section className="character-card">
      <h2 className="name">{props.character.name}</h2>
      <section className="columns">
        <div className="left-column">
          <p>
            <strong>Birth Year: </strong>
            {props.character.birth_year}
          </p>
          <p>
            <strong>Created: </strong>
            {props.character.created}
          </p>
          <p>
            <strong>Edited: </strong>
            {props.character.edited}
          </p>
          <p>
            <strong>Eye Color: </strong>
            {props.character.eye_color}
          </p>

          <p>
            <strong>Gender: </strong>
            {props.character.gender}
          </p>
        </div>

        <div className="right-column">
          <p>
            <strong>Hair Color: </strong>
            {props.character.hair_color}
          </p>
          <p>
            <strong>Height: </strong>
            {props.character.height}
          </p>

          <p>
            <strong>Mass: </strong>
            {props.character.mass}
          </p>
          <p>
            <strong>Skin Color: </strong>
            {props.character.skin_color}
          </p>
        </div>
      </section>
    </section>
  );
};
export default Character;
