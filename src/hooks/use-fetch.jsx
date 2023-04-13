import { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import api from '../services/api';
import { endpoints } from '../services';

// This hook is used to fetch data from the API and store it in AsyncStorage.
export const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const netInfo = await NetInfo.fetch();
                if (!netInfo.isConnected) {
                    throw new 'No internet connection'();
                }

                const lastModified = await AsyncStorage.getItem(
                    endpoint + '_last_modified'
                );
                const headers = lastModified
                    ? { 'If-Modified-Since': lastModified }
                    : {};

                const response = await api.get(endpoints[endpoint], {
                    headers,
                });
                if (response.status === 200) {
                    await AsyncStorage.setItem(
                        endpoint,
                        JSON.stringify(response.data)
                    );
                    await AsyncStorage.setItem(
                        endpoint + '_last_modified',
                        response.headers['last-modified'] ||
                            new Date().toUTCString()
                    );
                    setData(response.data);
                }
            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return [data, loading, error];
};

export default useFetch;
