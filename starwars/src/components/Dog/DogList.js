import React from 'react';
import Dog from '../Dog/Dog';

function DogList(props) {
  return (
    <section className="dog-list">
      {props.dog.map(dog => (
        <Dog dog={dog.status} />
      ))}
      <h1>Dog List</h1>
    </section>
  );
}
export default DogList;
