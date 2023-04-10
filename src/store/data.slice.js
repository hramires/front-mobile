// Define the initial state of the store
const initialState = {
  regions: [],
  places: {},
  routes: {},
  events: {},
  categories: {},
};

// Define the redux-persist config
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  serialize: true,
};

// Define the reducer that will update the store
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setRegions: (state, action) => {
      state.regions = action.payload;
    },
    setPlaces: (state, action) => {
      state.regions = action.payload;
    },
    setRoutes: (state, action) => {
      state.regions = action.payload;
    },
    setEvents: (state, action) => {
      state.regions = action.payload;
    },
    setCategories: (state, action) => {
      state.regions = action.payload;
    },
  },
});

export const { setRegions, setPlaces, setRoutes, setEvents, setCategories } =
  dataSlice.actions;

export const selectRegions = (state) => state.data.regions;

export const selectPlaces = (state) => state.data.places;

export const selectRoutes = (state) => state.data.routes;

export const selectEvents = (state) => state.data.events;

export const selectCategories = (state) => state.data.categories;

export default dataSlice.reducer;
