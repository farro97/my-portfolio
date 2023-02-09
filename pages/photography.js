import { Container, Heading, Image, Modal, ModalContent,
  ModalCloseButton,
  ModalHeader, ModalOverlay, useDisclosure, ModalFooter, ModalBody, Button } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import styled from '@emotion/styled'
import { useEffect, useState } from "react";

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

  const photoList = ['/images/canada-tower.jpg', '/images/cal_1.jpg', '/images/cal_2.jpg', 
  '/images/cal_3.jpg', '/images/cal_5.jpg' , '/images/cal_6.jpg' , '/images/cal_7.jpg' , '/images/cal_4.jpg', 
  '/images/cal_9.jpg', '/images/cal_8.jpg' , '/images/muz.jpg']

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [currentPhoto, setCurrentPhoto] = useState('');

  const viewPhoto = (pic) => {
    setCurrentPhoto(pic)
    onOpen()
  }

  return (
    <Layout title="Photography">
      <Container maxW="1200px">
        <Heading as="h3" fontSize={20} mb={4}>
          Photography
        </Heading>
        <div style={rowStyle}>
          <ColImg>
            <Image style={imgSty} src={photoList[0]} onClick={() => viewPhoto(photoList[0])}/>
            <Image style={imgSty} src={photoList[1]} onClick={() => viewPhoto(photoList[1])}/>
            <Image style={imgSty} src={photoList[2]} onClick={() => viewPhoto(photoList[2])}/>
            <Image style={imgSty} src={photoList[3]} onClick={() => viewPhoto(photoList[3])}/>
          </ColImg>
          <ColImg >
            <Image style={imgSty} src={photoList[4]} onClick={() => viewPhoto(photoList[4])}/>
            <Image style={imgSty} src={photoList[5]} onClick={() => viewPhoto(photoList[5])}/>
            <Image style={imgSty} src={photoList[6]} onClick={() => viewPhoto(photoList[6])}/>
          </ColImg>
          <ColImg >
            <Image style={imgSty} src={photoList[7]} onClick={() => viewPhoto(photoList[7])}/>
            <Image style={imgSty} src={photoList[8]} onClick={() => viewPhoto(photoList[8])}/>
            <Image style={imgSty} src={photoList[9]} onClick={() => viewPhoto(photoList[9])}/>
            <Image style={imgSty} src={photoList[10]} onClick={() => viewPhoto(photoList[10])}/>
          </ColImg>
        </div>
      </Container>

      <Modal size={'2xl'} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
          </ModalBody>
          <ModalFooter> 
            <Image src={currentPhoto}/>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  );
};

export default Photography;
export { getServerSideProps } from "../components/chakra";
