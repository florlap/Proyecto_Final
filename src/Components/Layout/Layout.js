import * as React from 'react';
import Container from '@mui/material/Container';
import { useEffect } from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux';

const drawerWidth = 240; {/* Medida del ancho de la Sidebar */}

function Layout({ children }) {

    const user = useSelector(state => state.user)
    const typeUser = user[0]?.typeuser?.typeUsers
    console.log("usuario obtenido",user,"Tipo usuario",typeUser);
  
    return (
        <div>
            <head>
                <title>School Manage</title>
                <meta name="description" content="Grupo Nº6 Henry 27b" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <Box sx={{ display: 'flex' }}>{/* Coloca sidebar y children uno al lado del otro */}
                {user.length>0 ? <Sidebar typeUser={typeUser} /> : ""}
                <Box component="main" sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>{/* calcula el espacio que tiene que defasar el componente principal para que no quede debajo de la sidebar */}
                    <Navbar user={user[0]} />{/* Configurada para estar sobre los elementos */}
                    <Toolbar /> {/* genera un espacio en blanco para que no quede debajo de la Navbar */}
                    {children}{/* componente recibido por props para ser mostrado en cuadrante vacio */}
                </Box>
            </Box>
        </div>
    );

}
export default Layout