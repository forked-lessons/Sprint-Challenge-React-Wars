import React from 'react';

const Dog = props => {
  return (
    <div>
      {/* <h2>Dogs!</h2> */}
      <img src={props.dog.status} />
    </div>
  );
};
export default Dog;
