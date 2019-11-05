import { FETCH_POSTS} from './types';
import axios from "axios";




export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      );
  };

  // export const fetchPosts = () => dispatch => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then( res =>
  //       dispatch({
  //         type: FETCH_POSTS,
  //         payload: posts
  //       })
  //     );
  // };
    
