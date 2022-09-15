import * as React from 'react';
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNotifications } from '../../redux/actions';
import ConfirmIcon from '@mui/icons-material/ThumbUpAlt';
import NoConfirmIcon from '@mui/icons-material/ThumbUpOffAlt';
import Pay from '@mui/icons-material/Paid';
import DialogContainer from '../Layout/DialogContainer'
import NotificationForm from './NotificationForm'

export default function NotificationsAdmin() {

    const dispatch = useDispatch()
    
    //traigo las notificaciones que estan en el estado
    let notificationsState = useSelector(state => state.notifications)

    //la primera vez cargo las notificaciones en el estado si esta vacio
    useEffect(() => {
            dispatch(getNotifications(8))
            console.log("Paso por useEffect");
    }, [dispatch])



    const [notificationSelected, setnotificationSelected] = useState({})
    const [mode, setMode] = useState("new")
    const [title, setTitle] = useState("Crear de Notificación")
    const [open, setOpen] = useState(false);

    function handleClickOpen() {
        setOpen(true);
    };

    function handleClose() {
        setOpen(false);
    };

    function handleOnclickNewEdit(notification, mode, title) {
        console.log("Notif tomada de tabla",notification);
        setnotificationSelected(notification)
        setMode(mode)
        setTitle("Editar Notificación")
        handleClickOpen()
    }
    // console.log(notifications);
    let notificationsRows = []
    notificationsState[0]?.students?.map((student , index) => {
        var studentName =student.firstNames
        let key =1
            if(student.notifications.length !== 0)
            {
                student?.notifications?.map((notification) =>{
                        let fecha=notification.creationDate.split('-')
                        let fechaFormated = `${fecha[2]}/${fecha[1]}/${fecha[0]}`
                    notificationsRows.push([fechaFormated, notification.subject, notification.body, studentName, 
                            notification?.check===null  ? "" : notification?.check?<ConfirmIcon color='success' sx={{ width: 30, height: 30 }}/>:<NoConfirmIcon color='disabled' sx={{ width: 30, height: 30 }}/>,
                            notification?.pay ? <Pay sx={{ width: 30, height: 30 }}/>:"",
                        <div key={key}>
                            <Button variant="outlined" onClick={() => handleOnclickNewEdit(notification, "edit")} >Editar</Button>
                        </div>])
                        key++
                })
            }
    })


    // let notificationsRow = notifications ? notifications?.map((notification, index) => {
    //     return [notification.notificationDate, notification.subject, notification.body,  notification.check ? "Confirmada" : "Sin Confirmar",
    //     <div key={notification.idNotification}>
    //         <Button variant="outlined" onClick={() => handledOnClickDetail(notification)} >Detalle</Button>
    //     </div>
    //     ]
    // }) : []

    
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
                <DialogContainer open={open}  ><NotificationForm notification={notificationSelected} mode={mode} handleClose={handleClose} title={title}/></DialogContainer>
            </Grid>
        </div>
    )
}
