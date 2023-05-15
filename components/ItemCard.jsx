"use client";

import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
  Tooltip,
} from "@chakra-ui/react";

export default function ItemCard({ item }) {
  return (
    <>
      <Box bg={"#fff"} boxShadow={"base"} p={6} rounded={"md"} m={4}>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Flex justifyContent="space-between" flexDir="column">
            <Heading as="h2" size="md" color="cyan.500">
              Title of the card <Badge colorScheme="red">Closed</Badge>
            </Heading>
            <Box d="flex" justifyContent={"start"} alignItems={"center"}>
              <Flex wrap={"wrap"}>
                <Text fontSize="sm" color="gray.500" fontFamily={"monospace"}>
                  Applied 22
                </Text>
                <Text
                  fontSize="sm"
                  color="gray.500"
                  fontFamily={"monospace"}
                  mx={2}
                >
                  |
                </Text>
                <Text fontSize="sm" color="gray.500" fontFamily={"monospace"}>
                  Interested 22{" "}
                </Text>
                <Text
                  fontSize="sm"
                  color="gray.500"
                  fontFamily={"monospace"}
                  mx={2}
                >
                  |
                </Text>
                <Text fontSize="sm" color="gray.500" fontFamily={"monospace"}>
                  3 days ago
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Tooltip
            label="Interested"
            aria-label="Interested"
            placement="top"
            size={"sm"}
           
          >
            <StarIcon  mb={4} color={"gray"} cursor={"pointer"} />
          </Tooltip>
        </Flex>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque animi
        eaque deleniti repellendus molestias, nesciunt aspernatur, cum enim
        provident tenetur dicta suscipit numquam debitis voluptates et? Eligendi
        debitis laudantium voluptate?
        <Flex justifyContent="flex-end" alignItems="center">
          <Button>View</Button>
          <Button colorScheme="cyan" ml={2} color={"white"}>
            Apply
          </Button>
        </Flex>
      </Box>
    </>
  );
}
