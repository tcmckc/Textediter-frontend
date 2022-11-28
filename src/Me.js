import React, { useEffect, useState } from 'react';

const Me = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://me-api.jsramverk.se')
        .then(res => res.json())
        .then(res=> setMessage(res.description));
    });

    return (
        <main>
            <h1>Me</h1>
            <p>{message}</p>
        </main>
    );
};

export default Me;
