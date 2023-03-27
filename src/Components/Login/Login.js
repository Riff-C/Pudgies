import React, { useState } from 'react'
import './login.css';
import Navigation from '../Navigation/Navigation';

function Login({ loading, toggleLoading, login, toggleLogin}) {
    const [signUp, setSignUp] = useState(false);

    function toggleSignUp () {
        let newSignUp = !signUp
        setSignUp(newSignUp);
    }

    function handleLogIn(url) {
        fetch(url)
            .then(toggleLoading(loading))
            .then(toggleLogin(login))
    }

    return (
        <div>
            <Navigation signUp={signUp} toggleSignUp={toggleSignUp}/>
            <div className='login'>
                <div className='inputs'>
                    { signUp ?
                        <h2>Sign Up</h2>
                        : <h2>Log In</h2>
                    }
                    { signUp ?
                        <div className='email'> 
                            <p>Email</p>
                            <input></input>
                        </div> : 
                        null
                    }
                    <p>Username</p>
                    <input></input>
                    <p>Password</p>
                    <input></input>
                    <button onClick={handleLogIn}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
