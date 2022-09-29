import { actionTypes, StateItem, TypeActionState } from './types';

const State: string[] = [
  'admin', 'password'
];


export const authorizationReducer = (state = State, action: TypeActionState) => {
  switch (action.type) {
    case actionTypes.AUTHORIZATION: {
      let { login, password } = action.payload;
      if (login !== State[0]) {
        return alert('Неправильный логин или пароль');
      } else if (password !== State[1]) {
        return alert('Неправильный логин или пароль');
      } return state.push('/contacts');
    }
    default:
      return state;
  }
}