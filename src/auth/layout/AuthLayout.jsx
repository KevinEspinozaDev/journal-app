import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({children, title=""}) => {
  return (
    <Grid 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{minHeight: '100vh',
        backgroundColor:'primary.main',
        padding:4}
      }
    >

      <Grid
        item
        xs={3}
        className="box-shadow"
        sx={{
            backgroundColor: 'white',
            padding: 3, 
            borderRadius: 2, 
            width: {sm : 450}
        }}
      >
        <Typography variante="h5" sx={{mb:1}}>{ title }</Typography>
      
        {/* Children */}
        {children}
      </Grid>
    </Grid>
  )
}
