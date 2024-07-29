import React from "react";
import { Heading } from "@radix-ui/themes";

const Header = () => {
  return (
    <>
      <Heading
        as="h1"
        align="center"
        className="pt-20 pr-2"
        size="7"
        wrap="balance"
        weight="medium"
      >
        I'm a Front-End Developer — a builder focused on creating user-friendly
        products and experiences for the web.
      </Heading>
    </>
  );
};

export default Header;
