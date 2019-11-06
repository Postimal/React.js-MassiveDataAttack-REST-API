import { FETCH_POSTS } from '../actions/types';
import { NEW_POST} from '../actions/types';
import { FETCH_MORE_POSTS} from '../actions/types';



const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
        console.log("saving");

      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    case FETCH_MORE_POSTS:
        console.log("saving more posts");
      return {
        ...state,
        items: action.payload
      }
    
    default:
      return state;
  }
}