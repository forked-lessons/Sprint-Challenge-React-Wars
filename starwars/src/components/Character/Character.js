import React from 'react';
import './Character.css';
const Character = props => {
  return (
    <section className="character-card">
      <h2>{props.character.name}</h2>
      <section className="columns">
        <div className="left-column">
          <p>
            <strong>Birth Year:</strong>
            {props.character.birth_year}
          </p>
          <p>
            <strong>Created:</strong>
            {props.character.created}
          </p>
          <p>
            <strong>Edited</strong>
            {props.character.edited}
          </p>
        </div>
        <div className="right-column">
          <p>
            <strong>Eye Color:</strong>
            {props.character.eye_color}
          </p>
          {/* <p>
        <strong />
        {props.character.films}
      </p> */}
          <p>
            <strong>Gender:</strong>
            {props.character.gender}
          </p>
          <p>
            <strong>Hair Color:</strong>
            {props.character.hair_color}
          </p>
          <p>
            <strong>Height</strong>
            {props.character.height}
          </p>
          {/* <p>
        <strong />
        {props.character.homeworld}
      </p> */}
          <p>
            <strong>Mass:</strong>
            {props.character.mass}
          </p>
          <p>
            <strong>Skin Color:</strong>
            {props.character.skin_color}
          </p>
          {/* <p>
        <strong />
        {props.character.starships}
      </p> */}
          {/* <img src={props.character.url} alt={props.character.first_name} /> */}
          {/* <p>
        <strong />
        {props.character.vehicles}
      </p> */}
        </div>
      </section>
    </section>
  );
};
export default Character;
