import React  from 'react';
import {initialState} from './Store/initialState';

const Console = () =>  {

    return (
      <div>
        <pre> {JSON.stringify(initialState, null, 2)} </pre>
      </div>
    );
}

export default Console;