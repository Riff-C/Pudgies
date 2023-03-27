import React from 'react';
import './navigation.css';

function Navigation({ signUp, toggleSignUp }) {
    function handleSignUp() {
        toggleSignUp(signUp)
    }

    

    return (
        <nav className='nav'>
            { signUp ? <p className='buttons' onClick={handleSignUp}>Log in</p>
                : <p className='buttons' onClick={handleSignUp}>Sign up</p>
            }
        </nav>
    )
}

export default Navigation
