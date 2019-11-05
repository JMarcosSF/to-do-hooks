import React, { useContext, useEffect, useState } from 'react';
import {TodoCTX} from '../contexts/TodoContext';
import {FETCH_TODOS, FETCH_TODOS_SUCCESS, FETCH_TODOS_ERROR} from "../actions/actionTypes";
import todosApi from '../apis/todos';

import to from '../apis/to';

const TodosList = props => {

  const [appState, dispatch] = useContext(TodoCTX);
  const [todos, setTodos] = useState({ todos: [] });

  const fetchData = async () => {
    const [err, result] = await to(todosApi.get('/todos'));
    if(result) {
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: result.data });
    }

    if(err) {
      dispatch({ type: FETCH_TODOS_ERROR})
      console.log(err);
    }
  };

  useEffect(() => {
    dispatch({ type: FETCH_TODOS });
    setTimeout(() => {
      fetchData();
    }, 3000)
  }, []);

  if(appState.isFetching) {
    return <div>FETCHING!!!</div>
  }

  if(appState.todos) {
    return (
      <>
        <ul>
          {appState.todos.map(todo => {
            return (<li key={todo.id}>{ todo.title }</li>)
          })}
        </ul>
      </>
    )
  }

  return <div>hi there</div>

}

export default TodosList;