import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Text,
  Box,
  Button,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";



export default function Home() {
  return (
    <Layout>
      <Container maxW={"1000px"}>
        {/* Small INTRO */}

        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          w="500px"
          m={"auto"}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello, I&apos;m an Software Developer based in Singapore!
        </Box>

        {/* PROFILE IMAGE */}
        <Box flexShrink={1} mt={{ base: 4, md: 5 }} textAlign="left">
          <Box display="inline-block" overflow="hidden">
            <Image
              src="/images/george.jpg"
              alt="Profile image"
              objectFit="cover"
              boxSize="350px"
              borderRadius={"15px"}
            />
          </Box>
        </Box>
        {/* BIO AND NAME */}
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Fitri Mahdon
            </Heading>
            <p>Digital Craftsman ( Artist / Developer / Designer )</p>
          </Box>
        </Box>
      </Container>
      {/* INTRODUCTION */}
      <Box
        mb={6}
        p={3}
        mt={5}
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
        borderRadius="lg"
      >
        <Heading as="h3" variant="section-title">
          Intro
        </Heading>
        <Text>
          Tech enthusiast. Developed and published a mobile application for my
          school (TP Open House). Involved in multiple tech competitions. Worked
          in AI/ML industry as a Software Engineer and collaborated with a
          data-science team to incorporate AI/ML software with web technologies.
          Fine-tune automation software and increase its accuracy. Constantly
          learn new technologies and explore on data science technologies.
          Open-minded and keep myself updated with latest and fast changing
          technology.
        </Text>
        <br />
        <Text>
          Guided interns and assimilate them into the team. Imparted knowledge
          and experience about various technologies and tools that the company
          uses such as programming language, web-stacks, CI/CD DevOps, cloud
          services.
        </Text>
        <br />
        <Text>
          I occasionally do photography and editing using Lightroom and
          Photoshop software. Love to play guitar too.
          <NextLink href="https://fitrimahdon.myportfolio.com/work" passHref>
            <Link target="_blank">Dev as Life</Link>
          </NextLink>
        </Text>
      </Box>
      <Box align="left" my={4} justifyItems="space-between">
        <NextLink href="/works" passHref scroll={false}>
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            My portfolio
          </Button>
        </NextLink>
      </Box>
      {/* BIO YEAR */}
      <Box mb={6} p={3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2015</BioYear>
          Junyuan Secondary School (&apos;O&apos; level)
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          ITE Higher Nitec - Business Information System with Merit and Gold
          Medallist
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Temasek Polytechnic - Financial Business Informatics
        </BioSection>
        <BioSection>
          <BioYear>2020 - 2021</BioYear>
          Software Engineer - AiDA Technologies (Intern for 6 monthts and
          converted into Full-Time)
        </BioSection>
        <BioSection>
          <BioYear>2021-2023</BioYear>
          Singapore Police Force (NS) - TransCom
        </BioSection>
      </Box>
    </Layout>
  );
}
