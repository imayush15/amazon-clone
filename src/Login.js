import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import auth from './firebase'

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            // created User and Logged In, redirect to home page
            history.push("/");
        })
    }

    const login = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            // redirect to Home Page!
            history.push("/");
        }).catch((e) => alert(e.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form className="login__form" action="">
                    <h5>E-mail</h5>
                    <input value={email} onChange={e => {
                        setEmail(e.target.value)
                    }} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={e => {
                        setPassword(e.target.value)
                    }} type="password"/>
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>

                <p>By Signing-in you agree to Amazon's Condition of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button onClick={register} className="login__signUpButton">Create an Account</button>
            </div>

        </div>
    )
}

export default Login
