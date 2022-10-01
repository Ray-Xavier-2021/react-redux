// Import create slice to create reducer
import { createSlice } from "@reduxjs/toolkit";

// Set initialState value for easy use
const initialStateValue = { name: '', age: 0, email: ''}

const userSlice = createSlice({
    name: 'user',
    initialState: { value: initialStateValue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialStateValue
        },
    },
})

// Export login and logout action
export const { login, logout } = userSlice.actions
// Export reducer so access to store is granted
export default userSlice.reducer