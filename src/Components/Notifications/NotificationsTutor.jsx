import * as React from 'react';
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import { Grid, Box , Stack, Rating} from '@mui/material';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ConfirmIcon from '@mui/icons-material/ThumbUpAlt';
import NoConfirmIcon from '@mui/icons-material/ThumbUpOffAlt';
import Pay from '@mui/icons-material/Paid';
import DialogContainer from '../Layout/DialogContainer'
import NotificationDetail from './NotificationDetail'

export default function NotificationsAdmin() {

    //traigo las notificaciones que estan en el estado
    let notificationsState = useSelector(state => state.user)


    const [notificationSelected, setnotificationSelected] = useState({})
    const [open, setOpen] = useState(false);
    const [notificationsRows, setNotificationsRows] = useState([])


    function handleClickOpen() {
        setOpen(true);
    };

    function handleClose() {
        setOpen(false);
    };

    function handleOnclickDetail(notification) {
        console.log("Notif tomada de tabla", notification);
        setnotificationSelected(notification)
        handleClickOpen()
    }
    // console.log(notifications);
    let notificationsRowsFormated = []
    notificationsState[0]?.students?.map((student, index) => {
        var studentName = student.firstNames
        let key = 1
        if (student.notifications.length !== 0) {
            student?.notifications?.map((notification) => {
                let fecha = notification.creationDate.split('-')
                let fechaFormated = `${fecha[2]}/${fecha[1]}/${fecha[0]}`
                notificationsRowsFormated.push([fechaFormated, notification.subject, notification.body, studentName,
                    notification?.check === null ? "" : notification?.check ? <ConfirmIcon color='success' sx={{ width: 30, height: 30 }} /> : <NoConfirmIcon color='disabled' sx={{ width: 30, height: 30 }} />,
                    notification?.pay ? <Pay sx={{ width: 30, height: 30 }} /> : "",
                    <div> {notification?.review ? <Stack spacing={2}> <Rating value={notification?.review} readOnly /></Stack> : ''}</div> ,
                    <div key={key}><Button variant="outlined" onClick={() => handleOnclickDetail(notification)} >Detalles</Button></div>])
                key++
            })
        }
    })
    useEffect(()=>{

        setNotificationsRows(notificationsRowsFormated)
    }, [notificationsRowsFormated])
    function dataForm(data) {
        let dataTableEdit={
            subject: data?.subject,
            body: data?.body,
            active: data.active,
            check: data?.check,
            pay: data?.pay,
            review: data?.review,
            }
            console.log("Datos que llegan de detail:",dataTableEdit);
            notificationsRowsFormated.push(dataTableEdit)
            setNotificationsRows(notificationsRowsFormated)
            console.log("Lista de notif despues de agregar en formateada",notificationsRowsFormated);
            console.log("Lista de notif despues de agregar en tabla",notificationsRows);
            // let dataDbNew= {
            //     firstNames: data.firstNames,
            //     lastName: "apellido",
            //     email: data.email,
            //     phone: 123456,
            //     password: "",
            //     typeuserIdTypeUsers: data.idTypeUsers,
            // }
            // let dataFormated= {
            //     type: "POST_ADMINISTRATIVO",
            //     users: [dataDbNew]
            // }
            // userCreate(dataFormated)
            // console.log("Este se envio desde Form:",dataFormated);
 
    }

    let columns = [
        {
            name: "notificationDate",
            label: "Fecha",
            options: { filter: false, sort: true }
        },
        {
            name: "subject",
            label: "Asunto",
            options: { filter: true, sort: true }
        },
        {
            name: "body",
            label: "Descripcion",
            options: { filter: false, sort: false }
        },
        {
            name: "student",
            label: "Alumno",
            options: { filter: true, sort: true }
        },
        {
            name: "check",
            label: "Estado",
            options: { filter: true, sort: false }
        },
        {
            name: "pay",
            label: "Pago",
            options: { filter: true, sort: false }
        },
        {
            name: "review",
            label: "Valoración",
            options: { filter: false, sort: false }
        },
        {
            name: "acciones",
            label: "Acciones",
            options: { filter: false, sort: false }
        },

    ]

    const options = {
        search: true,
        download: false,
        print: false,
        viewColumns: false,
        filter: true,
        filterType: "multiselect",
        elevation: 2,
        rowsPerPageOptions: [10, 15, 30, 100],
        tableBodyHeight: '100%',
        tableBodyMaxHeight: '100%',
        searchPlaceholder: "asunto / descripcion",
        searchAlwaysOpen: "true",
        selectableRows: "none",
        responsive: "stacked",
        hideSelectColumn: true,

        textLabels: {
            body: {
                noMatch: "Disculpa, no se encontraron registros",
                toolTip: "Ordenar",
                columnHeaderTooltip: column => `Ordenar por ${column.label}`
            },
            pagination: {
                next: "Siguiente",
                previous: "Anterior",
                rowsPerPage: "Filas por Pagina:",
                displayRows: "of",
            },
            toolbar: {
                search: "Buscar",
                downloadCsv: "Download CSV",
                print: "Print",
                viewColumns: "View Columns",
                filterTable: "Filtrar Tabla",
            },
            filter: {
                all: "Todos",
                title: "FILTROS",
                reset: "Restablecer",
            },
            viewColumns: {
                title: "Show Columns",
                titleAria: "Show/Hide Table Columns",
            },
            selectedRows: {
                text: "fila(s) seleccionadas",
                delete: "Borrar",
                deleteAria: "Quitar Filas Seleccionadas",
            },
        }
    }

    return (
        <div>
            <div>
                <h2>Notificaciones</h2>
                <div>
                    <MUIDataTable
                        title={"Listado de Notificaciones"}
                        data={notificationsRows}
                        columns={columns}
                        options={options}
                    />
                </div>

            </div>
            <Grid Container>
                <DialogContainer open={open}  ><NotificationDetail notification={notificationSelected} handleClose={handleClose} dataForm={dataForm} /></DialogContainer>
            </Grid>
        </div>
    )
}
