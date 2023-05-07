import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mockupEvents } from "../data/event";
import { mockupPlaces } from "../data/place";
import { mockupRoutes } from "../data/route";
import { mockupCategories } from "../data/category";

const useStorage = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStorage = async () => {
      setLoading(true);
      try {
        const data = await AsyncStorage.getItem(endpoint);
        if(data){
          if(event===endpoint){setData(mockupEvents)}
          //setData(JSON.parse(data) || []);
        }
        else{
          switch (endpoint) {
            case "event":
              setData(mockupEvents);
              break;
            case "place":
              setData(mockupPlaces);
              break;
            case "route":
              setData(mockupRoutes);
            break;
            case "category":
              setData(mockupCategories);
            break;
            default:
              setData(JSON.parse(data) || []);
          }
        }
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
