import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define the redux-persist config
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  serialize: true,
};

// Define the initial state of the store
const initialState = {
  regions: [],
  places: {},
  routes: {},
  events: {},
  categories: {},
};

// Define the reducer that will update the store
const rootReducer = (state, action) => {
  switch (action.type) {
    case "SET_REGIONS":
      return { ...state, regions: action.payload };
    case "SET_PLACES":
      return { ...state, places: action.payload };
    case "SET_ROUTES":
      return { ...state, routes: action.payload };
    case "SET_EVENTS":
      return { ...state, events: action.payload };
    case "SET_CATEGORIES":
      return { ...state, events: action.payload };
    default:
      return state;
  }
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store using the persisted reducer
const store = configureStore({ reducer: persistedReducer });

// Create the persisted store
const persistor = persistStore(store);

// Export the store and the persisted store
export { store, persistor };
