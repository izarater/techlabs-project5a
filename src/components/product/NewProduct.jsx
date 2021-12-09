import React from 'react'

// importaciones de material ui para la vista
import { 
  Button,
  DialogTitle, 
  DialogContentText, 
  DialogContent, 
  DialogActions, 
  Dialog,
  TextField
} from '@mui/material';

import Swal from 'sweetalert2'

// manejo de las fechas
import {MobileDatePicker, LocalizationProvider} from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';

//importaciones para el manejo del form
import { useForm } from 'react-hook-form';

// manejo del redux
import { useSelector, useDispatch } from 'react-redux';

const NewProduct = () => {
  const [open, setOpen] = React.useState(false);
  const userRol = 'Establishment'
  
  // manejo del redux
  const dispatch = useDispatch()
  const userData = useSelector(state=> state.authentication.userData)

  // variables para el manejo del form
  const {register, handleSubmit} = useForm()

  const submit = (dataProduct) => {
    // validar los datos del producto antes de enviarlo al servidor
    console.log({...dataProduct, value} )
    handleClose() // se cierra el dialog 
  }

  const handleClickOpen = () => {
    
    if(userData){
      if(userData.rol!=userRol){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `You havent the necesary permissions, try again with an  user with an '${userRol}' rol`,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }else
        setOpen(true);
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You havent login yet, please signin our application before using this functionality',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  //zona de manejo de la fecha
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };


  return (
    <div>
       <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Product</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <form>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              {...register("email")}
            />
            
            <LocalizationProvider dateAdapter={DateAdapter}>
              <MobileDatePicker
                label="Date mobile"
                inputFormat="dd/MM/yyyy"
                value={value}
                disableFuture
                onChange={handleChange}
                // {...register('elaboration_date')}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            
            
          </form>
            {/* <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            /> */}
            
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit(submit)}>Subscribe</Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default NewProduct
