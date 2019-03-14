import React from 'react';
import './App.css';

import Person from './Person';
import { people } from './peopleArr';

const peopleMap = people.map((el, i) => {
  return <Person key={i} name={el} />
})

export default () => {
    return <div className="App">
        {peopleMap}
      </div>
}
