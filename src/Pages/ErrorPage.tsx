import { Center, Heading, Icon } from "@chakra-ui/react";
import { BiSad } from "react-icons/bi";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export const ErrorPage = () => {
  const err = useRouteError();

  return (
    <Center h={window.innerHeight} color="red">
      {isRouteErrorResponse(err) ? (
        <Heading>This Page Does Not Exist...</Heading>
      ) : (
        <Heading>Sorry Unexpected error has occurred</Heading>
      )}
      <Icon fontSize={50} as={BiSad} />
    </Center>
  );
};
