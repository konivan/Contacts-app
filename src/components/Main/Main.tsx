import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../Hooks/useTypeSelector';
import EmployeeCard from '../EmployeeCard/Employee';
import './Main.css';
import { addItem } from '../../store/state/actions';

const Main:FC = () => {

  const content = useTypeSelector(state => state.content);
  const dispatch = useDispatch();
  const [bdValue, setbdValue] = useState('');
  const [phoneValue, setphoneValue] = useState('');
  const [positionValue, setpositionValue] = useState('');
  const [nameValue, setnameValue] = useState('');

  const addHandler = (name: string, bd: string, phone: string, position :string) => {
    if (name && bd && phone && position !== null) {
      dispatch(addItem(name, bd, phone, position));
    } else alert('Заполните поля!');
      setbdValue('');
      setnameValue('');
      setphoneValue('');
      setpositionValue('');
  }

  function handleChangeName(event: React.FormEvent<HTMLInputElement>) {
    setnameValue(event.currentTarget.value);
  }

  function handleChangeBd(event: React.FormEvent<HTMLInputElement>) {
    setbdValue(event.currentTarget.value);
  }

  function handleChangePhone(event: React.FormEvent<HTMLInputElement>) {
    setphoneValue(event.currentTarget.value);
  }

  function handleChangePosition(event: React.FormEvent<HTMLInputElement>) {
    setpositionValue(event.currentTarget.value);
  }

  return (
    <div className='main-container'>
      <div className="main-card">
        <div className="main-card-info">
          <span>ФИО: </span>
          <input value={nameValue} onChange={handleChangeName}></input>
          <br></br>
          <span>Дата рождения: </span>
          <input value={bdValue} onChange={handleChangeBd}></input>
          <br></br>
          <span>Телефон: </span>
          <input value={phoneValue} onChange={handleChangePhone}></input>
          <br></br>
          <span>Должность: </span>
          <input value={positionValue} onChange={handleChangePosition}></input>
          <br></br>
        </div>
        <button
          className="main-add-button"
          onClick={() =>
            addHandler(nameValue, bdValue, phoneValue, positionValue)
          }
        >
          Добавить контакт
        </button>
      </div>
      <div className="main">
        <div className="main-content">
          {content.map((item) => (
            <EmployeeCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;