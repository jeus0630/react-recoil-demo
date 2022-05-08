import { atom, selector } from 'recoil';

const inputState = atom<string>({
    key: 'input',
    default: '',
})

export const inputLengthState = selector<number>({
    key: 'inputLength',
    get: ({ get }) => {
        return get(inputState).length;
    }
})

export default inputState;