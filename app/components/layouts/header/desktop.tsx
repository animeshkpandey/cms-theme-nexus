import {
  ActionIcon,
  Group,
  HoverCard,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandX,
  IconChevronDown,
} from "@tabler/icons-react";
import { Link } from "react-router";

import useData from "~/hooks/useData";

export default function Desktop() {
  const { menus } = useData();
  return (
    <Group gap="2em">
      {menus.map((menu) => (
        <HoverCard
          key={menu.title}
          withArrow
          transitionProps={{
            transition: "pop",
            duration: 300,
            timingFunction: "ease",
          }}
        >
          <HoverCard.Target>
            <Group gap="0.3em">
              <Link to={menu.slug}>
                <Text fz="sm" fw={500}>
                  {menu.title}
                </Text>
              </Link>
              {menu.subMenus.length > 0 && <IconChevronDown size={16} />}
            </Group>
          </HoverCard.Target>

          {menu.subMenus.length > 0 && (
            <HoverCard.Dropdown>
              {menu.subMenus.map((child) => (
                <Stack key={child.title} py="sm">
                  <Link to={child.slug}>
                    <Group>
                      <Image src={child.icon} w={36} radius="sm" />
                      <Stack gap={0}>
                        <Text fz="sm" fw={500}>
                          {child.title}
                        </Text>
                        <Text fz="xs" fw={500} c="dimmed">
                          {child.subTitle}
                        </Text>
                      </Stack>
                    </Group>
                  </Link>
                </Stack>
              ))}
            </HoverCard.Dropdown>
          )}
        </HoverCard>
      ))}

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
  );
}
