import { AtSignIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";

export default function CardItem({ title, value, icon }) {
  return (
    <Flex flexDir={"row"} gap={2} my={2}>
      <Box>
        <Icon as={icon} color="cyan.500" />
      </Box>
      <Box>
        <Flex justifyContent="start" alignItems="start" flexDir="column">
          <Box>
            <Text
              fontSize="sm"
              color="gray.600"
              fontWeight={"bold"}
              letterSpacing={2}
            >
              {title}
            </Text>
          </Box>
          <Text fontSize="sm" color="gray.500">
            {value}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
