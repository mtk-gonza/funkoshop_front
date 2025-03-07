import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/authSlice.js';
import licencesReducer from './slices/licenceSlice.js';
import productsReducer from './slices/productSlice.js';
import categoriesReducer from './slices/categorySlice.js';

const authPersistConfig = { key: 'auth', storage };
const licencesPersistConfig = { key: 'licences', storage };
const productsPersistConfig = { key: 'products', storage };
const categoriesPersistConfig = { key: 'categories', storage };

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    licences: persistReducer(licencesPersistConfig, licencesReducer),
    products: persistReducer(productsPersistConfig, productsReducer),
    categories: persistReducer(categoriesPersistConfig, categoriesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export default store;