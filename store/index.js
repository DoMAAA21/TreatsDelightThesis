import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'auth', 
  storage: AsyncStorage, 
  whitelist: ['auth'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false, 
  }),
});

const persistor = persistStore(store); 

export { store, persistor };
