import React from "react";
import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { getYear } from "../utils/date";

const Footer = () => {
  const socials = [
    { label: " X / Twitter", path: "https://x.com/themattjnr" },
    {
      label: "LinkedIn",
      path: "https://www.linkedin.com/in/matthew-young-82a099213/",
    },
    { label: "E-mail", path: "mailto:mattyoungjnr@gmail.com" },
  ];

  const links = socials.map((link, index) => (
    <Link key={index} href={link.path} target="_blank">
      <Text size="4" weight="medium" className="underline underline-offset-4">
        {link.label}
      </Text>
    </Link>
  ));

  return (
    <Flex gapX="5" gapY="3" className="mt-20" align="center" wrap="wrap">
      {links}

      <Text weight="medium"> Matthew Y. | {getYear}</Text>
    </Flex>
  );
};

export default Footer;
