import { useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import api from '../services/api';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...initialState, loading: true };
    case 'FETCH_SUCCESS':
      return { ...initialState, data: action.payload };
    case 'FETCH_ERROR':
      return { ...initialState, error: action.payload };
    default:
      return state;
  }
};

// This hook is used to fetch data from the API and store it in AsyncStorage.
export const useFetch = (endpoint) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      // Set loading to true
      dispatch({ type: 'FETCH_INIT' });
      try {
        const headers = {};
        // Get the last modified date from AsyncStorage and add it to the headers
        const lastModified = await AsyncStorage.getItem(
          endpoint + '_last_modified'
        );
        if (lastModified) {
          headers['If-Modified-Since'] = lastModified;
        }
        // Get the data from the API
        const response = await api.get(endpoint, { headers });

        // If the data hasn't changed since the last request, return the data from AsyncStorage
        if (response.status === 304) {
          const storedData = await AsyncStorage.getItem(endpoint);
          dispatch({ type: 'FETCH_SUCCESS', payload: JSON.parse(storedData) });
        }

        // If the data has changed, return the data from the API and store it in AsyncStorage
        if (response.status === 200) {
          dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
          await AsyncStorage.setItem(endpoint, JSON.stringify(response.data));
          await AsyncStorage.setItem(
            JSON.stringify(
              endpoint + '_last_modified',
              response.headers['last-modified'] || new Date().toUTCString()
            )
          );
        }
      } catch (error) {
        // If there is an error, return the data from AsyncStorage
        const storedData = await AsyncStorage.getItem(endpoint);
        if (storedData) {
          dispatch({ type: 'FETCH_SUCCESS', payload: JSON.parse(storedData) });
        } else {
          // If there is no data in AsyncStorage, return the error
          dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
      }
    };
    fetchData();
  }, [endpoint]);

  return [state.data, state.loading, state.error];
};

export default useFetch;
