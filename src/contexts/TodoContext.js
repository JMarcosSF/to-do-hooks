import React, { useReducer } from 'react';
import TodosReducer from '../reducers/TodosReducer';

const TodoCTX = React.createContext();

export {TodoCTX}

export default function Store(props) {

  const stateHook = useReducer(TodosReducer, {todos: [], isFetching: false, errorMessage: ''});

  return (
    <TodoCTX.Provider value={stateHook}>
      { props.children }
    </TodoCTX.Provider>
  )
}