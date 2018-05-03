import React, { Component}  from 'react';
import {initialState} from './initialState';
import {fetchWrapper, HEADER, BASE_URL} from './Actions/fetchWrapper';

console.log(initialState);


function fetchPosts () {
      return fetchWrapper(`${BASE_URL}/posts`, 'GET', HEADER)
          .then(result =>  {return result;})
}


const Console = () =>  {

    return (
      <div>
        {/* <pre> {JSON.stringify(initialState, null, 2)} </pre> */}
        <pre> {JSON.stringify(fetchPosts(), null, 2)} </pre>
      </div>
    );
}

export default Console;