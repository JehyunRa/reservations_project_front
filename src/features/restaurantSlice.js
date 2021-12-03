import { createSlice } from '@reduxjs/toolkit';
import sampleRestaurants from '../sample/sample_restaurants';

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: { value: sampleRestaurants },
  reducers: {
    loadDatabase: (state, action) => {
      state.value = action.payload
    }
  }
});

export default restaurantSlice.reducer;