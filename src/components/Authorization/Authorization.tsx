import './Authorization.css';
import React, { FC, useState } from 'react';
import { useTypeSelector } from '../../Hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { authorization } from '../../store/state/actions';
import { useNavigate } from 'react-router-dom';

const Authorization:FC = () => {

  const auth = useTypeSelector(state => state.auth);
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const authHandler = (login: string, password: string) => {
    dispatch(authorization(login, password));
    return navigate(auth[2], {replace:true});
  }

  function handleChangeLogin(event: React.FormEvent<HTMLInputElement>) {
    setLogin(event.currentTarget.value);
  }

  function handleChangePassword(event: React.FormEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value);
  }

  return (
    <section className="main-wrapper">
      <div className="autorization-window">
        <h1 className='authorization-title'>Авторизация</h1>
        <div className="authorizations-inputs">
        <input
          placeholder="логин"
          onChange={handleChangeLogin}
          value={login}
          className="login-input"
        ></input>
        <input
          placeholder="пароль"
          onChange={handleChangePassword}
          value={password}
          className="password-input"
        ></input>
        </div>
        <button onClick={() => authHandler(login, password)} className="enter-btn">Войти</button>
      </div>
    </section>
  );
};

export default Authorization;