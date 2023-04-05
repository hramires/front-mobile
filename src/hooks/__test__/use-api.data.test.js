import { renderHook } from "@testing-library/react-hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import axios from "axios";

import useApiData from "./useApiData";

jest.mock("@react-native-async-storage/async-storage");
jest.mock("@react-native-community/netinfo");
jest.mock("axios");

describe("useApiData", () => {
  beforeEach(() => {
    AsyncStorage.getItem.mockClear();
    AsyncStorage.setItem.mockClear();
    NetInfo.fetch.mockClear();
    axios.get.mockClear();
  });

  test("should fetch data from API when device is connected to internet", async () => {
    NetInfo.fetch.mockReturnValueOnce({ isConnected: true });
    axios.get.mockResolvedValueOnce({ data: { foo: "bar" } });
    const key = "test-key";
    const url = "http://test.com/api/data";
    const { result, waitForNextUpdate } = renderHook(() =>
      useApiData(url, key)
    );
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual({ foo: "bar" });
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify({ foo: "bar" })
    );
  });

  test("should fetch data from AsyncStorage when device is not connected to internet", async () => {
    NetInfo.fetch.mockReturnValueOnce({ isConnected: false });
    AsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify({ foo: "bar" }));
    const key = "test-key";
    const url = "http://test.com/api/data";
    const { result, waitForNextUpdate } = renderHook(() =>
      useApiData(url, key)
    );
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual({ foo: "bar" });
    expect(axios.get).not.toHaveBeenCalled();
  });

  test("should handle errors when fetching data from API", async () => {
    NetInfo.fetch.mockReturnValueOnce({ isConnected: true });
    const error = new Error("Something went wrong");
    axios.get.mockRejectedValueOnce(error);
    const key = "test-key";
    const url = "http://test.com/api/data";
    const { result, waitForNextUpdate } = renderHook(() =>
      useApiData(url, key)
    );
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(error);
    expect(result.current.data).toBe(null);
    expect(AsyncStorage.setItem).not.toHaveBeenCalled();
  });
});
