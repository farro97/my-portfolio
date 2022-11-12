import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbTPOpenHouse from "../public/images/works/tp-open.png";
import thumbInnovation from "../public/images/works/innovation-challenge.png";

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={1} gap={6}>
        <Section>
          <WorkGridItem
            id="tp-open-house"
            title="TP Open House 2021 Mobile App"
            thumbnail={thumbTPOpenHouse}
          >
            In my final year in TP, my team and I developed an app called TP
            Open House 2021. Due to Covid-19, graduating students from
            secondary, ITE, other tertiary schools, and parents unable to visit
            Temasek Poly physically and the TP Open House became virtual.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="polyfintech 100 api"
            title="Polyfintech 100 API Hackathon 2020 (TP)"
            thumbnail={thumbInnovation}
          >
            Took part in the hackathon competition and compete against four
            other local polytechnics to develop Fintech prototypes using Open
            APIs from the industry to address real-world problem statements.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="accounting innovation challenge"
            title="Accounting Innovation Challenge 2019 (TP)"
            thumbnail={thumbInnovation}
          >
            Took part in a hackathon competition to develop a mobile app for the
            Accountant Sector to keep track of their skills level, find jobs,
            and upgrade their skills.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
export { getServerSideProps } from "../components/chakra";
