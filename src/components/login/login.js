import './login.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../button/button';
import Alert from '@mui/material/Alert';



//importando redux y la acciona ejecutar
import { useDispatch, useSelector, } from 'react-redux'
import { loginWithUserAction } from '../../redux/Ducks/authDuck'

// librerias del watcher
import watch from 'redux-watch';
import store from '../../redux/createdStore';
import { useHistory } from 'react-router-dom'


function Login() {
  const history = useHistory()
  const dispatch = useDispatch()

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
  
  
  const authData = useSelector(state => state.authentication)
  const userData = useSelector(state => state.authentication.userData)

  const { register, handleSubmit, errors } = useForm();
  // const [userInfo, setUserInfo] = useState( authData.userData);


  


  const onSubmit = async (data) => {
    dispatch(loginWithUserAction(data))
    // console.log(userData)
  };
  // console.log(errors)
  return (
    <div className='login'>
      <>
        {authData.userLoginFail &&
          <Alert severity="error">No se pudo completar el login<br/>{authData.userLoginFail}</Alert>
        }
        
      </>
      <span/>
      <>
        {authData.userData &&
          <Alert severity="success">Te has logueado en la app<br/>{authData.userData.username} con id = {authData.userData._id}</Alert>
        }
        
      </>
      <div className='container'>
        {/* <pre>{JSON.stringify(userInfo, undefined, 2)}</pre> */}
        <form onSubmit={ handleSubmit(onSubmit)}>
          <h1 className="regtitle">Login</h1>
          <div className='ui divider'></div>
          <div className='ui form'>
            
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

export default Login;

// <p>{errors.username?.message}</p>
// <p>{errors.email?.message}</p>
// <p>{errors.password?.message}</p>