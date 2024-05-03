import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllMusics = createAsyncThunk('music/fetchAll',async (_, thunkAPI) => {
    try {
      const response = await fetch('https://musicappexample.azurewebsites.net/api/music/allmusics');
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const musicSlice = createSlice({
  name: 'music',
  initialState: {
    allMusics: [],
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMusics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllMusics.fulfilled, (state, action) => {
        state.loading = false;
        state.allMusics = action.payload.$values;
        console.log(action.payload)
      })
      .addCase(fetchAllMusics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const selectAllMusics = (state) => state.music.allMusics;
export const selectMusicLoading = (state) => state.music.loading;
export const selectMusicError = (state) => state.music.error;

export default musicSlice.reducer;
