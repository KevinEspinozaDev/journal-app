import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Grid, Typography, Button, TextField, IconButton } from "@mui/material"
import { ImageGallery } from "../components"
import {useForm} from '../../hooks';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';


export const NoteView = () => {

    const {active:note, messageSaved, isSaving} = useSelector(state => state.journal);

    const {body, title, date, onInputChange, formState} = useForm(note);
    const dispatch = useDispatch();

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

    const fileInputRef = useRef();

    
    useEffect(() => {
        dispatch(setActiveNote(formState))
        
    }, [formState]);

    useEffect(() => {
      if (messageSaved.length > 0) {
        Swal.fire('Nota actualizada', messageSaved, 'success');
      }
    
    }, [messageSaved])
    
    
    const onSaveNote = () => {
        dispatch( startSaveNote(formState) );
    }

    const onFileInputChange = ({target}) => {
        if (target.files === 0) return;

        dispatch(startUploadingFiles(target.files));
    }

    const onDelete = () => {
        dispatch( startDeletingNote() );
    }

    return (
        <Grid container direction="row" justifyContent="space-between"
        className="animate__animated animate__fadeIn animate__faster"
        sx={{mb:1}}
        alignItems="center"
        >
            <Grid item>
                <Typography 
                    fontSize={39}
                    fontWeight="light"
                >
                    {dateString}
                </Typography>
            </Grid>

            <Grid item>

                <input 
                type="file" 
                multiple
                ref={fileInputRef}
                onChange={onFileInputChange}
                style={{display:'none'}}
                />
                <IconButton 
                color="primary" 
                onClick={() => fileInputRef.current.click()}
                disabled={isSaving}>
                    <UploadOutlined></UploadOutlined>
                </IconButton>


                <Button 
                onClick={onSaveNote}
                disabled={isSaving}
                color="primary" 
                sx={{p:2}}
                >
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
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    minRows={5}
                    placeholder="¿Qué sucedió el día de hoy?"
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid
            container
            justifyContent='end'>
                <Button
                sx={{mt: 2}}
                onClick={onDelete}
                color="error">
                    <DeleteOutline />
                    Borrar
                </Button>

            </Grid>

            {/* Galeria de imagenes */}
            <ImageGallery images={note.imageUrls}/>

        </Grid>
    )
}
