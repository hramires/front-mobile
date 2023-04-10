import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStorage = async () => {
      setLoading(true);
      try {
        const data = await AsyncStorage.getItem(endpoint);
        setData(JSON.parse(data) || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchStorage();
  }, [endpoint]);

  return [data, loading, error];
};

export default useStorage;
