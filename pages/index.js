import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Text,
  Box,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Skills from "../components/skills";

export default function Home() {
  return (
    <Layout>
      <Container maxW={"1000px"}>
        {/* PROFILE IMAGE */}
        <Box flexShrink={1} mt={{ base: 4, md: 5 }} textAlign="left">
          <Box display="inline-block" overflow="hidden">
            <Image
              src="/images/george.jpg"
              alt="Profile image"
              objectFit="cover"
              boxSize="300px"
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
            <p>Software Engineer | Photographer</p>
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
          I occasionally do
          <NextLink href="https://fitrimahdon.myportfolio.com/work" passHref>
            <Link target="_blank"> photography </Link>
          </NextLink>
          and editing using Lightroom and Photoshop software. I love to play
          guitar too. 🎸
        </Text>
      </Box>

      
      {/* BIO YEAR */}
      <Section mb={6} p={3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <table>
        <tbody>
        <tr >
          <td style={{ width: "130px", display: "table", fontWeight: 'bold'}}>2023 - Present</td>
          <td>NCS Group - Software Engineer</td>
        </tr>
        <tr >
          <td style={{ width: "100px", display: "table", fontWeight: 'bold'}}>2021 - 2023</td>
          <td>Singapore Police Force - TransCom (NSF)</td>
        </tr>
        <tr>
          <td style={{ display: "table" ,textAlign: 'right', fontWeight: 'bold'}}>2020 - 2021</td>
          <td>AiDA Technologies - Software Engineer</td>
        </tr>
        <tr>
          <td style={{ display: "table", textAlign: 'right', fontWeight: 'bold' }}>2021</td>
          <td>Temasek Polytechnic - Financial Business Informatics</td>
        </tr>
        <tr>
          <td style={{ display: "table", textAlign: 'right', fontWeight: 'bold' }}>2018</td>
          <td>
            ITE Higher Nitec - Business Information System with Merit and Gold
            Medallist
          </td>
        </tr>
        <tr>
          <td style={{ display: "table", textAlign: 'right', fontWeight: 'bold' }}>2015</td>
          <td>
          Junyuan Secondary School (&apos;O&apos; level)
          </td>
        </tr>
        </tbody>
      </table>
      
      </Section>
      {/* SKILLS */}

      <Section>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Skills />

        <BioSection>
          <BioYear>Software Experience & Framework</BioYear>
          Ionic, Spring Boot (Java), Flask (Python), Adobe Photoshop, Lightroom
          Adobe
        </BioSection>

        <BioSection>
          <BioYear>Programming Languages</BioYear>
          Python, Java, C++, JavaScript, Typescript, VBA, PHP, SQL
        </BioSection>
      </Section>
    </Layout>
  );
}
