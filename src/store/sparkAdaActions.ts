import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BACKEND_URL = "http://localhost:8000"

export const runSparkAdaCode = createAsyncThunk(
    'sparkAda/runSparkAdaCode',
    async (code: string, { rejectWithValue }) => {

        try {
            console.log("code", code, "\n", BACKEND_URL);

            const response = await axios.post(`${BACKEND_URL}/api/run-spark`, { code });

            return response?.data?.output;
        } catch (error: any) {
            console.log("error", error);

            return rejectWithValue(error?.response?.data);
        }
    }
);
