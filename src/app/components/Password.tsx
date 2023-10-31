"use client"
import React, { useState } from 'react'
import './title.css'

export default function Password(props: { senha: string | number }) {


    return (
        <div>

                <h1 className='password'>{props.senha}</h1>
        </div>
    )
}
