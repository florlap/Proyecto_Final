import { FormControl, Checkbox, Rating, InputLabel, Stack, Box, Grid, Button, Select, MenuItem, FormControlLabel, Card, Typography, CardContent, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTypeUsers } from '../../redux/actions'

export default function UserForm({ notification, mode, handleClose, dataForm, title }) {


    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        idNotifications: notification?.idNotifications,
        subject: notification.subject ? notification.subject : '',
        body: notification.body ? notification.body : '',
        active: notification.active ? notification.active : true,
        check: notification.check ? notification.check : null,
        pay: notification.pay ? notification.pay : false,
        review: notification.review ? notification.review : null,
    })
    const { subject, body, active, pay, review, check } = formData

    function handledOnChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    
    function handleChecks(e) {
        setFormData({ ...formData, [e.target.name]: e.target.checked })
    }
    
    function handledOnClick() {
        setLoading(true)
        console.log("Datos de formulario",formData);
        dataForm(formData)
        setTimeout(function () {
            setLoading(false)
            handleClose()
        }, 2000);
    }

    return (
        <Card style={{ margin: "0 auto", pading: "20px 5px" }} fullWidth>
            <CardContent >
                <Typography gutterBottom variant="h5" >{title}</Typography>
                <Grid xs={12} sm={6} item>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField multiline rows={2} name="subject"
                            label="Asunto" type="text" onChange={e => handledOnChange(e)}
                            placeholder="Ingrese nombre" sx={{ mb: 1.5 }} variant="outlined"
                            aria-describedby="subject-Helper" value={subject} required />
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField multiline rows={4} name="body" type="text" label="Decripción"
                            onChange={e => handledOnChange(e)} sx={{ mb: 1.5 }} placeholder="Ingrese apellido"
                            variant="outlined" aria-describedby="body-Helper" value={body} required />
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                    <FormControl >
                        <FormControlLabel control={<Checkbox checked={active} />} name="active" onChange={handleChecks} label="Activo" />
                    </FormControl>
                    <FormControl >
                        <FormControlLabel control={<Checkbox checked={pay} />} name="pay" onChange={handleChecks} label="Pagos" />
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item row>
                    <InputLabel htmlFor="check">Confirmacion</InputLabel>
                    <FormControl sx={{ m: 1 }}>
                        <Select name="check" displayEmpty label="Confirma" onChange={e => handledOnChange(e)} value={check}>
                            <MenuItem key={0} value={null}>Sin Confirmacion</MenuItem>
                            <MenuItem key={1} value={false}>No Confirmada</MenuItem>
                            <MenuItem key={2} value={true}>Confirmada</MenuItem>
                        </Select>
                    </FormControl>
                    <InputLabel htmlFor="review">Valoración</InputLabel>
                    <FormControl sx={{ m: 1 }}>
                        {(review === null || review === 0) ?
                            <Select name="review" displayEmpty label="Valoración" onChange={e => handledOnChange(e)} value={review} >
                                <MenuItem key={0} value={null}>Sin Valoración</MenuItem>
                                <MenuItem key={1} value={0}>Valoración</MenuItem>
                            </Select>
                            : <Select name="review" displayEmpty label="Valoración" onChange={e => handledOnChange(e)} value={review} disabled>
                                <MenuItem key={0} value={null}>Sin Valoración</MenuItem>
                                <MenuItem key={1} value={review}>Valoración</MenuItem>
                            </Select>
                        }

                    </FormControl>
                    <FormControl>
                        <Stack spacing={2}>
                            <Rating value={review} readOnly />
                        </Stack>
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item >
                    <LoadingButton type="submit" onClick={handledOnClick} endIcon={<SendIcon />} loading={loading} loadingPosition="end" variant="contained">
                        {mode === "new" ? "Crear" : "Editar"}
                    </LoadingButton>
                    <Button onClick={handleClose}>Cancelar</Button>
                </Grid>
            </CardContent>
        </Card>
    )
}