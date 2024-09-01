
import { configureStore } from '@reduxjs/toolkit';
import sparkAdaFilesReducer from './sparkAdaFilesReducer'; // update the import for the reducer
import sparkAdaReducer from './sparkAdaReducer';

const store = configureStore({
    reducer: {
        sparkAdaFiles: sparkAdaFilesReducer,
        sparkAda: sparkAdaReducer,
    },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
