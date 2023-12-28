"use client"
import React, { useState, useEffect, useRef } from 'react';
import Password from './Password';


export default function NewPassword() {
    const [password, setPassword] = useState('');
    const [previous, setPrevious] = useState<string[]>([]);
    const [prontos, setProntos] = useState<string>('00');

    const isEmpty = password.includes(' ') || password === '';


    const handleClick = () => {
        setProntos(password);
        setPrevious(prev => [prontos, ...prev]);
        localStorage.setItem('anteriores', JSON.stringify(previous));

        setPassword('');
    }

    const deletePasswords = () => {
        setPrevious([]);
        localStorage.removeItem('anteriores')
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

            <div>

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


                <button
                    type='button'
                    className="btn btn-danger"
                    onClick={deletePasswords}
                >
                    Excluir
                </button>




                <div className='section'>

                    <div className='container'>
                        <h1 className='ready'>PRONTO</h1>

                        <Password senha={prontos.toLocaleUpperCase()} />

                    </div>


                    <div className='container'>


                        <h1>
                            ANTERIORES
                        </h1>
                        <h1 className='before-password'>{previous.join(', ').toLocaleUpperCase()}</h1>

                    </div>


                </div>

            </div>


        </div>
    )
}
