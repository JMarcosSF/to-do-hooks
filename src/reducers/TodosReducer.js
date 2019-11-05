import { FETCH_TODOS, FETCH_TODOS_ERROR, FETCH_TODOS_SUCCESS } from "../actions/actionTypes";

export default (state = {todos: [], isFetching: false, errorMessage: ''}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, isFetching: true}
    case FETCH_TODOS_SUCCESS:
      return { ...state, todos: action.payload, isFetching: false };
    case FETCH_TODOS_ERROR:
      return { ...state, errorMessage: 'Failed To Load Tree Data From API', isFetching: false }
    default:
      return state;
  }
}