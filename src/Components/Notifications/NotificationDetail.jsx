import { Checkbox, Container, Grid, Button, Divider, Card, Typography, CardContent, Label } from '@mui/material';

export default function NotificationDetail({ notification, handleClose }) {
    return (
        <Card style={{ margin: "0 auto", pading: "20px 5px" }} fullWidth>
            <CardContent >
                <Typography gutterBottom variant="h5" >Detalles de Notificacion</Typography>
                <Divider variant="middle" />
                <Grid xs={12} sm={6} item>
                    <Typography gutterBottom variant="h5" >{notification?.subject}</Typography>
                </Grid>
                <Divider variant="middle" />
                <Grid xs={12} sm={6} item>
                    <Typography gutterBottom variant="body1" >{notification?.body}</Typography>
                </Grid>
                <Grid xs={12} sm={6} item>
                    <Button variant="outlined" onClick={handleClose}>Cerrar</Button>
                </Grid>
                <Grid xs={12} sm={6} item>
                {notification?.check!==null?notification?.check?
                    <Button variant="outlined" onClick={handleClose} disabled>Confirmar </Button>
                    : <Button variant="outlined" onClick={handleClose}>Confirmar</Button>
                    :""
                }
                </Grid>
            </CardContent>
        </Card>
    )
}