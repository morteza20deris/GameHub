import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../api-client";

interface Genre {
  id: number;
  name: string;
}

interface fetchedAPIResults {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [errors, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsloading(true);
    apiClient
      .get<fetchedAPIResults>("/genres", { signal: controller.signal })
      .then((res) => setGenres(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setIsloading(false));
    return () => controller.abort();
  }, []);

  return { genres, errors, isLoading };
};

export default useGenres;
