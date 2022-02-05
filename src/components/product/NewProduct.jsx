import React from 'react'

// importaciones de material ui para la vista
import { 
  Button,
  DialogTitle, 
  DialogContentText, 
  DialogContent, 
  DialogActions, 
  Dialog,
  TextField,
  TextareaAutosize,
  FormHelperText,
  Select,
  MenuItem,
  ListItem,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

import Swal from 'sweetalert2'

// manejo de las fechas
import {MobileDatePicker, LocalizationProvider} from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';

//importaciones para el manejo del form
import { useForm } from 'react-hook-form';

// manejo del redux
import { useSelector, useDispatch } from 'react-redux';
import { newProductAction } from '../../redux/Ducks/productDuck';


// creando el form con algunos estilos predefinidos
const Formulario = styled('form')(({ theme }) => ({
  display: 'flex',
  
  flexDirection: 'column',
  
  // component: 'form',
}))

const NewProduct = () => {
  const [open, setOpen] = React.useState(false);
  const userRol = 'Establishment'
  
  // manejo del redux
  const dispatch = useDispatch()
  const userData = useSelector(state=> state.authentication.userData)


  //zona de manejo de la fecha
  const [date, setDate] = React.useState(new Date());

  const handleChange = (newDate) => {
    setDate(newDate);
  };

  //zona de manejo de la lista de tags
  const [valuesTags, setValuesTags] = React.useState([])
  const list = useSelector(state => state.products.listTypes)
  let listTypes = list

  const addTag = (key) => (event) => {
    if(!valuesTags.includes(event.target.innerText))
      setValuesTags([...valuesTags, event.target.innerText])
  }

  const deleteTag = (key) => (event) => {
    setValuesTags(valuesTags.filter((item, ikey) => key !==ikey))
  }

  // variables para el manejo del form
  const {register, handleSubmit} = useForm()

  const submit = (dataProduct) => {
    // validar los datos del producto antes de enviarlo al servidor
    console.log({...dataProduct, elaboration_date: date, tags: valuesTags, username: userData.username} )
    dispatch(newProductAction({...dataProduct, elaboration_date: date, tags: valuesTags, username: userData.username}))
    handleClose() // se cierra el dialog 
  }

  const handleClickOpen = () => {
    // se valida si el usuario logueado tiene los permisos suficientes para acceder a la funcion
    if(userData){
      console.log(userData.rol)
      if(userData.rol.rol!=userRol){
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
          <Formulario>
            <FormHelperText>
              Nombre del producto
            </FormHelperText>
            <TextField
              type="text"
              name="name"
              inputProps={{
                
                autoComplete: 'new-password',
              }}
              {...register("name", {required:" The product name is required"})}
            />
            
            <FormHelperText>
              Fecha de elaboracion
            </FormHelperText>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <MobileDatePicker
                label="Date mobile"
                inputFormat="dd/MM/yyyy"
                value={date}
                disableFuture
                onChange={handleChange}
                // {...register('elaboration_date')}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <FormHelperText>
              Tamaño Porción
            </FormHelperText>
            <TextareaAutosize
              
              maxRows={2}
              aria-label="maximum height"
              {...register('quantity')}
            />
            
            <FormHelperText>
              Descripción
            </FormHelperText>
            <TextareaAutosize
              
              maxRows={4}
              aria-label="maximum height"
              {...register('description')}
            />

            <FormHelperText>
              Foto
            </FormHelperText>
            <TextareaAutosize
              
              maxRows={2}
              aria-label="maximum height"
              {...register('src')}
            />

            <FormHelperText>
              Plato en 1 o 2 palabras
            </FormHelperText>
            <TextareaAutosize
              
              maxRows={2}
              aria-label="maximum height"
              {...register('alt')}
            />

            <FormHelperText>
              Tags
            </FormHelperText>
            <Select 
              label="Tags" value=''  sx = {{minWidth: '60%',color: '#000000'}}
            >
              {
                listTypes && listTypes.map((type, key) => (
                  <MenuItem onClick={addTag(key)} key={key}>{type}</MenuItem>
                ))
              }
              {/* {roles && roles.map((role, key) => (
              
                <MenuItem key={key} value={role}>{role}</MenuItem>
              ) */}
            
            
            
            </Select>
            
            <Box sx={{width:'100%', display: 'flex', flexDirection: 'row'}}>
              {valuesTags && valuesTags.map((data, key) => {
                return (
                  <ListItem>
                    <Chip
                      label={data}
                      onDelete={deleteTag(key)}
                    />

                  </ListItem>
                )
              })}
            </Box>

            <FormHelperText>
              Contraseña del establecimiento
            </FormHelperText>
            <TextField
              type="password"
              name="password"
              inputProps={{
                
                autoComplete: 'new-password',
              }}
              {...register("password", {required:"The password is required"})}
            />
          </Formulario>
          
          
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
          <Button onClick={handleSubmit(submit)}>Add product</Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default NewProduct
