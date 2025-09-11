import {
  IconArrowRight,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import {
  Button,
  Flex,
  Grid,
  Group,
  List,
  Text,
  TextInput,
} from "@mantine/core";
import { Link } from "react-router";

import useData from "~/hooks/useData";

export default function Footer() {
  const { meta, contact, footer } = useData();
  return (
    <footer>
      <Flex
        w="100%"
        px={{ base: "md", md: "3em" }}
        py="6em"
        direction="column"
        bg="gray.0"
      >
        <Grid w="100%">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Text fw={600} mb="lg">
              Our Office
            </Text>
            <List spacing="sm">
              <List.Item>
                <Group>
                  <IconMapPin size={20} />
                  <Text w="250" fz="sm">
                    {contact.address}
                  </Text>
                </Group>
              </List.Item>
              <List.Item>
                <Group>
                  <IconMail size={20} />
                  <Text fz="sm">{contact.email}</Text>
                </Group>
              </List.Item>
              <List.Item>
                <Group>
                  <IconPhone size={20} />
                  <Text fz="sm">{contact.phone}</Text>
                </Group>
              </List.Item>
              <List.Item>
                <Group>
                  <IconClock size={20} />
                  <Text fz="sm">{contact.timing}</Text>
                </Group>
              </List.Item>
            </List>
          </Grid.Col>
          {/* Columns */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Grid gutter="3em">
              {footer.menus.map((menu) => (
                <Grid.Col key={menu.title} span={{ base: 12, md: 6 }}>
                  <Text fw={600} mb="lg">
                    {menu.title}
                  </Text>
                  <List spacing="sm">
                    {menu.subMenus.map((s) => (
                      <List.Item key={s.name}>
                        <Link to={s.slug}>
                          <Text fz="sm">{s.name}</Text>
                        </Link>
                      </List.Item>
                    ))}
                  </List>
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 2 }}>
            <Text fw={600}>Newsletter</Text>
            <Text fz="xs" mb="sm">
              For latest news and updates.
            </Text>
            <Group>
              <TextInput w="200" placeholder="Your email" />
              <Button
                color="fincun"
                rightSection={<IconArrowRight size={16} />}
              >
                Sign up
              </Button>
            </Group>
          </Grid.Col>
        </Grid>
      </Flex>

      {/* Copyright */}
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        px={{ base: "md", md: "3em" }}
        py="lg"
      >
        <Text fz="sm">&copy; 2025 {meta.legalName}. All Rights Reserved.</Text>
      </Flex>
    </footer>
  );
}
