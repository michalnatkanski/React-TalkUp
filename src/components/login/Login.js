import { Button } from '@mui/material';
import React from 'react'
import { LoginContainer, LoginInnerContainer } from './Login.styles';
import logo from '../../assets/images/logo.png';
import { auth, provider } from '../../firebase';

const Login = () => {

    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(error => alert(error.message));
    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src={logo} alt='talk up logo' />
                <h1> Sign in to the TalkUp</h1>
                <Button onClick={signIn}>Sign in with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login;