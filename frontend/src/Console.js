import React, { Component}  from 'react';
import {initialState} from './initialState';

console.log(initialState);

const Console = () =>  {
    return (
      <div>
        <pre> {JSON.stringify(initialState, null, 2)} </pre>
      </div>
    );
}

export default Console;