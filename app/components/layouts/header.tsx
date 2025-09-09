import { ActionIcon, Flex, Group, Text } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandLinkedinFilled,
  IconBrandX,
} from "@tabler/icons-react";

export default function Header() {
  return (
    <header>
      <Flex p="md" justify="space-between">
        <Text fz="xl" fw={800}>
          Nexus
        </Text>
        <Group>
          <nav>Menu</nav>
          <Group>
            <ActionIcon radius="lg" color="brand" variant="light">
              <IconBrandFacebook width="70%" height="70%" />
            </ActionIcon>
            <ActionIcon radius="lg" color="brand" variant="light">
              <IconBrandX width="70%" height="70%" />
            </ActionIcon>
            <ActionIcon radius="lg" color="brand" variant="light">
              <IconBrandLinkedinFilled width="70%" height="70%" />
            </ActionIcon>
          </Group>
        </Group>
      </Flex>
    </header>
  );
}
