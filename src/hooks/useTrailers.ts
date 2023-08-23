import { TrailerProps } from './../PropEntities/TrailerProps';
import APIClient from "../api-client"
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

 const useTrailers = (gameID:number) => {
    const getTrailers = new APIClient<TrailerProps>(`games/${gameID}/movies`);
   return useQuery({
        queryKey: ["trailers",gameID],
       queryFn: getTrailers.getAll,
        staleTime:ms("24h")
        
    })

}
export default useTrailers