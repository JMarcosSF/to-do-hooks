import React, { useState, useEffect } from 'react';
import TodosList from './components/TodosList';
import TodoContext from './contexts/TodoContext';

function App() {

  const [name, setName] = useState('');

  useEffect(() => {
    setName('Paco');
  }, [])


  return (
    <TodoContext>
      <div className="App">
        <div>
          Hello State: { name }
          <TodosList/>
        </div>
      </div>
    </TodoContext>
  );
}

export default App;
