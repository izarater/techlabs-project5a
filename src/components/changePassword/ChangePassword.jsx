import React from 'react'

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';

import {
  useForm
} from 'react-hook-form'

import {
  useSelector,
  useDispatch
} from 'react-redux'
import { changePasswordAction, changePasswordResetAction } from '../../redux/Ducks/authDuck';

import Swal from 'sweetalert2'




const ChangePassword = () => {
  const { register, handleSubmit, errors } = useForm();
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch()
  const userData = useSelector(state => state.authentication.userData)
  const changeError = useSelector(state => state.authentication.changeError)

  const clickOpen = () => {
    setOpen(true);
  };

  const clickClose = () => {
    
    setOpen(false);
  };

  React.useEffect(() => {
    if(changeError){
      dispatch(changePasswordResetAction())
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ` The password couldnt be changed`,
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }, [changeError])
  

  const onSubmit= (data) =>{
    try {
      clickClose()
      if(userData.username!== data.username){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Thats not your username, please try again`,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      } else {
        dispatch(changePasswordAction(data))
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Error`,
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    
  }

  return (
    <div>
      <div onClick={clickOpen}>Change Password</div>
      <Dialog open={open} onClose={clickClose}>
        <DialogTitle>Change password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add your username and your password for continue
          </DialogContentText>
          <form>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="username"
              type="email"
              fullWidth
              variant="standard"
              {...register("username",{required:"username is required"})}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="password"
              type="password"
              inputProps={{
                
                autoComplete: 'new-password',
              }}
              fullWidth
              variant="standard"
              {...register("password",{required:"password is required"})}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="new password"
              type="password"
              inputProps={{
                
                autoComplete: 'new-password',
              }}
              fullWidth
              variant="standard"
              {...register("newPassword",{required:"new password is required"})}
            />
          </form>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={clickClose}>Cancel</Button>
          <Button onClick={handleSubmit(onSubmit)}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ChangePassword
