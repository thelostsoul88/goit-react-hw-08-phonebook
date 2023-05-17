import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { filterReducer } from './reducer';
import { contactsApi } from './contactsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authApi } from './auth/authApi';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactsApi.middleware,
];

const persistedAppReducer = persistReducer(authPersistConfig, authApi.reducer);

const appReducer = combineReducers({
  filter: filterReducer,
  auth: persistedAppReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout/fulfilled') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
