import { configureStore } from '@reduxjs/toolkit';
import sparkAdaReducer from './sparkAdaReducer';

const store = configureStore({
    reducer: {
        sparkAda: sparkAdaReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
