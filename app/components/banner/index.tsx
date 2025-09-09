import { Carousel } from "@mantine/carousel";
import { Flex, Text } from "@mantine/core";

export default function Banner() {
  return (
    <Carousel withIndicators w="100%" h={600} bg="brand.0">
      <Carousel.Slide>
        <Flex
          w="100%"
          p="md"
          h={600}
          direction="column"
          justify="center"
          align="center"
        >
          <Text fz="h1">Nexus Theme</Text>
          <Text fz="md">by saasflair cms</Text>
        </Flex>
      </Carousel.Slide>
      <Carousel.Slide>
        <Flex
          w="100%"
          p="md"
          h={600}
          direction="column"
          justify="center"
          align="center"
        >
          <Text fz="h1">Nexus Theme</Text>
          <Text fz="md" ta="center">
            Light & Elegant Theme.
          </Text>
        </Flex>
      </Carousel.Slide>
      <Carousel.Slide>
        <Flex
          w="100%"
          p="md"
          h={600}
          direction="column"
          justify="center"
          align="center"
        >
          <Text fz="h1">Nexus Theme</Text>
          <Text fz="md" ta="center">
            Download now from saasflair marketplace.
          </Text>
        </Flex>
      </Carousel.Slide>
    </Carousel>
  );
}
