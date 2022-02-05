import React from 'react';

import Button from '../button/button';

// zona de redux
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { registerWithTypeAction } from '../../redux/Ducks/authDuck';

// zona de formulario
import { useForm } from 'react-hook-form';

// manejo de las fechas
// import {MobileDatePicker, LocalizationProvider} from '@mui/lab';
// import DateAdapter from '@mui/lab/AdapterDateFns';

// importaciones de mui
import { TextField } from '@mui/material';

const RegisterClient = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm();

  //zona de manejo de la fecha
  const [date, setDate] = React.useState(new Date());

  const handleChange = (newDate) => {
    setDate(newDate);
  };

  // funcion que recibe el resultado del formulario
  const registerSubmit = (data) => {
    dispatch(registerWithTypeAction(data, 'Client'))
  }

  return (
    <div className='ui form'>
      <form onSubmit={handleSubmit(registerSubmit)}>
        <h1 className="regtitle">Registration Form</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          
          <div className='field'>
            <label>Identification</label>
            <br/>
            <input 
              type='text' 
              name='identification' 
              //placeholder='Name' 
              {...register("identification", {required:'identification is required'})}/>
          </div>
          
          <div className='field'>
            <label>Username</label>
            <br/>
            <input 
              type='text' 
              name='username' 
              //placeholder='Name' 
              {...register("username", {required:'username is required'})}/>
          </div>

          <div className='field'>
            <label>Email</label>
            <br/>
            <input 
              type='text' 
              name='email' 
              //placeholder='Name' 
              {...register("email", {required:'email is required'})}/>
          </div>

          <div className='field'>
            <label>Phone</label>
            <br/>
            <input 
              type='number' 
              name='phone' 
              //placeholder='Name' 
              {...register("phone", {required:'phone is required'})}/>
          </div>


          <div className='field'>
            <label>Password</label>
            <br/>
            <input 
              type='password' 
              name='password' 
              //placeholder='Name' 
              {...register("password", {required:'password is required'})}/>
          </div>
          
          <div className='field'>
            <label>Name</label>
            <br/>
            <input 
              type='text' 
              name='name' 
              //placeholder='Name' 
              {...register("name", {required: 'Name is required'})}/>
          </div>
          
          <div className='field'>
            <label>Surname</label>
            <br/>
            <input 
              type='text' 
              name='surename' 
              //placeholder='Name' 
              {...register("surname", {required: 'Name is required'})}/>
          </div>
          
          <div className='field'>
            <label>Adress</label>
            <br/>
            <input 
              type='text' 
              name='address' 
              //placeholder='Name' 
              {...register("address")}/>
          </div>

        </div>
        <br/>
        <br/>
        <div class="form-button">
          <Button variant="quaternary">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterClient;


