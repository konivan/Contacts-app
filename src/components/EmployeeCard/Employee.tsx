import React, { FC, useState } from 'react';
import { StateItem } from '../../store/state/types';
import './Employee.css';
import { changeItem, deleteItem } from '../../store/state/actions';
import { useDispatch } from 'react-redux';

interface Props {
  item: StateItem,
}

const Employee:FC<Props> = ({item}) => {

  const dispatch = useDispatch();
  const [changes, setChanges] = useState(false);
  const [name, setName] = useState(item.name);
  const [bd, setBd] = useState(item.birth_date);
  const [phone, setPhone] = useState(item.phone);
  const [position, setPosition] = useState(item.position);


  const removeHandler = (item: number) => {
    dispatch(deleteItem(item));
  }

  const changeHandler = (
    name: string,
    bd: string,
    phone: string,
    position: string,
    id: number,
  ) => {
    setChanges(!changes);
    dispatch(changeItem(name, bd, phone, position, id));
  };

  const changeName = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  }

  const changeBd = (event: React.FormEvent<HTMLInputElement>) => {
    setBd(event.currentTarget.value);
  }

  const changePhone = (event: React.FormEvent<HTMLInputElement>) => {
    setPhone(event.currentTarget.value);
  }

  const changePosition = (event: React.FormEvent<HTMLInputElement>) => {
    setPosition(event.currentTarget.value);
  }

  return (
    <div className="card">
      <div className="card-info">
        <span>ФИО: </span>
        {changes === true ? (
          <input
            className="change-input"
            onChange={changeName}
            placeholder={item.name}></input>) : (<span>{item.name}</span>)}<br></br>
        <span>Дата рождения: </span>
        {changes === true ? (
          <input
            className="change-input"
            onChange={changeBd}
            placeholder={item.birth_date}></input>) : (<span>{item.birth_date}</span>)}<br></br>
        <span>Телефон: </span>
        {changes === true ? (
          <input
            className="change-input"
            onChange={changePhone}
            placeholder={item.phone}></input>) : (<span>{item.phone}</span>)}<br></br>
        <span>Должность: </span>
        {changes === true ? (
          <input
            className="change-input"
            onChange={changePosition}
            placeholder={item.position}></input>) : (<span>{item.position}</span>)}
      </div>
      <button className="delete-btn" onClick={() => removeHandler(item._id)}>
        Удалить
      </button>
      <button
        className="change-btn"
        onClick={() =>
          changeHandler(name, bd, phone, position, item._id)}>
        {changes === false ? "Изменить" : "Готово"}
      </button>
    </div>
  );
};

export default Employee;