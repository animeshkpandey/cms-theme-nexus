import { Flex, Text } from "@mantine/core";
import useData from "../hooks/useData";

export default function Footer() {
  const { meta } = useData();
  return (
    <footer>
      <Flex py="md" px={{ base: "md", md: "3em" }}>
        <Text fz="sm">&copy; 2025 {meta.legalName}. All Rights Reserved.</Text>
      </Flex>
    </footer>
  );
}
