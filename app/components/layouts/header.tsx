import { ActionIcon, Divider, Flex, Group, Image, Text } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandX,
  IconClockFilled,
  IconMailFilled,
  IconMapPinFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";
import { Link } from "react-router";

import useData from "../hooks/useData";

export default function Header() {
  const { meta, contact, menus } = useData();
  return (
    <header>
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
      <Divider color="gray.2" />

      <Flex
        py="md"
        px={{ base: "md", md: "3em" }}
        w="100%"
        justify="space-between"
      >
        <Image src={meta.logo} w={150} />
        <Group gap="xl">
          <nav>
            <Group display={{ base: "none", sm: "flex" }} gap="2em">
              {menus.map((menu: any) => (
                <Link key={menu.id} to={menu.path}>
                  <Text fz="sm" fw={400}>
                    {menu.title}
                  </Text>
                </Link>
              ))}
            </Group>
          </nav>
          <Group>
            <ActionIcon radius="lg" color="fincun" variant="light">
              <IconBrandFacebook width="70%" height="70%" />
            </ActionIcon>
            <ActionIcon radius="lg" color="fincun" variant="light">
              <IconBrandX width="70%" height="70%" />
            </ActionIcon>
            <ActionIcon radius="lg" color="fincun" variant="light">
              <IconBrandLinkedin width="70%" height="70%" />
            </ActionIcon>
          </Group>
        </Group>
      </Flex>
    </header>
  );
}
