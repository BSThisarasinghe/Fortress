import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    user: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserRequest(state) {
            state.loading = true;
        },
        fetchUserSuccess(state, action: PayloadAction<string | null>) {
            state.loading = false;
            state.user = action.payload;
        },
        fetchUserFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

// Export actions
export const {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
} = userSlice.actions;

// Export reducer
export default userSlice.reducer;
