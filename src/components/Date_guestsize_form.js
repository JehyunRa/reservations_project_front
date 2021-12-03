import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DateAdapter from '@mui/lab/AdapterMoment';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicSelect() {
  const [guestSize, setGuestSize] = React.useState('');
  const [date, setDate] = React.useState(null);

  const navigate = useNavigate();
  const url = "../restaurants/" + useParams().id + "/reservations/confirm_page=true"

  const handleGuestSizeChange = (event) => {
    setGuestSize(event.target.value);
  };

  return (
    <form className="dateGuestSizeForm">
      <hr />
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          label="Reservation Date"
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <Box sx={{ margin:'auto', width:230 }}>
        <FormControl fullWidth>
          <InputLabel id="guest-size-input-label">Guest Size</InputLabel>
          <Select
            labelId="guest-size-input-label"
            id="guest-size-select"
            value={guestSize}
            label="Guest Size"
            onChange={handleGuestSizeChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <hr />
      <Stack spacing={2} margin='auto' width={200}>
        <Button 
          variant="contained"
          onClick={() => navigate(url, { replace: true })}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
}