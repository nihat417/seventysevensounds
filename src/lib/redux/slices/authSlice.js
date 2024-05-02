import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const response = await fetch('https://musicappexample.azurewebsites.net/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log(data);
      console.log(!data.flag);
      if (!data.flag) { 
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async(userData,thunkAPI) =>{
    try{
      const response = await fetch("https://musicappexample.azurewebsites.net/api/auth/register",{
      method :'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    console.log(data);
    if (!data.flag) 
      throw new Error(data.title);
    }
    catch(error){
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload.error;
        if (action.payload.status === 400 && action.payload.title) {
          state.error.title = action.payload.title;
        }
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload.error;
        if (action.payload.status === 400 && action.payload.title) {
          state.error.title = action.payload.title;
        }
      });
  },
});

export const selectUser = (state) => state.auth.user;
export const selectLoading = (state) => state.auth.loading;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
