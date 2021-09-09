import React from 'react';
import "../Styles/Login.css";
import { Button } from '@material-ui/core';
import {auth,provider} from '../firebase';
import {useStateValue} from '../StateProvider';
import {actionTypes} from '../reducer';
import Logo from '../Assets/Images/logo-final@2x.png'

function Login() {

const [state, dispatch] = useStateValue();

const signIn = (e) => {
auth
.signInWithPopup(provider)
.then((result) => {
    console.log('setuser',result);
    dispatch({
        type: actionTypes.SET_USER,
        user: result.user
    })
    
})
.catch((error) => {
    alert(error.message)
})
}
    return (
        <div className='login'>
            <div className='login_container'>
            <img src={Logo} alt=''/>
        <h1>INVISIBLE <span>NODE</span></h1>
<Button onClick={signIn}>Sign In With Google</Button>
</div>
 </div>

    )
}

export default Login
