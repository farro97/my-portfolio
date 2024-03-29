import Head from "next/head";
import dynamic from "next/dynamic";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";
import VoxelDogLoader from "../voxel-dog-loader";
import BackgroundParticles from "../background";



const LazyVoxelDog = dynamic(() => import("../voxel-dog"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});



const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <BackgroundParticles/>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Fitri's personal website" />
        <meta name="author" content="Fitri Mahdon" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Fitri Mahdon" />
        <meta property="og:site_name" content="Fitri Mahdon" />
        <meta name="og:title" content="Fitri Mahdon - Software Engineer" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://fitrimahdon.com/og_image.png"
        />
        <meta
          property="og:description"
          content="Hello, I'm a Software Engineer!"
        />
        <title>Fitri Mahdon</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="960px" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    
    </Box>
  );
};

export default Main;
