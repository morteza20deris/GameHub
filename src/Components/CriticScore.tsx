import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let txtColor = "green";
  if (score > 50) {
    txtColor = "green";
  } else {
    txtColor = "yellow";
  }

  return (
    <Badge colorScheme={txtColor} paddingX={2} borderRadius={6} fontSize="14px">
      {score ? score : "Not Available"}
    </Badge>
  );
};

export default CriticScore;
