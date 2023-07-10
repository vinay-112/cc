import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import img11 from "../assets/img11.jpeg";
const avatarSrc = img11;

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}  color={"#F1E5AC"}  >About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
            color={"#F1E5AC"}
            
          >
            Best place to check your queries about crypto world.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text color={"#F1E5AC"}  > Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
