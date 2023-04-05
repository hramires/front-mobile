import { useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import axios from "axios";

/**
 * This hook is used to fetch data from an API and store it in AsyncStorage
 * It also checks if the device is connected to the internet
 * If it is, it fetches the data from the API and stores it in AsyncStorage
 * If it isn't, it fetches the data from AsyncStorage
 *
 * @param {*} url
 * @param {*} key
 * @returns  {data, loading, error}
 */
const useApiData = (url, key) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const storedData = await AsyncStorage.getItem(key);
        console.log("storedData", storedData);
        if (storedData) {
          setData(JSON.parse(storedData));
        }
        const netInfo = await NetInfo.fetch();
        console.log("netInfo.isConnected", netInfo.isConnected);
        if (netInfo.isConnected) {
          console.log("fetching data from API");
          const response = await axios.get(url);
          console.log("response", response);
          const apiData = await response.data;
          console.log("apiData", apiData);
          setData(apiData);
          await AsyncStorage.setItem(key, JSON.stringify(apiData));
        }
      } catch (error) {
        console.log("error", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, key]);

  return [data, loading, error];
};

export default useApiData;
