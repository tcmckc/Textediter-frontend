import { useState } from 'react';
import authModel from '../models/auth';

export default function Login({setToken, setEmail}) {
    const [user, setUser] = useState({});

    console.log("user", user);

    function changeHandler(event) {
        let newObject = {};

        newObject[event.target.name] = event.target.value;

        setUser({...user, ...newObject});
    }

    async function register() {
        await authModel.register(user);
    }

    async function login() {
        const loginResult = await authModel.login(user);

        if(loginResult.data.token) {
            setToken(loginResult.data.token);
            setEmail(loginResult.data.email);
        }
    }

    return (
        <div className="auth-container">
            <h2>Login / Register</h2>

            <div className="auth-part">
                <label>E-mail</label>
                <input type="email" name="email" onChange={changeHandler} className="auth-input"/>
            </div>

            <div className="auth-part">
                <label>Password</label>
                <input type="password" name="password" onChange={changeHandler} className="auth-input"/>
            </div>

            <div className="auth-part">
                <button onClick={login}>Login</button>
                <button onClick={register}>Register</button>
            </div>

        </div>
    );
}