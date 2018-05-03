import React, { Component}  from 'react';
import {initialState} from './initialState';
import {fetchWrapper, HEADER, BASE_URL} from './Actions/fetchWrapper';
import { Post } from './Model';

console.log(initialState);


function fetchPosts () {
      return fetchWrapper(`${BASE_URL}/posts`, 'GET', HEADER)
          .then(posts =>  {
            
            console.log(posts);

            return posts;
          
          })
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