import { FETCH_POSTS} from './types';
import { NEW_POST} from './types';
import { FETCH_MORE_POSTS} from './types';






export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts.slice(0,8)
        })
      );
  };

  export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post =>  dispatch({
      type: NEW_POST,
      payload: post
    }))
  };


  export const fetchMorePosts = (postsLength) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: FETCH_MORE_POSTS,
          payload: posts.slice(0,postsLength + 8)
        })
      );
  };

  
    
