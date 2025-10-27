// src/features/users/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Async thunk to fetch GitHub members
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch(
    'https://api.github.com/orgs/react-native-community/members?v=3'
  );

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  const data = await response.json();
  return data;
});

const initialState:any = {
    users: [],
    loading: false,
    error: null,
}


const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Failed to fetch users';
      });
  },
});

export default userSlice.reducer;
