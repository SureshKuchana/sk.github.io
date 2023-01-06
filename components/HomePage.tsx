import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Header } from "./Header";

export const HomePage = () => {
  return (
    <Box as='section' pb={{ base: "12", md: "24" }}>
      <Box
        as='nav'
        bg='bg-surface'
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Header />
      </Box>
    </Box>
  );
};
