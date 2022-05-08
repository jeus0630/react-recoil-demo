import React from 'react';
import { useQuery } from 'react-query';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import todosState from './state/todo';
import inputState from './state/userInput';
import { inputLengthState } from './state/userInput';

const getTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data;
}

function App() {

  const { isLoading, isError, data } = useQuery<any, any>('todos', getTodos);
  const [todos, setTodos] = useRecoilState(todosState);

  if (isLoading) {
    <div>...Loading</div>
  }

  if (data) {
    setTodos(data);
  }

  const setInput = useSetRecoilState(inputState);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const inputLength = useRecoilValue(inputLengthState);

  return (
    <div>
      <input type="text" onChange={changeHandler} />
      <span>
        length: {inputLength}
      </span>
    </div>
  )
}

export default App
