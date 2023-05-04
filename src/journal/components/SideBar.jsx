import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography, Grid, ListItemText } from '@mui/material'
import {TurnedInNot} from '@mui/icons-material';
import React from 'react'

export const SideBar = ({drawerWidth}) => {

    const arreglo = ['Enero', 'Febrero', 'Marzo', 'Abril'];

  return (
    <Box
        component="nav"
        sx={{
            width: {sm:drawerWidth},
            flexShrink: {sm:0}
        }}
    >
        <Drawer
        variant="permanent"
        open
        sx={{
            display: {xs: 'block'},
            '& .MuiDrawer-paper' : {boxSizing: 'border-box', width: drawerWidth}
        }}
        >

            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Kevin Espinoza
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    arreglo.map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={'lorem ipsum'}/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}