import { SearchIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

export default function HomePageHeader() {
  return (
    <>
      <Flex
        mx={{
          base: "6",
          md: "8",
        }}
        justify={"space-between"}
        alignItems={"center"}
        flexDir={{
          base: "column-reverse",
          md: "row",
        }}
      >
        <Box>
          <InputGroup
            size="md"
            w={{
              base: "100%",
              md: "100%",
              xl: "100%",
            }}
            mt={{
              base: "4",
            }}
          >
            <Input
              placeholder="Search for jobs"
              fontFamily={"monospace"}
              focusBorderColor="cyan.500"
              color={"gray.600"}
            />
            <InputRightElement>
              <Button
                h="1.75rem"
                size="sm"
                color="cyan.500"
                colorScheme="white"
                fontSize={"xl"}
                mr={2}
              >
                <SearchIcon />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Flex
          justify={{
            base: "center",
            md: "flex-end",
          }}
          alignItems={"center"}
          gap={4}
          wrap={"wrap"}
        >
          <Box
            color={"gray.600"}
            fontFamily={"monospace"}
            fontSize={15}
            textDecoration={"underline"}
          >
           My Area{" "}
            <Badge variant="outline" colorScheme="cyan">
              20
            </Badge>
          </Box>
          <Box color={"gray.600"} fontFamily={"monospace"} fontSize={15}>
            Male{" "}
            <Badge variant="outline" colorScheme="cyan">
              20
            </Badge>
          </Box>
          <Box color={"gray.600"} fontFamily={"monospace"} fontSize={15}>
            Female{" "}
            <Badge variant="outline" colorScheme="cyan">
              20
            </Badge>
          </Box>
          <Box color={"gray.600"} fontFamily={"monospace"} fontSize={15}>
            New{" "}
            <Badge variant="outline" colorScheme="cyan">
              20
            </Badge>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
