import { useDispatch, useSelector } from "react-redux";

import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView} from './../views';
import { startNewNote } from "../../store/journal/thunks";

export const JournalPage = () => {

  const dispatch = useDispatch();

  const {isSaving, active} = useSelector( state => state.journal );

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  return (
    <JournalLayout>
      {/*<Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad odio placeat doloribus quisquam repudiandae 
      praesentium sed odit libero qui aspernatur ullam, voluptatum temporibus reprehenderit
    quasi voluptatem voluptates inventore ipsum vitae.</Typography>*/}

      {
        active !== null
        ? <NoteView />
        : <NothingSelectedView/>
      }
      

      <IconButton
        onClick={onClickNewNote}
        size="large"
        disabled={isSaving}
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": {backgroundColor: "error.main", opacity: 0.9},
          position: "fixed",
          right: 50,
          bottom:50,
        }}
        >
        <AddOutlined
          sx={{fontSize:30}}
          >

        </AddOutlined>

      </IconButton>

    </JournalLayout>
  )
}
