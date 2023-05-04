import { AddOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import {NoteView, NothingSelectedView} from './../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/*<Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad odio placeat doloribus quisquam repudiandae 
      praesentium sed odit libero qui aspernatur ullam, voluptatum temporibus reprehenderit
      quasi voluptatem voluptates inventore ipsum vitae.</Typography>*/}

      <NothingSelectedView/>

      {/**NothingSelecter */}

      {/**Note view */}
      {/*<NoteView />*/}

      <IconButton
        size="large"
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
