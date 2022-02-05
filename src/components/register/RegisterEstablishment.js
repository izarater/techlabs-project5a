import React from 'react';


import Button from '../button/button';

// zona de redux
import { useDispatch } from 'react-redux';
import { registerWithTypeAction } from '../../redux/Ducks/authDuck';
// import { useSelector } from 'react-redux';

// zona de formulario
import { useForm } from 'react-hook-form';



// // importaciones de mui
// import { TextField } from '@mui/material';

const RegisterEstablishment = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm();

  //zona de manejo de la fecha
  const [date, setDate] = React.useState(new Date());

  

  // funcion que recibe el resultado del formulario
  const registerSubmit = (data) => {
    
    dispatch(registerWithTypeAction(data, 'Establishment'))

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
            <label>Establishment name</label>
            <br/>
            <input 
              type='text' 
              name='name' 
              //placeholder='Name' 
              {...register("establishment_name", {required: 'establishment name is required'})}/>
          </div>
          
          <div className='field'>
            <label>Type of establishment</label>
            <br/>
            <input 
              type='text' 
              name='establishment_type' 
              //placeholder='Name' 
              {...register("establishment_type")}/>
          </div>
          
          <div className='field'>
            <label>City</label>
            <br/>
            <input 
              type='text' 
              name='city_id'
              disabled 
              //placeholder='Name' 
              {...register("city_id")}/>
          </div>
          
          <div className='field'>
            <label>District</label>
            <br/>
            <input 
              type='text' 
              disabled
              name='district' 
              //placeholder='Name' 
              {...register("district")}/>
          </div>

          <div className='field'>
            <label>Schedule</label>
            <br/>
            <input 
              type='text' 
              name='schedule' 
              disabled
              //placeholder='Name' 
              {...register("schedule")}/>
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

export default RegisterEstablishment;


