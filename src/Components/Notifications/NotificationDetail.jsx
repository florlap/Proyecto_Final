import { FormControl, Rating, Grid, Button, Divider, Card, Typography, CardContent, Stack } from '@mui/material';
import { useEffect, useState } from 'react';

export default function NotificationDetail({ notification, handleClose, dataForm }) {
    const [formData, setFormData] = useState(notification)

    function handleRating(event, newValue) {
        setFormData({ ...formData, review: newValue })
    }

    function handleOnClose() {
        if(notification.review!==formData.review)
        {
            dataForm(formData)
        }
        handleClose()
    }

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
                <Grid xs={6} sm={6} item>
                    {notification?.check !== null ? notification?.check ?
                        <Button variant="outlined" onClick={handleClose} sx={{ m: 1 }} disabled>Confirmar </Button>
                        : <Button variant="outlined" onClick={handleClose}>Confirmar</Button>
                        : ""
                    }
                    {notification?.pay ? <Button variant="outlined" name="pay" onClick={handleClose} sx={{ m: 1 }} >Pagos</Button> : ""
                    }
                    <Button variant="outlined" onClick={handleOnClose} sx={{ m: 1 }}>Cerrar</Button>
                </Grid>
                <Grid xs={6} sm={6} item>
                    <FormControl>
                        {notification?.review !== null ?
                            <Stack spacing={2}><Rating value={formData?.review} onChange={(event, newValue) =>(handleRating(event, newValue))} /></Stack>
                            : ""
                        }
                    </FormControl>
                </Grid>
            </CardContent>
        </Card>
    )
}