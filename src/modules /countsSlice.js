import {} from '@reduxjs/toolkit';

const countsSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state - 1
  }
});

export const { increment, decrement } = countsSlice.actions;
export default countsSlice.reducer;
