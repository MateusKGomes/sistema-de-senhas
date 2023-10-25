"use client"
import React, { useState, useEffect } from 'react';
import Password from './Password';

export default function NewPassword() {
    const [password, setPassword] = useState('00');
    const [previous, setPrevious] = useState<string[]>([]);
    const [prontos, setProntos] = useState<string>('0');




    const handleClick = () => {
        setProntos(password)

        setPrevious(prev => [...prev, prontos]);
    }


    return (
        <div>

            <label htmlFor="Senha">
                <input
                    type="text"
                    placeholder='Nova senha'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </label>

            <button onClick={handleClick}>
                Adicionar
            </button>


            <h1>PRONTOS</h1>

            <Password senha={prontos} />


            <h1>
                Anteriores: {previous.join(', ')}
            </h1>
        </div>
    )
}
