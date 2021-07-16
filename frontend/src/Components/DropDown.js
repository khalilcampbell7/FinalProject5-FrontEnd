import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function DropDown() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Filter State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Alabama</MenuItem>
          <MenuItem value={20}>Alaska</MenuItem>
          <MenuItem value={30}>Arizona</MenuItem>
          <MenuItem value={30}>Arkansas</MenuItem>
          <MenuItem value={30}>California</MenuItem>
          <MenuItem value={30}>Colorado</MenuItem>
          <MenuItem value={30}>Connecticut</MenuItem>
          <MenuItem value={30}>Delaware</MenuItem>
          <MenuItem value={30}>Florida</MenuItem>
          <MenuItem value={30}>Georgia</MenuItem>
          <MenuItem value={30}>Hawaii</MenuItem>
          <MenuItem value={30}>Idaho</MenuItem>
          <MenuItem value={30}>Illinois</MenuItem>
          <MenuItem value={30}>Indiana</MenuItem>
          <MenuItem value={30}>Iowa</MenuItem>
          <MenuItem value={30}>Kansas</MenuItem>
          <MenuItem value={30}>Kentucky</MenuItem>
          <MenuItem value={30}>Louisiana</MenuItem>
          <MenuItem value={30}>Maine</MenuItem>
          <MenuItem value={30}>Maryland</MenuItem>
          <MenuItem value={30}>Massachusetts</MenuItem>
          <MenuItem value={30}>Michigan</MenuItem>
          <MenuItem value={30}>Minnesota</MenuItem>
          <MenuItem value={30}>Mississippi</MenuItem>
          <MenuItem value={30}>Missouri</MenuItem>
          <MenuItem value={30}>Montana</MenuItem>
          <MenuItem value={30}>Nebraska</MenuItem>
          <MenuItem value={30}>Nevada</MenuItem>
          <MenuItem value={30}>New Hampshire</MenuItem>
          <MenuItem value={30}>New Mexico</MenuItem>
          <MenuItem value={30}>New York</MenuItem>
          <MenuItem value={30}>North Carolina</MenuItem>
          <MenuItem value={30}>North Dakota</MenuItem>
          <MenuItem value={30}>Ohio</MenuItem>
          <MenuItem value={30}>Oklahoma</MenuItem>
          <MenuItem value={30}>Ohio</MenuItem>
          <MenuItem value={30}>Oregon</MenuItem>
          <MenuItem value={30}>Ohio</MenuItem>
          <MenuItem value={30}>Pennsylvania</MenuItem>
          <MenuItem value={30}>Rhode Island</MenuItem>
          <MenuItem value={30}>South Carolina</MenuItem>
          <MenuItem value={30}>South Dakota</MenuItem>
          <MenuItem value={30}>Tennessee</MenuItem>
          <MenuItem value={30}>Texas</MenuItem>
          <MenuItem value={30}>Utah</MenuItem>
          <MenuItem value={30}>Vermont</MenuItem>
          <MenuItem value={30}>Virginia</MenuItem>
          <MenuItem value={30}>Washington</MenuItem>
          <MenuItem value={30}>West Virginia</MenuItem>
          <MenuItem value={30}>Wisconsin</MenuItem>
          <MenuItem value={30}>Wyoming</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}