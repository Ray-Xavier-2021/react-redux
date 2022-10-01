// Import create slice to create reducer
import { createSlice } from "@reduxjs/toolkit";

// Set initialState value for easy use
const initialStateValue = ''

const themeSlice = createSlice({
    name: 'theme',
    initialState: { value: initialStateValue },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload
        },
    },
})

// Export  action
export const { changeColor } = themeSlice.actions
// Export reducer so access to store is granted
export default themeSlice.reducer