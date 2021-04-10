import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from '../../firebase.config';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loginUser, setLoginUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSingIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const credential = result.credential;
                const token = credential.accessToken;
                const user = result.user;
                const { email, displayName } = user;
                setLoginUser({ email, displayName });
                history.replace(from);
                console.log(token);
                // ...
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);

            });
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <Button onClick={handleSingIn} className="info">Sing In Google</Button>
        </div>
    );
};

export default Login;