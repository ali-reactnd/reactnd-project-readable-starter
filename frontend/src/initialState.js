import {classToPlain} from "class-transformer";
import {Category, Post, Comment, ContentFactory} from './Model';

const categories = [new Category('react','react'), 
              new Category('redux','redux'), 
              new Category('udacity','udacity')];

const posts = [ new Post('8xf0y6ziyjabvozdd253nd', 1467166872634, 'Udacity is the best place to learn React', 'Everyone says so after all.', 'thingtwo', 'react', 6, false, 2),
          new Post('6ni6ok3ym7mf1p33lnez', 1468479767190, 'Learn Redux in 10 minutes!',
          'Just kidding. It takes more than 10 minutes to learn technology.', 'thingone', 'redux', -5, false, 0),
          ContentFactory.makeNewPost('Title of factory post','body of factory post', 'author of factory post','redux')
  ];

const comments = [new Comment('894tuq4ut84ut8v4t8wun89g', '8xf0y6ziyjabvozdd253nd', 1468166872634, 'Hi there! I am a COMMENT.', 'thingtwo', 6, false, false),
            new Comment('8tu4bsun805n8un48ve89', '8xf0y6ziyjabvozdd253nd', 1469479767190, 'Comments. Are. Cool.', 'thingone' -5, false, false),
        ContentFactory.makeNewComment('6ni6ok3ym7mf1p33lnez', "This comment is made by the factory method!", "Ali M") ]

export const initialState = {
    categories: classToPlain(categories),
    posts: classToPlain(posts),
    comments: classToPlain(comments)
};

