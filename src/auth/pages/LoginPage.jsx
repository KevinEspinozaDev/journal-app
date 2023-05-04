import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography, Alert } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthLayout } from "../layout/AuthLayout";

import { useDispatch, useSelector } from "react-redux";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";
import { useMemo } from "react";

export const LoginPage = () => {

  const {email, password, onInputChange} = useForm({
    email : 'testing@gmail.com',
    password : '123456789'
  });

  const {status, errorMessage} = useSelector(state => state.auth);
  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  /* USA UN DISPATCH DE UN SLICE */
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    
    dispatch(startLoginWithEmailPassword({email, password}));

  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  return (
      <AuthLayout title="Login">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField label="Correo" type="email" placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField label="Contraseña" type="password" placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              />
            </Grid>

            <Grid 
            container
            display={!!errorMessage ? '' : 'none'}
            sx={{mt: 1}}
            >
              <Grid item 
              xs={12}>
                <Alert severity="error">
                  {errorMessage}
                </Alert>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:1}}>

              <Grid item xs={12} sm={6}>
                <Button  
                disabled={isAuthenticating}
                type="submit" 
                variant="contained" 
                fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button 
                disabled={isAuthenticating}
                variant="contained" 
                fullWidth
                onClick={onGoogleSignIn}
                >
                  <Google />
                   <Typography sx={{ml:1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container
            direction="row"
            justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>

            </Grid>

          </Grid>
        </form>
      </AuthLayout>
        
  )
}