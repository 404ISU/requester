import React, {useState} from 'react';
import axios from 'axios';

const RegisterOrganization=()=>{
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');


    const handleSubmit=async(e)=>{
        e.preventDefault();
        await axios.post('/api/orgainzations/register', {name, email, password});
        alert('Организация зарегистрирована');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Имя" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' placeholder='Пароль' value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            <button type='submit'>Регистрация</button>
        </form>
    );
};

export default RegisterOrganization;