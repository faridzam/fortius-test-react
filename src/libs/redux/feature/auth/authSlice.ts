import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { userTypes } from '../../../../app/auth/types/auth'
import type { RootState } from '../../store'

// Define a type for the slice state
export interface AuthState {
  token: string,
  user: userTypes
}

// Define the initial state using that type
const initialState: AuthState = {
  token: '',
  user: {
    id: 0,
    role: 0,
    name: '',
    email: '',
  }
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userTypes>) => {
      state.user = action.payload
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
  }
})

export const {setUser, setToken} = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.auth.user

export default authSlice.reducer