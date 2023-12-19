import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import CustomTextField from "../../../components/Inputs/CustomTextField";
import { useAuth } from "../hooks/useAuth";


export default function LoginForm(){

  const {
    emailRef,
    passwordRef,
    handleLogin
  } = useAuth();

  return(
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{display: "flex", flexDirection: 'column', gap: '10px', width: '80%'}}>
          <CustomTextField
            ref={emailRef}
            label="email"
            placeholder="email"
          />
          <CustomTextField
            ref={passwordRef}
            type="password"
            label="password"
            placeholder="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Grid>
  )
}