import { AppBar, Toolbar, Typography } from '@material-ui/core';
import FileUpload from './FileUpload';
import Filter from './Filter';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">BZ Lab Tracker</Typography>
                <div style={{ marginLeft: 'auto', display: "flex", justifyContent: "space-between", alignItems: "center", width: "150px" }}>
                    <FileUpload />
                    <Filter />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;