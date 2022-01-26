import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { chargeUserDataAction } from './redux/Ducks/authDuck';

import './App.css';
import Home from './pages/home';
import Discovery from './pages/discovery';
import RegisterPage from './pages/registerPage';
import LoginPage from './pages/loginPage';
import AboutUsPage from './pages/aboutUsPage';

// import { useHistory } from 'react-router-dom';
import watch from 'redux-watch';


// import watch from 'redux-watch';
import store from  './redux/createdStore';

// acciones de navegacion
import { useHistory, useLocation } from 'react-router-dom';

// const store = generateStore()

import { getListRolesAction as listRoles } from './redux/Ducks/authDuck'


// lista de importaciones de desarrollo para prueba e implementacion de la lista de tags
import products from './services/productService'
import { listTypesActions } from './redux/Ducks/productDuck';


// let w = watch(store.getState, 'authentication.userData')
// store.subscribe(w((newVal, oldVal, objectPath) => {
//   console.log('somehting change: ', newVal, oldVal)
// }))

import { marketActions } from './redux/Ducks/marketDuck';


function App() {
  

  const history = useHistory()

  const dispatch = useDispatch()

  dispatch(listRoles())
  dispatch(listTypesActions())
  dispatch(marketActions())
  
  // const location = useLocation()

  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(chargeUserDataAction())
  // },[])
  
  // const [storage, setStorage] = useState(()=>sessionStorage.getItem('user'))
  // const [userData, setUserData ] = useState(useSelector(state => {
  //   console.log('hola mundo') 
  //   return state.authentication.userData
  // }))
  
  // useEffect(()=>{
  //   console.log('hola mundo, se ha cambiado el storage')
  // },
  // [userData])

  // const [datoDeDaniel, setDatoDeDaniel] = useState(useSelector(state => state.authentication.userData))
  // let w = watch(store.getState, 'authentication.userData')

  // store.subscribe(w((newVal, oldVal, objectPath)=>{
  //   console.log(newVal)
  //   if(newVal ){ // validadno un login nuevo
  //     // setUserInfo(newVal)
  //     history.push('/')
      
  //   } else if(!newVal){
  //     console.log('No permitir navegacion')
  //   }
  // }))
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/discovery" component={Discovery} />
        <Route path="/signup" component={RegisterPage} />
        //<Route path="/login" component={LoginPage} />
        <Route path="/about" component={AboutUsPage} />
        <Route path="/login" component={()=><LoginPage/>} />
      </Switch>
    </Router>
  );
}

export default App;
