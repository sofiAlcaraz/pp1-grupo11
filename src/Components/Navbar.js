import { AppBar, IconButton, Toolbar } from "@mui/material";

const Navbar = () => {
    return (

        <>
            <Box sx={{ flexGrow: 1,pb:'50px' }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        component={Link}
                        to={'/home'}
                        sx={{ mr: 2 }}
                    >
                    Home
                    </IconButton >
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )

}
export default Navbar;