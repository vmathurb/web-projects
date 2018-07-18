import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import NavBar from '../components/navbar.js';
import { withStyles, Paper } from '@material-ui/core';
import SimpleTable from '../components/table';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 400,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class App extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <div>
        <NavBar />
        <Divider />
        <Grid container className={classes.root} spacing={40} justify="flex-start">
          <Grid item xs={12}>
            <Paper />
          </Grid>
          <Divider />
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  value="checkedA"
                  classes={{
                    switchBase: classes.colorSwitchBase,
                    checked: classes.colorChecked,
                    bar: classes.colorBar,
                  }}
                />
              }
              label="Expand"
            />
            <SimpleTable />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);