import { useState, useEffect } from "react";
import apiClient from "../api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface fetchedAPIResults {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsloading(true);
    apiClient
      .get<fetchedAPIResults>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setIsloading(false));
    return () => controller.abort();
  }, [errors]);

  return { games, errors, isLoading };
};

export default useGames;
