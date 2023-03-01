import { Box, Container, Image, Tooltip } from "@chakra-ui/react";
import { createRef } from "react";
import { BioYear } from "./bio";

const webtech = [
  ["/images/skills/reactjs.png", "React JS"],
  ["/images/skills/angular.png", "Angular"],
  ["/images/skills/nodejs.png", "Node JS"],
  ["/images/skills/nextjs.png", "Next JS"],
  ["/images/skills/js.png", "Javascript"],
  ["/images/skills/html5.png", "HTML"],
  ["/images/skills/git.png", "GIT"],
  ["/images/skills/css3.png", "CSS"],
];

const ref = createRef();

const Skills = () => {
  return (
    <Box>
      <Container display={"flex"} mb={"20px"}>
        {webtech.map((skill, index) => {
          return (
            <div>
              <Tooltip hasArrow label={skill[1]} bg="gray.300" color="black">
                <Image ref={ref} width={"50px"} src={skill[0]} key={index} />
              </Tooltip>
            </div>
          );
        })}
      </Container>
    </Box>
  );
};

export default Skills;
