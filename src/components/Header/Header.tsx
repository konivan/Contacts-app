import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../Hooks/useTypeSelector';
import './Header.css';
import { searchItem } from '../../store/state/actions';

const Header:FC = () => {

  const [value, setValue] = useState('');
  const state = useTypeSelector(state => state.content);
  const dispatch = useDispatch();

  const searchHandler = (value: string) => {
    dispatch(searchItem(value))
  }

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  return (
    <header className='header'>
      <form className='header-form'>
        <input className='header-input'
        value={value}
        onChange={handleChange}
        placeholder='Поиск по ФИО'
        type='search'/>
        <button className='search-btn' onClick={(event) => {
          event.preventDefault();
          searchHandler(value);
        }}>Поиск</button>
      </form>
    </header>
  );
};

export default Header;