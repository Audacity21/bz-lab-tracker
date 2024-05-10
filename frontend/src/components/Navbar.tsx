import { AppBar, Toolbar, Typography } from '@material-ui/core';
import FileUpload from './FileUpload';
import Filter from './Filter';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Being Zero</Typography>
                <div style={{ marginLeft: 'auto' }}>
                    <FileUpload />
                    <Filter />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;