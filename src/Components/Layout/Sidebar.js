import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Paid from '@mui/icons-material/Paid';
import PeopleAlt from '@mui/icons-material/PeopleAlt';
import School from '@mui/icons-material/School';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function ResponsiveDrawer({ typeUser }) {
  console.log("tipo recibido en sidebar:", typeUser);
  const { window } = () => Window;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  typeUser = 'Administrativo'

  let menuLinks = []

  switch (typeUser) {
    case "Administrativo": menuLinks = [{ link: "/", text: 'Usuarios', icon: <PeopleAlt /> },
    { link: "/notifications/admin", text: 'Notificaciones', icon: <MailIcon /> },
    { link: "/", text: 'Alumnos', icon: <School /> },
    { link: "/", text: 'Pagos', icon: <Paid /> }]
      break;
    case "Tutor": menuLinks = [{ link: "/", text: 'Notificaciones', icon: <MailIcon /> },
    { link: "/", text: 'Boletines', icon: <School /> },
    { link: "/", text: 'Pagos', icon: <Paid /> }]
      break;
    default:
      break;
  }

  const drawer = (
    <div>
      <Toolbar>
        {typeUser === "admin" ? "Administracion" : "Accesos"}
      </Toolbar>
      <CssBaseline/>
      <Divider />
      <List>
        {
          menuLinks.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <Link to={item.link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <ListItemButton >
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            </ListItem>

          ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
