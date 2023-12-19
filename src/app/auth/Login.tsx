import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import LoginForm from './components/LoginForm';
import LoginImage from './components/LoginImage';

export default function Login() {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <LoginImage />
      <LoginForm />
    </Grid>
  );
}