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

export default function DropDown(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Choose State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          // onChange={handleChange}
          onChange={(e) => props.change(e)}
        >
          <MenuItem value={"Alabama"}>Alabama</MenuItem>
          <MenuItem value={"Alaska"}>Alaska</MenuItem>
          <MenuItem value={"Arizona"}>Arizona</MenuItem>
          <MenuItem value={"Arkansas"}>Arkansas</MenuItem>
          <MenuItem value={"California"}>California</MenuItem>
          <MenuItem value={"Colorado"}>Colorado</MenuItem>
          <MenuItem value={"Connecticut"}>Connecticut</MenuItem>
          <MenuItem value={"Delaware"}>Delaware</MenuItem>
          <MenuItem value={"Florida"}>Florida</MenuItem>
          <MenuItem value={"Georgia"}>Georgia</MenuItem>
          <MenuItem value={"Hawaii"}>Hawaii</MenuItem>
          <MenuItem value={"Idaho"}>Idaho</MenuItem>
          <MenuItem value={"Illinois"}>Illinois</MenuItem>
          <MenuItem value={"Indiana"}>Indiana</MenuItem>
          <MenuItem value={"Iowa"}>Iowa</MenuItem>
          <MenuItem value={"Kansas"}>Kansas</MenuItem>
          <MenuItem value={"Kentucky"}>Kentucky</MenuItem>
          <MenuItem value={"Louisiana"}>Louisiana</MenuItem>
          <MenuItem value={"Maine"}>Maine</MenuItem>
          <MenuItem value={"Maryland"}>Maryland</MenuItem>
          <MenuItem value={"Massachusetts"}>Massachusetts</MenuItem>
          <MenuItem value={"Michigan"}>Michigan</MenuItem>
          <MenuItem value={"Minnesota"}>Minnesota</MenuItem>
          <MenuItem value={"Mississippi"}>Mississippi</MenuItem>
          <MenuItem value={"Missouri"}>Missouri</MenuItem>
          <MenuItem value={"Montana"}>Montana</MenuItem>
          <MenuItem value={"Nebraska"}>Nebraska</MenuItem>
          <MenuItem value={"Nevada"}>Nevada</MenuItem>
          <MenuItem value={"New Hampshire"}>New Hampshire</MenuItem>
          <MenuItem value={"New Mexico"}>New Mexico</MenuItem>
          <MenuItem value={"New York"}>New York</MenuItem>
          <MenuItem value={"North Carolina"}>North Carolina</MenuItem>
          <MenuItem value={"North Dakota"}>North Dakota</MenuItem>
          <MenuItem value={"Ohio"}>Ohio</MenuItem>
          <MenuItem value={"Oklahoma"}>Oklahoma</MenuItem>
          <MenuItem value={"Oregon"}>Oregon</MenuItem>
          <MenuItem value={"Pennsylvania"}>Pennsylvania</MenuItem>
          <MenuItem value={"Rhode Island"}>Rhode Island</MenuItem>
          <MenuItem value={"South Carolina"}>South Carolina</MenuItem>
          <MenuItem value={"South Dakota"}>South Dakota</MenuItem>
          <MenuItem value={"Tennessee"}>Tennessee</MenuItem>
          <MenuItem value={"Texas"}>Texas</MenuItem>
          <MenuItem value={"Utah"}>Utah</MenuItem>
          <MenuItem value={"Vermont"}>Vermont</MenuItem>
          <MenuItem value={"Virginia"}>Virginia</MenuItem>
          <MenuItem value={"Washington"}>Washington</MenuItem>
          <MenuItem value={"West Virginia"}>West Virginia</MenuItem>
          <MenuItem value={"Wisconsin"}>Wisconsin</MenuItem>
          <MenuItem value={"Wyoming"}>Wyoming</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}