import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.config';

const Resister = () => {
    const [success, setSuccess] = useState('');
    const [wrong, setWrong] = useState('');

    const handleForm = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        setSuccess('');
        setWrong('');

        //password validation
        if (password.length < 6) {
            setWrong('password to small')
            return
        } else if (!/(?=.*[A-Z])/.test(password)) {
            setWrong('password will be a uppercase')
            return
        } else if (!/(?=.*[0-9])/.test(password)) {
            setWrong('password will be a digit ')
            return
        } else if (!/(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/.test(password)) {
            setWrong('password will be a special character ')
            return
        }

        setSuccess('Processing');

        // create new account
        createUserWithEmailAndPassword(auth, email, password)
            .then(userNew => {
                const user = userNew.user;
                console.log(user);
                setSuccess('Create has been Successfully');

                sendVerification(user)
                profileUpdate(user, name)
            })
            .catch(error => {
                setSuccess('')
                console.error(error);
                setWrong(error.message);
            })
    }

    const sendVerification = user => {
        sendEmailVerification(user)
            .then(() => {
            })
            .catch((e) => {
                setWrong(e.message)
            })
    }

    const profileUpdate = (user, name) => {
        updateProfile(user, {
            displayName: name
        }).then(() => {
            alert('Profile updated!')
        }).catch((error) => {
            setWrong(error.message)
        });
    }

    return (
        <div>
            <h3>Please Resister</h3>
            <form onSubmit={handleForm}>
                <input type="text" id='name' placeholder='Name' required />
                <br />
                <br />
                <input type="email" id='email' placeholder='Email' required />
                <br />
                <br />
                <input type="password" id='password' placeholder='Password' required />
                <br />
                <br />
                <input type="submit" value='Resister' />
            </form>
            <p>Already have an account <Link className="text-primary" to='/login'>Login</Link></p>
            <p className="text-success">{success}</p>
            <p className="text-danger">{wrong}</p>
        </div>
    );
};

export default Resister;