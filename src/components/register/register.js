import './register.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../button/button';

function Register() {
  const { register, handleSubmit, errors } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };
  console.log(errors)
  return (
    <div className='register'>
    <div className='container'>
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={ handleSubmit(onSubmit)}>
        <h1 className="regtitle">Registration Form</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          <div className='field'>
            <label>Username</label>
            <br/>
            <input 
              type='text' 
              name='username' 
              //placeholder='Username' 
              {...register("A", {required:'Username is required'})}/>
          </div>
          

          <br/>
          <div className='field'>
            <label>Email</label>
            <br/>
            <input 
              type='email' 
              name='email' 
              //placeholder='Email' 
              {...register("B", {required:'Email is required', pattern:{value:/^\S+@\S+$/i,message:'This is not valid email'}})}/>
          </div>
          

          <br/>
          <div className='field'>
            <label>Password</label>
            <br/>
            <input 
              type='password' 
              name='password' 
              //placeholder='Password' 
              {...register("C", {
                required:'Password is required', 
                minLength: {
                  value:4, 
                  message:'Password must be more than 4 characters',
                },
                maxLength: {
                  value:10, 
                  message:'Password cannot exceed more than 10 characters',
                },
              })}/>
          </div>
          <br/>
          <br/>
          <div class="form-button">
                <Button variant="quaternary">Submit</Button>
          </div>
        </div>
      </form>
    </div>
    </div>
);
}

export default Register;

// <p>{errors.username?.message}</p>
// <p>{errors.email?.message}</p>
// <p>{errors.password?.message}</p>