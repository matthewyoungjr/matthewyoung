import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const Header = () => {
  const paths = [
    { label: "home", path: "/" },
    { label: "blog", path: "/blog" },
    { label: "thoughts", path: "/thoughts" },
    { label: "projects", path: "/projects" },
  ];

  return (
    <Flex display="flex" justify="between" align="center">
      <Box>
        <Heading as="h3">Matthew Y.</Heading>
        <Text className="text-gray-500 " as="p" size="4">
          Front-End Developer
        </Text>
      </Box>

      <Box>
        {paths.map((path, index) => (
          <Text key={index} weight="medium" size="5">
            <Link href={path.path}> {path.label} </Link>
          </Text>
        ))}
      </Box>
    </Flex>
  );
};

export default Header;
