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

import Swal from 'sweetalert2'

// manejo de las fechas
import {MobileDatePicker, LocalizationProvider} from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';

//importaciones para el manejo del form
import { useForm } from 'react-hook-form';

// manejo del redux
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/system';


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

  // variables para el manejo del form
  const {register, handleSubmit} = useForm()

  const submit = (dataProduct) => {
    // validar los datos del producto antes de enviarlo al servidor
    console.log({...dataProduct, value} )
    handleClose() // se cierra el dialog 
  }

  const handleClickOpen = () => {
    setOpen(true)
    // if(userData){
    //   if(userData.rol!=userRol){
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...',
    //       text: `You havent the necesary permissions, try again with an  user with an '${userRol}' rol`,
    //       // footer: '<a href="">Why do I have this issue?</a>'
    //     })
    //   }else
    //     setOpen(true);
    // }else {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'You havent login yet, please signin our application before using this functionality',
    //     // footer: '<a href="">Why do I have this issue?</a>'
    //   })
    // }
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  //zona de manejo de la fecha
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  //zona de manejo de la lista de tags
  const [valuesTags, setValuesTags] = React.useState([])
  const list = useSelector(state => state.products.listTypes)
  let listTypes = list
  const objectTypes = Object.assign({},listTypes)

  const addTag = (key) => (event) => {
    
    // delete listTypes[key]
    if(!valuesTags.includes(event.target.innerText))
      setValuesTags([...valuesTags, event.target.innerText])
    // setValuesTags()
  }

  const deleteTag = (key) => (event) => {
    setValuesTags(valuesTags.filter((item, ikey) => key !==ikey))

    // console.log(listTypes.push(event.target.innerText))
    
  }

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

            <FormHelperText>
              Informacion Adicional
            </FormHelperText>
            <TextareaAutosize
              
              maxRows={4}
              aria-label="maximum height"
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
            
            
          </Formulario>
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
