import {
  IconClockFilled,
  IconMailFilled,
  IconMapPinFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";
import { Divider, Flex, Group, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import useData from "../../../hooks/useData";
import Mobile from "./mobile";
import Desktop from "./desktop";

export default function Header() {
  const isLargeScreen = useMediaQuery("(min-width: 46em)");
  const { meta, contact } = useData();

  return (
    <header>
      {isLargeScreen && (
        <Flex
          display={{ base: "none", sm: "flex" }}
          py="md"
          px="3em"
          justify="space-between"
        >
          <Group>
            <Group gap="xs">
              <IconMapPinFilled color="#0076b6" size={16} />
              <Text fz="xs" fw={500}>
                {contact.address}
              </Text>
            </Group>
            <Group gap="xs">
              <IconClockFilled color="#0076b6" size={16} />
              <Text fz="xs" fw={500}>
                {contact.timing}
              </Text>
            </Group>
          </Group>

          <Group>
            <Group gap="xs">
              <IconMailFilled color="#0076b6" size={16} />
              <Text fz="xs" fw={500}>
                {contact.email}
              </Text>
            </Group>
            <Group gap="xs">
              <IconPhoneFilled color="#0076b6" size={16} />
              <Text fz="xs" fw={500}>
                {contact.phone}
              </Text>
            </Group>
          </Group>
        </Flex>
      )}

      <Divider color="gray.2" />

      <Flex
        py="md"
        px={{ base: "md", md: "3em" }}
        w="100%"
        justify="space-between"
      >
        <Image src={meta.logo} w={150} />

        {isLargeScreen ? <Desktop /> : <Mobile />}
      </Flex>
    </header>
  );
}
