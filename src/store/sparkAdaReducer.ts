import { createSlice } from '@reduxjs/toolkit';
import { runSparkAdaCode } from './sparkAdaActions';

interface SparkAdaState {
    loading: boolean;
    output: string | null;
    error: any | null;
}

const initialState: SparkAdaState = {
    loading: false,
    output: null,
    error: null,
};

const sparkAdaSlice = createSlice({
    name: 'sparkAda',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(runSparkAdaCode.pending, (state) => {
                state.loading = true;
                state.output = null;
                state.error = null;
            })
            .addCase(runSparkAdaCode.fulfilled, (state, action) => {
                state.loading = false;
                state.output = action.payload;
            })
            .addCase(runSparkAdaCode.rejected, (state: any, action) => {
                console.log("State : ", action);

                state.loading = false;
                state.error = action?.payload;
            });
    },
});

export default sparkAdaSlice.reducer;
