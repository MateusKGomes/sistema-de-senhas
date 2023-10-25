"use client"
import React, { useState, useEffect, useRef } from 'react';
import Password from './Password';


export default function NewPassword() {
    const [password, setPassword] = useState('');
    const [previous, setPrevious] = useState<string[]>([]);
    const [prontos, setProntos] = useState<string>('000');

    const isEmpty = password === '';


    const handleClick = () => {
        setProntos(password);
        setPrevious(prev => [prontos, ...prev]);
        setPassword('');
        localStorage.setItem('anteriores', JSON.stringify(previous));
        
    }

    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {

            e.preventDefault();
            handleClick();
        }
    }

    useEffect(() => {
        const afterRefresh = JSON.parse(localStorage.getItem('anteriores') as any); 
        if (afterRefresh) {
            setPrevious(afterRefresh);
        }

        
    }, []);


    return (
        <div>

            <div className='container'>

                <label htmlFor="Senha">
                    <input
                        type="text"
                        placeholder='Nova senha'
                        value={password.toLocaleUpperCase()}
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        onChange={e => setPassword(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </label>

                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={handleClick}
                    disabled={isEmpty}
                    >
                    Adicionar
                </button>


                <h1>PRONTOS</h1>

                <Password senha={prontos.toLocaleUpperCase()} />




                <h1>
                    Anteriores
                </h1>
                <h1>{previous.join(', ').toLocaleUpperCase()}</h1>

            </div>
        </div>
    )
}
