import { AppBar, Toolbar, Typography } from '@material-ui/core';
import FileUpload from './FileUpload';
import Filter from './Filter';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">BZ Lab Tracker</Typography>
                <div style={{ marginLeft: 'auto', display: "flex", justifyContent: "space-between", alignItems: "center", width: "150px" }}>
                    <FileUpload />
                    <Filter />
                    <Link to="/getstats" style={{ color: "white", textDecoration: "none" }}>GetStats</Link>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;