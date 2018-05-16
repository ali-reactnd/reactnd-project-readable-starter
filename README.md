# Readable APP

Readable is a simple *content* and *comment* web application. Users will be able to 
post content to predefined categories, comment on their posts and others, and vote on 
post and comments. User's will also be able to edit or delete posts and comments. 

This repository includes the code for the front-end as well as the backend 
API Server that interacts with the front-end. 

To get started:

* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server`
* In another terminal window, install and run the front-end
    - `cd frontend`
    - `npm install`
    - `npm start`
    
## Notes
1. The application is anonymous, with no *authentication* or *authorization*. 
There are no user objects, and comments and posts accept any username/name for creating and editing.

2. The server supposrts a small, fixed number of categories that user can put posts into. 
The server does not have methods for creating/modifying/deleting these categories. 
If you wish to add to the categories, simply add your desired object to the Array `categories.js` 
in the provided server. 
Information about the API server and how to use it can be found in its [README file](api-server/README.md).


## Contributing

This is my submission for the final assessment project for Udacity's Redux 
Fundamentals course, developed by [React Training](https://reacttraining.com).
Therefore, I will not accept pull requests.