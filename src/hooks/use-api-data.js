import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";

const useApiData = (url, key) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const storedData = await AsyncStorage.getItem(key);
        if (storedData) {
          setData(JSON.parse(storedData));
        }
        const netInfo = await NetInfo.fetch();
        if (netInfo.isConnected) {
          const response = await fetch(url);
          const apiData = await response.json();
          setData(apiData);
          await AsyncStorage.setItem(key, JSON.stringify(apiData));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, key]);

  return { data, loading, error };
};

export default useApiData;
