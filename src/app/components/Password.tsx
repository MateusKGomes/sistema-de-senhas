"use client"
import React, { useState } from 'react'
import './title.css'

export default function Password(props: { senha: string | number }) {


    return (
        <div className='title'>

                <h1>{props.senha}</h1>
        </div>
    )
}
