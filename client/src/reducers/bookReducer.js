import {FETCH_BOOKS, FETCH_BOOK,FETCH_WISHLIST} from '../actions/types';

const INITIAL_STATE = { myBooks:[], currentCart:[], currentBook:[] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, myBooks:action.payload };
    case FETCH_BOOK:
      return { ...state, currentBook:action.payload };
    case FETCH_WISHLIST:
      return { ...state, currentCart: action.payload };
    default:
      return state;
  }
}
