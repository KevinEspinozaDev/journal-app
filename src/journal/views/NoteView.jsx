import { SaveOutlined } from "@mui/icons-material"
import { Grid, Typography, Button, TextField } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid container direction="row" justifyContent="space-between"
    sx={{mb:1}}
    alignItems="center"
    >
        <Grid item>
            <Typography 
                fontSize={39}
                fontWeight="light"
            >
                2 de septiembre, 2022
            </Typography>
        </Grid>

        <Grid item>
            <Button color="primary" sx={{p:2}}>
                <SaveOutlined sx={{fontSize:30, mr:1}}/>
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label="Título"
                sx={{border:"none", mb:1}}
            />

            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                minRows={5}
                placeholder="¿Qué sucedió el día de hoy?"
            />
        </Grid>

        {/* Galeria de imagenes */}
        <ImageGallery />

    </Grid>
  )
}
