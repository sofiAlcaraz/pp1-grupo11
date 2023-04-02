import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Webcam from 'react-webcam';
import { useCallback, useRef, useState } from "react";
import { IconButton, Modal } from '@mui/material';
import { SignalCellularNoSimOutlined } from '@mui/icons-material';

const theme = createTheme();

const videoConstraints = {
    width: "400",
    height: "300",
    margin: "5px"
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export default function Register() {

    const [imgSrc, setImgSrc] = useState(null);
    const webcamRef = useRef(null);
    const [user, setUser] = useState(null);
    const [botton, setBotton] = useState(true);
    const [openModal, setOpenModal] = React.useState(false);


    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        setBotton(false)
    }, [webcamRef, setImgSrc]);




    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: data.get('name'),
                lastName: data.get('lastName'),
                email: data.get('email'),
                password: data.get('password'),
                photo: imgSrc
            })
        };
        fetch('https://k9lcx9c6n9.execute-api.us-east-1.amazonaws.com/dev/user', requestOptions)
            .then(response => {
                if(response.status==403){
                    setOpenModal(true)
                    return;          
                  }
                  response.json().then((data) => {
                    setUser(data); window.location.replace("/home")  
                  })
            })
    };

    return (
        <>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    ¡Ya existe esta cuenta!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        ¿Querés ingresar a tu cuenta?
                        <Link href="/" variant="body2">
                            Ingresa aqui
                        </Link>
                    </Typography>
                </Box>
            </Modal>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Crea tu cuenta
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="name"
                                        fullWidth
                                        id="name"
                                        label="Nombre"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField

                                        fullWidth
                                        id="lastName"
                                        label="Apellido"
                                        name="Last Name"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        type="email"
                                        label="Direccion de Email"
                                        name="email"

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        o
                                        fullWidth
                                        name="password"
                                        label="Contraseña"
                                        type="password"
                                        id="password"
                                        onChange={(e) => setBotton(e.nativeEvent.data == null ? true : false)}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <div style={{ display: 'flex', margin: '5px' }}>
                                        {(!imgSrc) ? <Webcam
                                            audio={false}
                                            screenshotFormat="image/jpeg"
                                            ref={webcamRef}
                                            videoConstraints={videoConstraints}
                                        >
                                        </Webcam> :
                                            (
                                                <img style={{ margin: '5px' }}
                                                    src={imgSrc}
                                                />
                                            )
                                        }
                                    </div>

                                    {imgSrc ? <Button color={'error'} onClick={() => { setImgSrc(null); setBotton(true) }} s startIcon={<DeleteIcon />}>
                                        Descartar foto
                                    </Button> : <Button onClick={capture}>Tomar foto</Button>}


                                </Grid>

                            </Grid>
                            <Button
                                disabled={botton}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Crear cuenta
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/" variant="body2">
                                        Ya tienes cuenta? Accede aqui!
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>
        </>
    );
}