import React from 'react';

import Person from './Person';
import { people } from './peopleArr';

const peopleMap = people.map((el, i) => {
  return <Person key={i} person={el} />;
});

export default () => {
  return (
    <>
      <h1>DM-21 Git as a Group assignment</h1>
      {peopleMap}
    </>
  );
};
