import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUser, createUser, signOut } from './authAPI';
import { updateUser} from '../user/userAPI'

const initialState = {
  loggedInUserToken: null,
  status: 'idle',
  error:null
};


export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const checkUserAsync = createAsyncThunk(
  'user/checkUser',
  async (loginInfo,{rejectWithValue}) => {
    try{
      const response = await checkUser(loginInfo);
      return response.data;
    }catch(error){
     return rejectWithValue(error)
    }

  }
);


export const signOutAsync = createAsyncThunk(
  'user/signOut',
  async (userId) => {
    const response = await signOut(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    increment: (state) => {
     
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUserToken = action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUserToken = action.payload;
      })
      .addCase(checkUserAsync.rejected, (state,action) => {
        state.status = 'error';
        state.error=action.payload;
      })
     
      .addCase(signOutAsync.pending, (state) => {
        state.status = 'loading';
        
      })
      .addCase(signOutAsync.fulfilled, (state,action) => {
        state.status = 'idle';
        state.loggedInUserToken = null;
      })
      
      
  },
});

export const { increment} = authSlice.actions;

export const selectLoggedInUser = (state)=>state.auth.loggedInUserToken
export const selectError = (state)=>state.auth.error


export const selectCount = (state) => state.auth.value;



export default authSlice.reducer;
