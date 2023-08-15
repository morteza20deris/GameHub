import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../api-client";

interface fetchedAPIResults <T>{
  count: number;
  results: T[];
}

const useData = <T>(endPoint:string,requestConfig?:AxiosRequestConfig, deps?:unknown[]) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsloading(true);
    apiClient
      .get<fetchedAPIResults<T>>(endPoint, { signal: controller.signal, ...requestConfig })
      .then((res) => setData(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setIsloading(false));
    return () => controller.abort();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps?[...deps]:[]);

  return { data, errors, isLoading };
};

export default useData;
