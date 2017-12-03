import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
// Adding material design components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui-icons/Search';
const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  button: {
    margin: theme.spacing.unit * 1
  }
});

//@withStyles(styles)
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }
  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({ term: event.target.value });
    // console.log(this.state.term);
  }
  render() {
    // console.log(this.props);
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <TextField
            id="search"
            label="&#x1F50E; Search anything"
            type="search"
            className={classes.textField}
            margin="normal"
            value={this.state.term}
            onChange={this.onInputChange}
          />

          <Button type="submit" color="primary" className={classes.button}>
            Search
          </Button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// export default SearchBar;

export default connect(null, mapDispatchToProps)(withStyles(styles)(SearchBar));
