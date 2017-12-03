import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel
} from 'material-ui/Table';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import DeleteIcon from 'material-ui-icons/Delete';
import FilterListIcon from 'material-ui-icons/FilterList';

import { Sparklines, SparklinesLine } from 'react-sparklines';

import charts from '../components/chart';

const styles = theme => ({
  spacer: {
    flex: '1 1 100%'
  },
  table: {
    minWidth: 800
  },
  tableWrapper: {
    overflowX: 'auto'
  },
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3
  },
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper
  },
  typo: theme.typography.button
});

const columnData = [
  {
    id: 'City',
    numeric: false,
    disablePadding: true,
    label: 'City'
  },
  {
    id: 'Temperature',
    numeric: true,
    disablePadding: false,
    label: 'Temperature'
  },
  { id: 'Pressure', numeric: true, disablePadding: false, label: 'Pressure' },
  { id: 'Humidity', numeric: true, disablePadding: false, label: 'Humidity' }
];

@withStyles(styles)
class WeatherList extends Component {
  static propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
  };

  renderCityData() {
    console.log('this props');
    console.log(this.props.weather);

    return this.props.weather.map(data => {
      return (
        <TableRow key={data.city.id}>
          <TableCell>{data.city.name} </TableCell>
          <TableCell>
            <Sparklines
              data={data.list.map(weather => {
                return weather.main.temp;
              })}
            >
              <SparklinesLine color="blue" />
            </Sparklines>
          </TableCell>

          <TableCell>
            <Sparklines
              data={data.list.map(weather => {
                return weather.main.pressure;
              })}
            >
              <SparklinesLine color="green" />
            </Sparklines>
          </TableCell>
          <TableCell>
            <Sparklines
              data={data.list.map(weather => {
                return weather.main.humidity;
              })}
            >
              <SparklinesLine color="#56b45d" />
            </Sparklines>
          </TableCell>

          <TableCell numeric />
        </TableRow>
      );
    });
  }
  render() {
    console.log(this.props);
    const { classes } = this.props;
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount
    } = this.props;
    return (
      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {columnData.map(column => {
                return (
                  <TableCell key={column.id} numeric={column.numeric}>
                    <TableSortLabel>{column.label}</TableSortLabel>
                  </TableCell>
                );
              }, this)}
            </TableRow>
          </TableHead>

          <TableBody>{this.renderCityData()}</TableBody>
        </Table>
      </Paper>
    );
  }
}

WeatherList.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    weather: state.weather
  };
};

//export default withStyles(styles)(WeatherList);
export default connect(mapStateToProps)(WeatherList);
