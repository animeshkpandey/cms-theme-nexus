import {
  ActionIcon,
  Button,
  Chip,
  Flex,
  Grid,
  GridCol,
  Group,
  Image,
  Paper,
  Space,
  Stack,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import {
  IconCheck,
  IconChecks,
  IconGrowth,
  IconUserCheck,
  IconUsers,
} from "@tabler/icons-react";

import useData from "~/hooks/useData";

export default function AboutUs() {
  const { aboutUs, coreStrengthSection, teamSection, promiseSection } =
    useData();
  return (
    <>
      <section>
        <Grid py="6em" px={{ base: "md", md: "3em" }} gutter="xl">
          <GridCol span={{ base: 12, md: 6 }}>
            <Paper shadow="md">
              <Image src={aboutUs.image} />
            </Paper>
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }} px={{ base: "md", md: "4em" }}>
            <Stack justify="center">
              <Chip size="md" variant="outline">
                {aboutUs.tag}
              </Chip>

              <Title order={1}>{aboutUs.title}</Title>
              <Text
                ta="justify"
                dangerouslySetInnerHTML={{ __html: aboutUs.subTitle }}
              />

              <Space my="md" />

              <Paper p="md" withBorder>
                <Tabs color="fincun" defaultValue={aboutUs.tabs[0].label}>
                  <Tabs.List grow>
                    {aboutUs.tabs.map((tab) => (
                      <Tabs.Tab key={tab.label} value={tab.label}>
                        <Text>{tab.label}</Text>
                      </Tabs.Tab>
                    ))}
                  </Tabs.List>
                  {aboutUs.tabs.map((tab) => (
                    <Tabs.Panel key={tab.label} value={tab.label} py="lg">
                      <Text>{tab.content}</Text>
                    </Tabs.Panel>
                  ))}
                </Tabs>
              </Paper>
            </Stack>
          </GridCol>
        </Grid>
      </section>

      <section>
        <Flex
          py="6em"
          px={{ base: "md", md: "3em" }}
          direction="column"
          align="center"
        >
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Chip size="md" variant="outline">
                {coreStrengthSection.tag}
              </Chip>
              <Space my="md" />
              <Title order={1}>{coreStrengthSection.title}</Title>
              <Space my="2em" />
              <Text>{coreStrengthSection.subTitle}</Text>
              <Space my="2em" />
              <Flex justify={{ base: "center", md: "start" }}>
                <Button color="fincun" size="lg">
                  {coreStrengthSection.cta}
                </Button>
              </Flex>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Grid gutter="xl">
                {coreStrengthSection.features.map((f) => (
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Paper p="md" withBorder>
                      <IconCheck color="#0076b6" />
                      <Space my="xs" />
                      <Text fz="xl" fw={600}>
                        {f.title}
                      </Text>
                      <Space my="xs" />
                      <Text>{f.subTitle}</Text>
                      <Space my="lg" />
                      <Flex justify={{ base: "center", md: "start" }}>
                        <Button color="fincun">{f.cta}</Button>
                      </Flex>
                    </Paper>
                  </Grid.Col>
                ))}
              </Grid>
            </Grid.Col>
          </Grid>
        </Flex>
      </section>

      <section>
        <Flex w="100%" my="2em" px={{ base: "md", md: "3em" }}>
          <Grid w="100%">
            <Grid.Col span={{ base: 12, md: 3 }}>
              <Paper p="md" withBorder>
                <Group>
                  <ActionIcon color="#0076b6" radius="xl">
                    <IconUsers style={{ height: "70%", width: "70%" }} />
                  </ActionIcon>
                  <Text fw={600}>Expert & Dedicated Team</Text>
                </Group>
              </Paper>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <Paper p="md" withBorder>
                <Group>
                  <ActionIcon color="#0076b6" radius="xl">
                    <IconChecks style={{ height: "70%", width: "70%" }} />
                  </ActionIcon>
                  <Text fw={600}>Proven Track Record</Text>
                </Group>
              </Paper>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <Paper p="md" withBorder>
                <Group>
                  <ActionIcon color="#0076b6" radius="xl">
                    <IconUserCheck style={{ height: "70%", width: "70%" }} />
                  </ActionIcon>
                  <Text fw={600}>Client-centric solutions</Text>
                </Group>
              </Paper>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <Paper p="md" withBorder>
                <Group>
                  <ActionIcon color="#0076b6" radius="xl">
                    <IconGrowth style={{ height: "70%", width: "70%" }} />
                  </ActionIcon>
                  <Text fw={600}>Data-driven insights</Text>
                </Group>
              </Paper>
            </Grid.Col>
          </Grid>
        </Flex>
      </section>

      <section>
        <Flex
          py="6em"
          px={{ base: "md", md: "3em" }}
          direction="column"
          align="center"
        >
          <Chip size="md" variant="outline">
            {teamSection.tag}
          </Chip>
          <Space my="md" />
          <Title order={1} maw="600" ta="center">
            {teamSection.title}
          </Title>
          <Space my="md" />
          <Text maw="700" ta="center">
            {teamSection.subTitle}
          </Text>
          <Space my="3em" />

          <Grid w="80%">
            {teamSection.members.map((m) => (
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Stack p="md">
                  <Text>{m.name}</Text>
                  <Paper shadow="md">
                    <Image src={m.image} />
                  </Paper>
                </Stack>
              </Grid.Col>
            ))}
          </Grid>
        </Flex>
      </section>

      <section>
        <Flex
          py="6em"
          px={{ base: "md", md: "3em" }}
          direction="column"
          align="center"
        >
          <Chip size="md" variant="outline">
            {promiseSection.tag}
          </Chip>
          <Space my="md" />
          <Title order={1} maw="600" ta="center">
            {promiseSection.title}
          </Title>
          <Space my="md" />

          <Text
            ta="center"
            maw="700"
            dangerouslySetInnerHTML={{ __html: promiseSection.subTitle }}
          />
          <Space my="3em" />
          <Button color="fincun" size="lg">
            {promiseSection.cta}
          </Button>
        </Flex>
      </section>
    </>
  );
}
