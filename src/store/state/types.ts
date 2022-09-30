import { Dispatch, SetStateAction } from "react";

export enum actionTypes {
  AUTHORIZATION = 'AUTHORIZATION',
  SEARCH_BY_POSITION_AND_DIVISION = 'SEARCH_BY_POSITION_AND_DIVISION',
  STATE_CHANGE_ITEM = 'STATE_CHANGE_ITEM',
  STATE_DELETE_ITEM = 'STATE_DELETE_ITEM',
  STATE_ADD_ITEM = 'STATE_ADD_ITEM',
}

interface Authorization {
  type: actionTypes.AUTHORIZATION,
  payload: {login: string, password: string}
}

interface SearchContent {
  type: actionTypes.SEARCH_BY_POSITION_AND_DIVISION,
  payload: string,
}

interface StateChangeItem {
  type: actionTypes.STATE_CHANGE_ITEM,
  payload: { name: string, bd: string , phone: string, position: string, id: number},
}

interface StateDeleteItem {
  type: actionTypes.STATE_DELETE_ITEM,
  payload: number,
}

interface StateAddItem {
  type: actionTypes.STATE_ADD_ITEM,
  payload: {name: string, bd: string, phone: string, position: string}
}

export type TypeActionState = Authorization | SearchContent | StateChangeItem | StateAddItem | StateDeleteItem;

export interface StateItem {
  name: string,
  birth_date: string,
  phone: string,
  position: string,
  _id: number,
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>