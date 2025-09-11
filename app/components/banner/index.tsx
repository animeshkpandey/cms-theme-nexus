import { Button, Flex, Space, Text, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";

import useData from "../../hooks/useData";

export default function Banner() {
  const isLargeScreen = useMediaQuery("(min-width: 46em)");

  const { banner } = useData();
  return (
    <Carousel
      withIndicators
      w="100%"
      h={600}
      emblaOptions={{ loop: true, align: "start" }}
    >
      {banner.map((b, i) => (
        <Carousel.Slide key={b.title}>
          <Flex
            style={{
              position: "relative",
              minHeight: 600,
              backgroundImage: `url(${b.image})`,
              backgroundPosition: isLargeScreen ? "center" : "center 150px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              overflow: "hidden",
            }}
          >
            <Flex
              pos={{ base: "relative", md: "absolute" }}
              w={{ base: "100%", md: "50%" }}
              px={{ base: "1em", md: "3em" }}
              py={{ base: "4em", md: "0em" }}
              mih={600}
              direction="column"
              justify={{ base: "start", md: "center" }}
            >
              <Title
                order={1}
                ta={{ base: "center", md: "start" }}
                fz={{ base: "2em", md: "3em" }}
              >
                {b.title}
              </Title>
              <Space my="md" />
              <Text fz="md" ta={{ base: "center", md: "start" }}>
                {b.subTitle}
              </Text>
              <Space my="xl" />
              <Flex justify={{ base: "center", md: "start" }}>
                <Button color="fincun" size="lg">
                  {b.cta}
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
