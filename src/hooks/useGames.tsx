import { useState, useEffect } from "react";
import apiClient from "../api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface fetchedAPIResults {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<fetchedAPIResults>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, [errors]);

  return { games, errors };
};

export default useGames;
