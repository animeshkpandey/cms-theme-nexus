import {
  ActionIcon,
  Button,
  Divider,
  Drawer,
  Group,
  NavLink,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandX,
  IconMenu2,
} from "@tabler/icons-react";
import { Link } from "react-router";

import useData from "~/hooks/useData";

export default function Mobile() {
  const { menus } = useData();

  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Button variant="default" onClick={open}>
        <IconMenu2 />
      </Button>

      <Drawer
        opened={opened}
        onClose={close}
        position="top"
        size="xl"
        title={<Text fw={600}>MENUS</Text>}
      >
        {menus.map((menu) => (
          <NavLink
            px={0}
            label={menu.title}
            childrenOffset={12}
            renderRoot={({ className, ...others }) => (
              <Link to={menu.slug} className={className} {...others} />
            )}
          >
            {menu.subMenus.length > 0 &&
              menu.subMenus.map((s) => (
                <NavLink
                  label={s.title}
                  renderRoot={({ className, ...others }) => (
                    <Link to={s.slug} className={className} {...others} />
                  )}
                />
              ))}
          </NavLink>
        ))}

        <Divider my="lg" />

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
        {/* <Group grow>
          <Button color="brand" size="sm" radius="sm" variant="light">
            Sign in
          </Button>
          <Button color="brand" size="sm" radius="sm">
            Get started
          </Button>
        </Group> */}
      </Drawer>
    </>
  );
}
