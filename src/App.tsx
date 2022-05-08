import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import todosState from './state/todo';

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

  return (
    <div>
      {JSON.stringify(todos)}
    </div>
  )
}

export default App
