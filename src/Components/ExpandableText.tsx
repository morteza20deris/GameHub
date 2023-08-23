import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const textLimit = 300;

export const ExpandableText = ({ content }: { content: string }) => {
  const [expanded, setExpanded] = useState(false);

  if (content.includes("Español")) {
    content = content.substring(0, content.indexOf("Español"));
  }

  let desc = content;
  expanded ? (desc = content) : (desc = desc.substring(0, textLimit));

  return (
    <>
      <Text dangerouslySetInnerHTML={{ __html: desc }} />

      <Button
        size="sm"
        onClick={() => setExpanded(!expanded)}
        className="primary"
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </>
  );
};
