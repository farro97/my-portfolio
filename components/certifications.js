import { Box, Container, Image, Tooltip } from "@chakra-ui/react";
import { createRef } from "react";

const certs = [
  ["/images/certifications/psd.png", "PSD 1"],
  ["/images/certifications/cloudpract.png", "AWS Cloud Practitioner"],
  [
    "/images/certifications/SAdeveloper.png",
    "AWS Solutions Architect Associates",
  ],
];

const ref = createRef();

const Certifications = () => {
  return (
    <Box>
      <Container
        display={"flex"}
        mb={"20px"}
        justifyContent="space-between"
        alignItems="center" // Vertically center if images have different heights
      >
        {certs.map((skill, index) => {
          return (
            <div key={index}>
              <Tooltip hasArrow label={skill[1]} bg="gray.300" color="black">
                <Image
                  ref={ref}
                  width={"300px"}
                  src={skill[0]}
                  alt={skill[1]}
                />
              </Tooltip>
            </div>
          );
        })}
      </Container>
    </Box>
  );
};

export default Certifications;
