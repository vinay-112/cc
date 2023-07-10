import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"7"} shadow={"base"} bgColor={"blackAlpha.900"} spacing="30px"  >
      <Button variant={"unstyled"} color={"#F1E5AC"} _hover={{ color: "teal.500" }}  >
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"#F1E5AC"} _hover={{ color: "teal.500" }}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"#F1E5AC"} _hover={{ color: "teal.500" }}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
