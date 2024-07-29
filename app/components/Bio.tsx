import { Box, Text } from "@radix-ui/themes";
import React from "react";

const Bio = () => {
  return (
    <>
      <Box className="" py="7" pr="5">
        <Text as="p" size="4" weight="light">
          I'm a seasoned frontend developer, and the co-founder of{" "}
          <Text as="span" weight="bold">
            ImmoSolus
          </Text>
          , a solution for real estate agencies to efficiently manage property.
        </Text>
      </Box>

      <Text size="4" weight="light">
        I have a passion for learning, and I am constantly seeking to improve my
        skills mostly through practice & reading. I'm interested in{" "}
        <Text as="span" weight="bold" className="text-sky-500">
          TypeScript
        </Text>{" "}
        and{" "}
        <Text as="span" weight="bold" className="text-cyan-500">
          Golang
        </Text>
        .
      </Text>
    </>
  );
};

export default Bio;
