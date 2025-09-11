import {
  ActionIcon,
  Box,
  Button,
  Chip,
  Flex,
  Grid,
  GridCol,
  Group,
  Image,
  List,
  Paper,
  Space,
  Stack,
  Tabs,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import {
  IconCheck,
  IconChecks,
  IconGrowth,
  IconMenu,
  IconUserCheck,
  IconUsers,
} from "@tabler/icons-react";
import React from "react";

import Banner from "~/components/banner";
import useData from "~/hooks/useData";

export default function Home() {
  const { aboutSection, whySection, whatSection } = useData();
  const [what, setWhat] = React.useState<string>(
    "Wealth Assessment & Portfolio Optimization"
  );
  return (
    <>
      <section>
        <Box pb="6em">
          <Banner />
        </Box>
      </section>

      <section>
        <Grid py="6em" px={{ base: "md", md: "3em" }} gutter="xl" bg="gray.0">
          <GridCol span={{ base: 12, md: 6 }}>
            <Paper shadow="md">
              <Image src={aboutSection.image} />
            </Paper>
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }} px={{ base: "md", md: "4em" }}>
            <Stack justify="center">
              <Chip size="md" variant="outline">
                {aboutSection.tag}
              </Chip>

              <Title order={1}>{aboutSection.title}</Title>
              <Text
                ta="justify"
                dangerouslySetInnerHTML={{ __html: aboutSection.subTitle }}
              />

              <Space my="md" />

              <Paper p="md" bg="gray.0" withBorder>
                <Tabs color="fincun" defaultValue={aboutSection.tabs[0].label}>
                  <Tabs.List grow>
                    {aboutSection.tabs.map((tab) => (
                      <Tabs.Tab key={tab.label} value={tab.label}>
                        <Text>{tab.label}</Text>
                      </Tabs.Tab>
                    ))}
                  </Tabs.List>
                  {aboutSection.tabs.map((tab) => (
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
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Chip size="md" variant="outline">
                {whySection.tag}
              </Chip>
              <Space my="md" />
              <Title order={1}>{whySection.title}</Title>
              <Space my="2em" />
              <Text>{whySection.subTitle}</Text>
              <Space my="2em" />
              <Flex justify={{ base: "center", md: "start" }}>
                <Button color="fincun" size="lg">
                  {whySection.cta}
                </Button>
              </Flex>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Grid gutter="xl">
                {whySection.features.map((f) => (
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
        <Flex
          pb="6em"
          px={{ base: "md", md: "3em" }}
          direction="column"
          align="center"
        >
          <Chip size="md" variant="outline">
            {whatSection.tag}
          </Chip>
          <Space my="md" />
          <Title order={1} maw="600" ta="center">
            {whatSection.title}
          </Title>
          <Space my="3em" />

          <Grid w="100%" gutter="xl">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap="xl">
                {whatSection.tabs.map((tab) => (
                  <Paper
                    key={tab.label}
                    px="md"
                    py="lg"
                    bg={what === tab.label ? "fincun.6" : "#fff"}
                    withBorder
                    onClick={() => setWhat(tab.label)}
                    style={{ cursor: "pointer" }}
                  >
                    <Group>
                      <IconMenu
                        color={what === tab.label ? "#fff" : "#0076b6"}
                      />
                      <Text
                        fz="sm"
                        fw={600}
                        ta="left"
                        c={what === tab.label ? "#fff" : "gray.8"}
                      >
                        {tab.label}
                      </Text>
                    </Group>
                  </Paper>
                ))}
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 8 }}>
              {whatSection.tabs.map((tab) => (
                <Flex key={tab.label}>
                  {what === tab.label && (
                    <Grid w="100%" gutter="xl">
                      <Grid.Col span={{ base: 12, md: 5 }}>
                        <Paper shadow="md">
                          <Image src={tab.image} />
                        </Paper>
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, md: 7 }}>
                        <Stack>
                          <Text fz="xl" fw={600}>
                            {tab.title}
                          </Text>
                          <Text>{tab.subTitle}</Text>
                          <List>
                            {tab.content.map((c, i) => (
                              <Group key={i} my="md">
                                <IconCheck
                                  color="#0076b6"
                                  size={18}
                                  stroke={3}
                                />
                                <Text>{c}</Text>
                              </Group>
                            ))}
                          </List>
                          <Flex>
                            <Button color="fincun">Read more</Button>
                          </Flex>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  )}
                </Flex>
              ))}
            </Grid.Col>
          </Grid>
        </Flex>
      </section>

      <section>
        <Flex w="100%" h="200" bg="fincun.6" mb="-100"></Flex>
      </section>
      <section>
        <Flex
          pb="6em"
          px={{ base: "md", md: "3em" }}
          direction="column"
          align="center"
        >
          <Paper p="xl" withBorder>
            <Chip size="sm" variant="outline" ta="center">
              Get in touch
            </Chip>
            <Space my="md" />
            <Title order={1} maw="600" ta="center">
              Request a Call-back
            </Title>
            <Space my="3em" />

            <Grid gutter="lg">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput placeholder="Your name" />
                <Space my="lg" />
                <TextInput placeholder="Your email" />
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput placeholder="Your phone no" />
                <Space my="lg" />
                <TextInput placeholder="Your subject" />
              </Grid.Col>

              <Grid.Col span={12}>
                <Textarea placeholder="Message" />
                <Button color="fincun" my="md" w="100%">
                  Submit now
                </Button>
              </Grid.Col>
            </Grid>
          </Paper>
        </Flex>
      </section>
    </>
  );
}
