import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

export const ExpandableText = ({ content }: { content: string }) => {
  const [expanded, setExpanded] = useState(false);
  if (content.length < 300)
    return <Text dangerouslySetInnerHTML={{ __html: content }} />;
  else {
    if (expanded) {
      return (
        <>
          <Text dangerouslySetInnerHTML={{ __html: content }} />
          <Button onClick={() => setExpanded(false)} className="primary">
            Show Less
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Text
            dangerouslySetInnerHTML={{
              __html: content.substring(0, 300) + "...",
            }}
          />
          <Button onClick={() => setExpanded(true)} className="primary">
            Show More
          </Button>
        </>
      );
    }
  }
};
