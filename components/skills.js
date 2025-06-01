import { Box, Container, Image, Tooltip } from "@chakra-ui/react";
import { createRef } from "react";


const webtech = [
  ["/images/skills/reactjs.png", "React JS"],
  ["/images/skills/angular.png", "Angular"],
  ["/images/skills/nodejs.png", "Node JS"],
  ["/images/skills/nextjs.png", "Next JS"],
  ["/images/skills/js.png", "Javascript"],
  ["/images/skills/css3.png", "CSS"],
  ["/images/skills/html5.png", "HTML"],
  ["/images/skills/git.png", "GIT"],
  ["/images/skills/aws.png", "AWS"],
  ["/images/skills/spring.png", "Spring"],
  
];

const ref = createRef();

const Skills = () => {
  return (
    <Box>
      <Container display={"flex"} mb={"20px"} justifyContent={'space-around'}>
        {webtech.map((skill, index) => {
          return (
            <div key={index}>
              <Tooltip hasArrow label={skill[1]} bg="gray.300" color="black">
                <Image ref={ref} width={"100px"} src={skill[0]} alt={skill[1]} />
              </Tooltip>
            </div>
          );
        })}
      </Container>
    </Box>
  );
};

export default Skills;
