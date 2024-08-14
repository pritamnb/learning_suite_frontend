import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SparkAdaFilesState {
    loading: boolean;
    output: string | null;
    error: { error: any; details: any } | null;
}

const initialState: SparkAdaFilesState = {
    loading: false,
    output: null,
    error: null,
};

const sparkAdaFilesSlice = createSlice({
    name: 'sparkAdaFiles',
    initialState,
    reducers: {
        runSparkAdaFilesRequest: (state) => {
            state.loading = true;
            state.output = null;
            state.error = null;
        },
        runSparkAdaFilesSuccess: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.output = action.payload;
        },
        runSparkAdaFilesFailure: (state: any, action: PayloadAction<{ error: any; details: any }>) => {
            console.log("action : ", action);

            state.loading = false;
            state.error = action?.payload;
        },
    },
});

export const {
    runSparkAdaFilesRequest,
    runSparkAdaFilesSuccess,
    runSparkAdaFilesFailure,
} = sparkAdaFilesSlice.actions;

export default sparkAdaFilesSlice.reducer;
