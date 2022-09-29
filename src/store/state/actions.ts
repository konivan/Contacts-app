import { StateItem, actionTypes } from './types';

export const authorization = (login: string, password: string) => ({
  type: actionTypes.AUTHORIZATION,
  payload: {login, password}
})

export const searchItem = (value: string) => ({
  type: actionTypes.SEARCH_BY_POSITION_AND_DIVISION,
  payload: value,
})

export const changeItem = (name: string, bd: string, phone: string, position: string,  id: number) => ({
  type: actionTypes.STATE_CHANGE_ITEM,
  payload: { name, bd, phone, position, id}
})

export const deleteItem = (id: number) => ({
  type: actionTypes.STATE_DELETE_ITEM,
  payload: id,
})

export const addItem = (name: string, bd: string, phone: string, position :string) => ({
  type: actionTypes.STATE_ADD_ITEM,
  payload: {name, bd, phone, position}
})