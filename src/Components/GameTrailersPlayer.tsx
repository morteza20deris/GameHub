import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
export const GameTrailersPlayer = ({ gameId }: Props) => {
  const { data: Trailers } = useTrailers(gameId);
  if (Trailers?.results.length)
    return (
      <video
        poster={Trailers?.results[0]?.preview}
        about={Trailers?.results[0]?.name}
        src={Trailers?.results[0]?.data[480]}
        controls={true}
      />
    );
};
