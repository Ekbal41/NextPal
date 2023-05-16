import { Box, Flex, Heading, MenuItem, Text } from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";

export default function Message({ message }) {
  return (
    <>
      <MenuItem minH="48px" borderBottom={"1px solid #eee"}>
        <Flex
          w="full"
          alignItems="start"
          justifyContent="space-between"
          gap={2}
          maxW={"md"}
        >
          <Box color="gray.200">
            <HiOutlineMail size={40} />
          </Box>
          <Box>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              flexDir="row"
            >
              <Heading
                as="h4"
                size="sm"
                fontWeight="bold"
                lineHeight="tight"
                color="cyan.500"
                fontFamily={"monospace"}
              >
                Congratulations!
              </Heading>
              <Text fontSize="sm" fontFamily={"monospace"} color="gray.500">
                23 min ago
              </Text>
            </Flex>
            <Text fontSize="sm" color="gray.600" lineHeight="tight">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
              doloribus minima? Provident, totam voluptatibus! Consequatur?
            </Text>
          </Box>
        </Flex>
      </MenuItem>
    </>
  );
}
