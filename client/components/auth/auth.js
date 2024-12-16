import React, {useState} from "react";
import axios from 'axios';


const loginOrganization=()=>{
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response =await axios.post('/api/organization/login', {email, password});
        localStorage.setItem('token', response.data.token); //// Сохраните токен в локальном хранилище
        alert('Вы успешно авторизировались');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
            <input type="password" placeholder="
            Пароль" value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            <button type="submit">Авторизация</button>
        </form>
    );
};

export default loginOrganization;