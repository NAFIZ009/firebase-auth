import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';



const Login = () => {
    const [logined,setLogined]=useState("");
    const auth=getAuth(app);
    const submitFun=e=>{
        e.preventDefault();
        const form=e.target;
        const mail=form.mail.value;
        const password = form.pass.value;
        signInWithEmailAndPassword(auth,mail,password)
            .then((res)=>{
                setLogined("Successfully logged in");
                form.reset();
            })
            .catch((err)=>{console.log(err)});
    }

    return (
        <div>
        <Form className='w-50 mx-auto' onSubmit={submitFun}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='mail' placeholder="Enter Email" />
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='pass' placeholder="Password" />
                </Form.Group>
                {
                    logined&&<div className='text-success'>{logined}</div>
                }
        <Button variant="primary" type="submit">
            Login
        </Button>
        <p><small>Not Register yet. <Link to='/register'>Register Now</Link></small></p>
        </Form>
        </div>
    );
};

export default Login;