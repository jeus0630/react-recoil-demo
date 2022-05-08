import { atom } from 'recoil';

type TodoType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const todosState = atom<TodoType[]>({
    key: 'todos',
    default: []
})

export default todosState;