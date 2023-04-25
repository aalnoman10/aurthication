import React from 'react';

const ResisterBS = () => {

    const resisterForm = e => {
        e.preventDefault();

        console.log(e.target.password.value);
        console.log(e.target.email.value);
    }

    return (
        <div>
            <form onSubmit={resisterForm} className='p-2'>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="password" />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ResisterBS;