import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/navbar.js';
import { withStyles } from '@material-ui/core';
import SimpleTable from '../components/table';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { CSVLink } from 'react-csv';

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
        <Grid id="area-full" container spacing={32}>
          <Grid id="area-navbar" item xs={12}>
            <Grid container>
              <NavBar />
            </Grid>
          </Grid>
          <Grid id="area-selectinput" item xs={12}>
            <Grid container spacing={24}>
              <Grid item>
                <FormControl className={classes.formControl}>
                  <InputLabel>Age</InputLabel>
                  <Select
                    value={10}
                    onChange={this.handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

              </Grid>
              <Grid item>
                <FormControl className={classes.formControl}>
                  <InputLabel>Sex</InputLabel>
                  <Select
                    value={10}
                    onChange={this.handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid id="area-detailtable" item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <div style={{ display: 'block', lineHeight: '4em' }}>
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
                  <CSVLink data="" style={{ float: 'right', textDecoration: 'none' }}>Save</CSVLink>
                </div>
              </Grid>
              <Grid item xs={12}>
                <SimpleTable />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);