import { Box, Container, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import styled from '@emotion/styled'

const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
  padding: "0 4px",
};

const ColImg = styled.div`
    @media (max-width: 480px ) {
    flex: 100%;
    padding: 0 4px;
    }
    @media only screen and (min-width: 480px) and (max-width: 768px) {
    flex: 50%;
    padding: 0 4px;
    }
    @media (min-width: 768px ) {
    flex: 25%;
    padding: 0 4px;
    }
`
const imgSty = {
  marginTop: "8px",
  verticalAlign: "middle",
};
const Photography = () => {
  return (
    <Layout title="Photography">
      <Container maxW="1200px">
        <Heading as="h3" fontSize={20} mb={4}>
          Photography
        </Heading>

        <div style={rowStyle}>
          <ColImg>
            <Image style={imgSty} src="/images/canada-tower.jpg"></Image>
            <Image style={imgSty} src="/images/cal_1.jpg"></Image>
            <Image style={imgSty} src="/images/cal_2.jpg"></Image>
            <Image style={imgSty} src="/images/cal_3.jpg"></Image>
          </ColImg>
          <ColImg >
            <Image style={imgSty} src="/images/cal_5.jpg"></Image>
            <Image style={imgSty} src="/images/cal_6.jpg"></Image>
            <Image style={imgSty} src="/images/cal_7.jpg"></Image>
          </ColImg>
          <ColImg >
            <Image style={imgSty} src="/images/cal_4.jpg"></Image>
            <Image style={imgSty} src="/images/cal_9.jpg"></Image>
            <Image style={imgSty} src="/images/cal_8.jpg"></Image>
            <Image style={imgSty} src="/images/muz.jpg"></Image>
          </ColImg>
        </div>
      </Container>
    </Layout>
  );
};

export default Photography;
export { getServerSideProps } from "../components/chakra";
