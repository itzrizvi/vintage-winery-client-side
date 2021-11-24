import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WineBarIcon from '@mui/icons-material/WineBar';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsIcon from '@mui/icons-material/Settings';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PaymentsIcon from '@mui/icons-material/Payments';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 240;
function Dashboard(props) {
    // Use Auth
    const { logOut, user, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // Main Dashboard Drawer
    const drawer = (
        <div>
            <div className="logo mt-3 dashboard-logo">
                <h2><span>Vintage</span> Winery</h2>
            </div>
            <Toolbar />
            <Divider />

            <List>
                <ListItem as={Link} to="/dashboard" className='list-item' >
                    <ListItemIcon className="dashboard-side-links">
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText className="dashboard-side-links">
                        Welcome
                    </ListItemText>
                </ListItem>

                {admin && <ListItem as={Link} to="/dashboard/manageallorders" className='list-item' >
                    <ListItemIcon className="dashboard-side-links">
                        <ManageAccountsIcon />
                    </ListItemIcon>
                    <ListItemText className="dashboard-side-links">
                        Manage All Orders
                    </ListItemText>
                </ListItem>}

                {admin && <ListItem as={Link} to="/dashboard/addnewwine" className='list-item' >
                    <ListItemIcon className="dashboard-side-links">
                        <WineBarIcon />
                    </ListItemIcon>
                    <ListItemText className="dashboard-side-links">
                        Add New Wine
                    </ListItemText>
                </ListItem>}

                {admin && <ListItem as={Link} to="/dashboard/makeadmin" className='list-item' >
                    <ListItemIcon className="dashboard-side-links">
                        <AdminPanelSettingsIcon />
                    </ListItemIcon>
                    <ListItemText className="dashboard-side-links">
                        Make an Admin
                    </ListItemText>
                </ListItem>}

                {admin && <ListItem as={Link} to="/dashboard/managewines" className='list-item' >
                    <ListItemIcon className="dashboard-side-links">
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText className="dashboard-side-links">
                        Manage Wines
                    </ListItemText>
                </ListItem>}

                {!admin && <ListItem as={Link} to="/dashboard/myorders" className='list-item' >
                    <ListItemIcon className="dashboard-side-links">
                        <CardGiftcardIcon />
                    </ListItemIcon>
                    <ListItemText className="dashboard-side-links">
                        My Orders
                    </ListItemText>
                </ListItem>}

                {!admin && <ListItem as={Link} to="/dashboard/givereview" className='list-item' >
                    <ListItemIcon className="dashboard-side-links">
                        <ReviewsIcon />
                    </ListItemIcon>
                    <ListItemText className="dashboard-side-links">
                        Give a Review
                    </ListItemText>
                </ListItem>}

                {!admin && <ListItem as={Link} to="/dashboard/payments" className='list-item' >
                    <ListItemIcon className="dashboard-side-links">
                        <PaymentsIcon />
                    </ListItemIcon>
                    <ListItemText className="dashboard-side-links">
                        Payments
                    </ListItemText>
                </ListItem>}

                <ListItem as={Link} to="/home" className='list-item' >
                    <ListItemIcon className="dashboard-side-links">
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText className="dashboard-side-links">
                        Go Back To Home
                    </ListItemText>
                </ListItem>

                <ListItem as={Button} onClick={logOut} className='list-item' >
                    <ListItemIcon className="dashboard-side-links">
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText className="dashboard-side-links">
                        Logout
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />

                    </IconButton>
                    <Typography variant="h6" style={{ fontSize: '15px', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '5px' }} noWrap component="div">
                        {user.displayName}'s Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
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
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {/* Dashboard Drawer Routes */}
                <Outlet />
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;