import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUser, createUser, signOut, checkAuth } from './authAPI';
import { updateUser} from '../user/userAPI'

const initialState = {
  loggedInUserToken: null,
  status: 'idle',
  error:null,
  userChecked:false
};


export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const loginUserAsync = createAsyncThunk(
  'user/loginUser',
  async (loginInfo,{rejectWithValue}) => {
    try{
      const response = await loginUser(loginInfo);
      return response.data;
    }catch(error){
     return rejectWithValue(error)
    }

  }
);

export const checkAuthAsync = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try{
      const response = await checkAuth();
      return response.data;
    }catch(error){
     console.log(error)
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
      .addCase(loginUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUserToken = action.payload;
      })
      .addCase(loginUserAsync.rejected, (state,action) => {
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
      .addCase(checkAuthAsync.pending, (state) => {
        state.status = 'loading';
        
      })
      .addCase(checkAuthAsync.fulfilled, (state,action) => {
        state.status = 'idle';
        state.loggedInUserToken = action.payload;
        state.userChecked = true;
      })
      .addCase(checkAuthAsync.rejected, (state,action) => {
        state.status = 'idle';
        state.userChecked = true;
      })
  },
});

export const { increment} = authSlice.actions;

export const selectLoggedInUser = (state)=>state.auth.loggedInUserToken
export const selectError = (state)=>state.auth.error
export const selectUserChecked = (state)=>state.auth.userChecked


export const selectCount = (state) => state.auth.value;



export default authSlice.reducer;
