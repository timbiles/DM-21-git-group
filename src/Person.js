import React from 'react';

export default ({person}) => {
    return (
        <div style={personStyle}>
            <p>My name is <span style={personName}>{person.name}</span>.</p>
            <p>My weird fact is... {person.weirdFact}</p>
        </div>
    );
};

const personStyle = {
    boxShadow: '1px 1px 5px 1px grey',
    margin: '1em 2em',
    padding: '.25em'
  }

const personName = {
    fontWeight: '700'
}