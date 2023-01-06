import React from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";

export const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navLinks = [
    {
      id: 1,
      title: "About",
      href: "/about"
    },
    {
      id: 2,
      title: "Blog",
      href: "/blogs"
    },
    {
      id: 3,
      title: "Projects",
      href: "/projects"
    },
    {
      id: 4,
      title: "Home",
      href: "/"
    },
    {
      id: 5,
      title: "Tech-Stacks",
      href: "/techStack"
    }
  ];
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Container maxW='container.xl' py={{ base: "3", lg: "4" }}>
      <Flex justify={"space-between"}>
        <HStack spacing='12'>
          <Text>Suresh Koochana</Text>
          {isDesktop && (
            <ButtonGroup variant='ghost' spacing='12'>
              <Button>Home</Button>
              <Button aria-current='page'>About</Button>
              <Button>Blogs</Button>
              <Button>Projects</Button>
              <Button>My Uses</Button>
            </ButtonGroup>
          )}
        </HStack>
      </Flex>
    </Container>
  );
};
