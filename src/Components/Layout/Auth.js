import { useDispatch } from 'react-redux';
import { authActions } from '../../store/AuthReducer';
import { Grid, Paper, TextField, Button, } from '@mui/material';


const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  }

  const paperStyle={padding :20,height:'23vh',width:280, margin:"20px auto"}
  const btnstyle={margin:'8px 0'}

  return (
    <Grid margin={10}>
          <Paper elevation={10} style={paperStyle}>
          <form onSubmit={loginHandler}>
            <TextField label='Username' placeholder='Enter username' fullWidth required/>
            <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
          </form>
          </Paper>
        </Grid>  
  );
};

export default Auth;