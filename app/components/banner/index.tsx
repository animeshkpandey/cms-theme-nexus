import { Button, Flex, Image, Space, Text, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import useData from "../hooks/useData";

export default function Banner() {
  const { banner } = useData();
  return (
    <Carousel withIndicators w="100%" h={600}>
      {banner.map((b, i) => (
        <Carousel.Slide key={i}>
          <Flex
            style={{
              position: "relative",
              height: 600,
              backgroundImage: `url(${b.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflow: "hidden",
            }}
          >
            <Flex
              pos="absolute"
              w={{ base: "100%", md: "50%" }}
              px={{ base: "3em", md: "3em" }}
              h={600}
              direction="column"
              justify="center"
            >
              <Title fz="h1">{b.title}</Title>
              <Space my="md" />
              <Text fz="md">{b.subTitle}</Text>
              <Space my="xl" />
              <Flex>
                <Button size="lg">{b.cta}</Button>
              </Flex>
            </Flex>
          </Flex>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
