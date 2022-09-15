import { FormControl, Checkbox, Container, InputLabel, Input, Box, Grid, Button, Select, MenuItem, FormControlLabel, Card, Typography, CardContent, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTypeUsers } from '../../redux/actions'

export default function UserForm({ notification, mode, handleClose, dataForm, title }) {

    console.log("Notificacion que llega al modal", notification);

    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        idNotifications: notification.idNotifications,
        subject: notification.subject,
        body: notification.body,
        creationDate: notification.creationDate,
        active: notification.active,
        check: notification.check,
        pay: notification.pay,
        review: notification.review,
    })
    const { subject, body, creationDate, active, pay, review, check } = formData

    // const dispatch = useDispatch()

    // const typeUsersAll = useSelector(state => state.typeUsers)
    // useEffect(() => {
    //     dispatch(getAllTypeUsers())
    // }, [dispatch])


    function handledOnChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handledOnClick() {
        setLoading(true)
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
                        <TextField multiline rows={2} name="subject" label="Asunto" type="text" onChange={e => handledOnChange(e)} placeholder="Ingrese nombre" sx={{ mb: 1.5 }} variant="outlined" aria-describedby="subject-Helper" value={subject} required />
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField multiline rows={4} name="body" type="text" label="Decripción" onChange={e => handledOnChange(e)} sx={{ mb: 1.5 }} placeholder="Ingrese apellido" variant="outlined" aria-describedby="body-Helper" value={body} required />
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                    <FormControl>
                        <TextField name="creationDate" type="creationDate" label="Fecha Emisión" onChange={e => handledOnChange(e)} sx={{ mb: 1.5 }} placeholder="Ingrese mail" variant="outlined" aria-describedby="creationDate-Helper" value={creationDate} />
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                    <FormControl >
                        {active ? <FormControlLabel control={<Checkbox checked />} label="Activo" value={active} />
                            : <FormControlLabel control={<Checkbox />} label="Activo" value={active} />
                        }
                    </FormControl>
                    <FormControl >
                        {pay ? <FormControlLabel control={<Checkbox checked />} label="Pagos" value={pay} />
                            : <FormControlLabel control={<Checkbox />} label="Pagos" value={pay} />
                        }
                    </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item >
                    <InputLabel htmlFor="check">Confirmacion</InputLabel>
                    <FormControl sx={{ m: 1 }}>
                        <Select name="check" displayEmpty label="Confirma" onChange={e => handledOnChange(e)} value={check}>
                            <MenuItem key={0} value={null}>Sin Confirmacion</MenuItem>
                            <MenuItem key={0} value={false}>No Confirmada</MenuItem>
                            <MenuItem key={0} value={true}>Confirmada</MenuItem>
                        </Select>
                    </FormControl>
                    <InputLabel htmlFor="review">Valoración</InputLabel>
                    <FormControl sx={{ m: 1 }}>
                    <Select name="review" displayEmpty label="Valoración" onChange={e => handledOnChange(e)} value={review}>
                                <MenuItem key={0} value={null}>Sin Valoración</MenuItem>
                                <MenuItem key={0} value={-1}>Valoración</MenuItem>
                            </Select>
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