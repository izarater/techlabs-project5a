import './register.css';
import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Button from '../button/button';

import { useDispatch } from 'react-redux';
import { registerAction } from '../../redux/Ducks/authDuck';

//importando desde mui
import { Select, MenuItem, FormHelperText } from '@mui/material'

// importando las nuevas vistas de registros
import Beneficiary from './RegisterBeneficiary'
import Client from './RegisterClient'
import Establishment from './RegisterEstablishment'


import watch from 'redux-watch';
import store from '../../redux/createdStore';
import { useHistory } from 'react-router-dom'

function Register() {
  const dispatch = useDispatch()
  const history = useHistory()

  const { register, handleSubmit, errors } = useForm();
  const [userInfo, setUserInfo] = useState();

  const roles = useSelector(state => state.authentication.listRoles)
  // console.log(Object.values(roles))
  const [ rol, setRol ] = useState('')

  const changeRol = (event) => {
    console.log(event.target.value)
    setRol(event.target.value)
  }


  let w = watch(store.getState, 'authentication.userData')

  store.subscribe(w((newVal, oldVal, objectPath)=>{
    console.log(newVal)
    if(newVal ){ // validadno un login nuevo
      // setUserInfo(newVal)
      history.push('/')
      
    } else if(!newVal){
      console.log('No permitir navegacion')
    }
  }))

  const onSubmit = (data) => {
    // console.log('hola mundo')
    setUserInfo(data);
    dispatch(registerAction(data))
  };
  
  // console.log(errors)


  /**
   * Zona de variables nuevas por control de cambios
   */
  
  return (
    <div className='register'>
    <div className='container'>
      <label>Choose a type of user</label>
      <Select 
        label="Rol"  
        onChange={changeRol} 
        sx = {{minWidth: '60%',color: '#000000'}}
        //{...register("rol",{required: "Es necesario brindar el rol"})}
      >
            
        {
        
        roles && roles.map((role, key) => (
          
          <MenuItem key={key} value={role}>{role}</MenuItem>
        ))}

        
      </Select>
      
      <div>
        {
          rol == 'Establishment'? <Establishment></Establishment> : rol == 'Client'? <Client></Client> : rol == 'Beneficiary'?<Beneficiary></Beneficiary>:<div>Choose rol first</div>
        }
        {/* {(() => {
          // console.log(rol)
          switch (rol) {
            case "Establishment":   return <Establishment></Establishment>;
            case "Client": return <Client></Client>;
            case "Beneficiary":  return <Beneficiary></Beneficiary>;
            default:      return <div>Choose rol first</div>;
        }
        })()} */}
      </div>
      
      {/* <pre>{JSON.stringify(userInfo, undefined, 2)}</pre> */}
      {/* <form onSubmit={ handleSubmit(onSubmit)}>
        <h1 className="regtitle">Registration Form</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          <br/>
          <div className='field'>
            <label>Name</label>
            <br/>
            <input 
              type='text' 
              name='name' 
              //placeholder='Name' 
              {...register("name", {required:'Name is required'})}/>
            </div>

          <br/>
          <div className='field'>
            <label>Surname</label>
            <br/>
            <input 
              type='text' 
              name='surname' 
              //placeholder='Surname' 
              {...register("surname", {required:'Surname is required'})}/>
          </div>   

          <br/>
          <div className='field'>
            <label>Username</label>
            <br/>
            <input 
              type='text' 
              name='username' 
              //placeholder='Username' 
              {...register("username", {required:'Username is required'})}/>
          </div>
          

          <br/>
          <div className='field'>
            <label>Email</label>
            <br/>
            <input 
              type='email' 
              name='email' 
              //placeholder='Email' 
              {...register("email", {required:'Email is required', pattern:{value:/^\S+@\S+$/i,message:'This is not valid email'}})}/>
          </div>
          

          <br/>
          <div className='field'>
            <label>Password</label>
            <br/>
            <input 
              type='password' 
              name='password' 
              //placeholder='Password' 
              {...register("password", {
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
          <FormHelperText>Rol</FormHelperText>
          
          <br/>
          <br/>
          <div class="form-button">
                <Button variant="quaternary">Submit</Button>
          </div>
        </div>
      </form> */}
      
      
    </div>
    </div>
);
}

export default Register;

// <p>{errors.username?.message}</p>
// <p>{errors.email?.message}</p>
// <p>{errors.password?.message}</p>