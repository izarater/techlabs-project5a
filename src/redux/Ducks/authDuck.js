import authenticationService from "../../services/authenticationService"


const data = {
  
}

  
  // tipos de acciones
const LOGIN_WITH_EMAIL_SUCCESS = 'LOGIN_WITH_EMAIL_SUCCESS'
const LOGIN_WITH_EMAIL_FAIL = 'LOGIN_WITH_EMAIL_FAIL'

const LOGIN_WITH_USER_SUCCESS = 'LOGIN_WITH_USER_SUCCESS'
const LOGIN_WITH_USER_FAIL = 'LOGIN_WITH_USER_FAIL'

const CHARGING_DATA = 'CHARGING_DATA'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const REGISTER_FAIL = 'REGISTER_FAIL'

const GET_LIST_ROLES_SUCCESS = 'GET_LIST_ROLES_SUCCESS'
const GET_LIST_ROLES_FAIL = 'GET_LIST_ROLES_FAIL'

const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS"
const CHANGE_PASSWORD_FAIL = "CHANGE_PASSWORD_FAIL"
const CHANGE_PASSWORD_RESET = 'CHANGE_PASSWORD_RESET'

const LOGOUT = 'LOGOUT'


// reducer, encargado de interactuar con los datos del reduc
export default function authReducer(state = data, action){
  switch (action.type) {
    case LOGIN_WITH_USER_SUCCESS:
      // sessionStorage.setItem("userData", action.payload.userData)
      return {
        ...state,
        userData: action.payload.userData,
        userLoginFail: undefined // se elimina el dato de error cuando se complete una accion exitosa
      }
    case LOGIN_WITH_USER_FAIL:
      
      return {
        ...state,
        userData: undefined,
        userLoginFail: action.data
      }
    // case LOGUIN_WITH_EMAIL_SUCCESS:
    //   // console.log(action)
    //   return {...state,userData: {message: action.payload}}
    case CHARGING_DATA: 
      return {
        ...state,
        userData: action.payload.userData,
      }
    case GET_LIST_ROLES_FAIL:
      return state
    case GET_LIST_ROLES_SUCCESS:
      return {
        ...state,
        listRoles: action.payload
      }
    case REGISTER_FAIL:
      return{
        ...state,
        userRegisterFail: action.payload
      }
    case REGISTER_SUCCESS:
      return{
        ...state,
        userData: action.payload,
        userRegisterFail: undefined
      }
    case LOGOUT:
      return {
        ...state,
        userData: undefined,
      }
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changeError: undefined,
        userData: action.payload
      }
    case CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        changeError: action.payload
        // userData: payload
      }
    case CHANGE_PASSWORD_RESET:
      return {
        ...state,
        changeError: undefined
        // userData: payload
      }
    default:
      return state
  }
}


// acciones, estas son las que ejecutaran el reducer, y son las que se importan en cada zona del proyecto para ejecutar algun cambio o funcion

export const loginWithUserAction = (data) => async (dispatch, getState) => {
  
  const {
    username,
    password
  } = data;
  
  try {
    
    const result = await authenticationService.loginWithUsername(username, password)
    if(!result.completeAuth){
      // console.log(result.result)
      dispatch({
        type: LOGIN_WITH_USER_FAIL,
        data: result.result.message,
        error: "Se produjo un error"
      })
    }else{ // en el caso de que se envie el dato de completeAuth, se podra enviar un caso de 
      // console.log(result)
      dispatch({
        type: LOGIN_WITH_USER_SUCCESS ,
        payload: result.result
      })
    }
  } catch (error) {
    
    dispatch({
      type: LOGIN_WITH_USER_FAIL,
      data: `${error}`,
      error
    })
  }
}
export const chargeUserDataAction = (data) => (dispatch, getState) => {
  // cargando los datos guardados en la sesion
  if(data || sessionStorage.getItem('userData')){
    dispatch({
      type: CHARGING_DATA,
      payload: data? data: sessionStorage.getItem('userData')
    })
  }
}
export const RegisterWithEmailAction = (dataRegister) => async (dispatch, getState) => {
  // esta funcion no esta completa, porfavor
}
export const loginWithEmailAction = (data) => async (dispatch, getState) => {
  const {
    email,
    password
  } = data;
  try {

    const result = await authenticationService.loginWithEmail()
    
  } catch (error) {
    dispatch({
      type: LOGIN_WITH_EMAIL_FAIL,
      error
    })
  }
}
export const getListRolesAction = () => async (dispatch, getState) => {
  try {
    const lista = await authenticationService.getListRoles()
    if(lista.error){
      dispatch({
        type: GET_LIST_ROLES_FAIL,
        payload: lista.error
      })
    }
    dispatch({
      type: GET_LIST_ROLES_SUCCESS,
      payload: lista.list
    })
  } catch (error) {
    dispatch({
      type: GET_LIST_ROLES_FAIL,
      payload: error
    })
  }
}
export const registerAction = (data) => async (dispatch, getState)=> {
  const {
    name,
    username,
    surname,
    email,
    rol,
    password
  } = data
  try {
    const result = await authenticationService.register({
      name,
      username,
      surname,
      email,
      rol,
      password
    })
    if(result.isCompleted){
      dispatch({
        type: REGISTER_SUCCESS,
        payload: result.data
      })
    }else{
      dispatch({
        type:REGISTER_FAIL,
        payload: result.error
      })
    }

  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error
    })
  }
}

export const registerWithTypeAction = (data,rol) => async (dispatch, getState)=> {
  
  try {
    const result = await authenticationService.register(data, rol)
    if(result.isCompleted){
      dispatch({
        type: REGISTER_SUCCESS,
        payload: result.data
      })
    }else{
      dispatch({
        type:REGISTER_FAIL,
        payload: result.error
      })
    }

  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error
    })
  }
}

export const logoutAction = () => (dispatch, getState) =>{
  dispatch({
    type: LOGOUT,
  })
}


export const changePasswordAction = (data) => async (dispatch, getState) => {
  const {
    username,
    password,
    newPassword,
  } = data

  try {
    const result = await authenticationService.changePassword({
      username,
      password,
      newPassword
    })
    console.log(result)
    if(result.changed){
      dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
        payload: result.data
      })
    }else{
      dispatch({
        type: CHANGE_PASSWORD_FAIL,
        payload: result.error.response.data.message
      })
    }
  } catch (error) {
    dispatch({
      type: CHANGE_PASSWORD_FAIL,
      payload: "Mistake in the execution of the task",
      error
    })
  }
}

export const changePasswordResetAction = () => (dispatch, getState) => {
  dispatch({
    type:CHANGE_PASSWORD_RESET
  })
}