import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../api-client";

interface fetchedAPIResults <T>{
  count: number;
  results: T[];
}

const useData = <T>(endPoint:string) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsloading(true);
    apiClient
      .get<fetchedAPIResults<T>>(endPoint, { signal: controller.signal })
      .then((res) => setData(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setIsloading(false));
    return () => controller.abort();
  }, [endPoint]);

  return { data, errors, isLoading };
};

export default useData;
