import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let txtColor = "green";
  let fontsize = "14px";

  if (score > 50) {
    txtColor = "green";
  } else {
    txtColor = "yellow";
  }
  if (!score) {
    txtColor = "red";
    fontsize = "11px";
  }
  return (
    <Badge
      colorScheme={txtColor}
      paddingX={2}
      borderRadius={6}
      fontSize={fontsize}
    >
      {score ? score : "N/A"}
    </Badge>
  );
};

export default CriticScore;
