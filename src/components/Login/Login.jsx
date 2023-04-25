import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.config';


const Login = () => {
    const [success, setSuccess] = useState('')
    const [wrongM, setWrongM] = useState('')
    const emailRef = useRef()

    const handelLoginForm = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log('f', email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                if (user.emailVerified === false) {
                    alert('please verified your eamil');
                }
                console.log(user);
                setSuccess('login')
            })
            .catch(error => {
                console.log(error.message);
                setWrongM(error.message)
            })
    }

    const handelPSReset = () => {
        sendPasswordResetEmail(auth, emailRef.current.value)
            .then(() => {
                alert('Chack your email')
            })
            .catch((e) => {
                console.log(e.message);
            })
    }

    return (
        <div className='w-50 mx-auto py-4'>
            <h3>Please Login</h3>
            <Form onSubmit={handelLoginForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Create an account <Link className="text-primary" to='/resister'>Resister</Link></p>
            <p className='text-success'>{success}</p>
            <p className='text-danger'>{wrongM}</p>
            <p onClick={handelPSReset} className=" btn btn-link">forgeten password</p>
        </div>
    );
};

export default Login;