import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth } from '../../firebase/firebase.config';

const ResisterRBS = () => {

    const [success, setSuccess] = useState('');
    const [vul, setVul] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log('f', email, password);

        //password Validation
        setVul('')
        setSuccess('')
        if (password.length < 6) {
            setVul('password to small')
            return
        } else if (!/(?=.*[A-Z])/.test(password)) {
            setVul('password will be a uppercase')
            return
        } else if (!/(?=.*[0-9])/.test(password)) {
            setVul('password will be a digit ')
            return
        } else if (!/(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/.test(password)) {
            setVul('password will be a special character ')
            return
        }

        console.log('s', email, password);

        //create new account
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                emailValidation(result.user)
                setSuccess('Successfully')
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    //email validation
    const emailValidation = user => {
        sendEmailVerification(user)
            .then(r => {
                console.log(user);
            })
            .catch(e => {

            })

    }

    return (
        <div className='mx-auto w-50'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className="text-success">{success}</p>
            <p className="text-danger">{vul}</p>
        </div>
    );
};

export default ResisterRBS;