import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
  <>
  <VStack textAlign="left" backgroundColor={'white'}
  color={"black"} padding={0} borderRadius={"8px"}>
    <Image src={imageSrc} alt={title} borderRadius={"8px"}/>
    <Heading as="h3" size="md" paddingTop={5} paddingLeft={5} alignSelf={"flex-start"} >
      {title}
    </Heading>
    <Text as="p" alignSelf={"flex-start"} paddingTop={5} paddingLeft={5}>
      {description}
    </Text>
    <HStack  padding={2} width={"100%"} paddingBottom={5} paddingLeft={5} >
      <Text as="p" alignSelf={"flex-start"}>
        See more
      </Text>
      <FontAwesomeIcon icon={faArrowRight} color="black" />
    </HStack>
  </VStack>
  </>
  );
};

export default Card;
