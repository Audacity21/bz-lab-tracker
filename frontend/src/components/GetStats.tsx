import { useState } from 'react';
import { Container, Paper, Grid, makeStyles, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
  },
  topPerformersPaper: {
    backgroundColor: theme.palette.success.light,
  },
  bottomPerformersPaper: {
    backgroundColor: theme.palette.error.light,
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  dialogContent: {
    maxHeight: '60vh',
    overflowY: 'auto',
  },
}));

const GetStats = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [selectedSolvedCount, setSelectedSolvedCount] = useState(0);

  const data: any[] = JSON.parse(localStorage.getItem('fileData') || "[]");

  const getTopPerformers = () => {
    const sortedData = [...data].sort((a, b) => b['SCORE'] - a['SCORE']);
    return sortedData.slice(0, 5);
  };

  const getBottomPerformers = () => {
    const sortedData = [...data].sort((a, b) => a['SCORE'] - b['SCORE']);
    return sortedData.slice(0, 5);
  };

  const pivotTable: any = {};

  data.forEach(entry => {
    const solvedCount = entry['SOLVED'];
    const username = entry['USERNAME'];
    
    if (!pivotTable[solvedCount]) {
      pivotTable[solvedCount] = [];
    }
    
    pivotTable[solvedCount].push(username);
  });

  const handleOpenModal = (solvedCount: number) => {
    setSelectedSolvedCount(solvedCount);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className={`${classes.paper} ${classes.topPerformersPaper}`}>
            <h1 style={{marginBottom: 10}}>Top 5 performers</h1>
            <ul className={classes.list}>
              {getTopPerformers().map((performer, index) => (
                <li key={index} className={classes.listItem}>
                  {index + 1}. {performer.USERNAME} - {performer.SOLVED}
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className={`${classes.paper} ${classes.bottomPerformersPaper}`}>
            <h1 style={{marginBottom: 10}}>Top 5 underperformers</h1>
            <ul className={classes.list}>
              {getBottomPerformers().map((performer, index) => (
                <li key={index} className={classes.listItem}>
                  {index + 1}. {performer.USERNAME} - {performer.SOLVED}
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Paper elevation={3} className={classes.paper}>
          <h1 style={{marginBottom: 10}}>Pivot Table</h1>
          <ul className={classes.list}>
            {Object.keys(pivotTable).map((solvedCount, index) => (
              <li key={index} className={classes.listItem} style={{ cursor: "pointer"}} onClick={() => handleOpenModal(parseInt(solvedCount))}>
                Solved {solvedCount} - {pivotTable[solvedCount].length} users
              </li>
            ))}
          </ul>
          <Dialog
            open={openModal}
            onClose={handleCloseModal}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle>Users with {selectedSolvedCount} solved problems:</DialogTitle>
            <DialogContent dividers className={classes.dialogContent}>
              <ul className={classes.list}>
                {pivotTable[selectedSolvedCount] && pivotTable[selectedSolvedCount].map((username: string, index: number) => (
                  <li key={index}>{username}</li>
                ))}
              </ul>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className={classes.paper}>
            <h1 style={{marginBottom: 10}}>Overall Stats</h1>
            <ul className={classes.list}>
              <li className={classes.listItem}>Total Users: {data.length}</li>
              <li className={classes.listItem}>Average Solved Problems: {data.reduce((acc, curr) => acc + curr['SOLVED'], 0) / data.length}</li>
              <li className={classes.listItem}>Highest Solved Count: {Math.max(...data.map(entry => entry['SOLVED']))}</li>
              </ul>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default GetStats;
