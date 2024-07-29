import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const Header = () => {
  const paths = [
    { label: "blog", path: "/blog" },
    { label: "thoughts", path: "/thoughts" },
    { label: "projects", path: "/projects" },
  ];

  return (
    <Container className="pl-5 pt-10" size="2">
      <Flex display="flex" justify="between" align="center">
        <Box>
          <Heading as="h3">Matthew Y.</Heading>
          <Text className="text-gray-500 " as="p" size="4">
            Front-End Developer
          </Text>
        </Box>

        <Box>
          {paths.map((path, index) => (
            <Text key={index} className="">
              <Link href={path.path}>{path.label} </Link>
            </Text>
          ))}
        </Box>
      </Flex>
    </Container>
  );
};

export default Header;
