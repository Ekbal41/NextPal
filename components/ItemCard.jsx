"use client";

import { AtSignIcon, CalendarIcon, StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import CardItem from "./CardItem";
import {
  HiOutlineLocationMarker,
  HiOutlineCurrencyBangladeshi,
  HiOutlineFire,
  HiOutlineLibrary,
  HiHeart,
} from "react-icons/hi";

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
              <Flex
                wrap={"wrap"}
                justify={"start"}
                gap={2}
                alignItems={"center"}
              >
                <Text
                  fontSize="sm"
                  fontWeight={"bold"}
                  color="gray.600"
                  fontFamily={"monospace"}
                >
                  <AtSignIcon />
                  34#56
                </Text>

                <Text
                  fontSize="sm"
                  color="gray.500"
                  fontFamily={"monospace"}
                  letterSpacing={0}
                >
                  Published : 3 day ago
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Tooltip
            label="Interested"
            aria-label="Interested"
            placement="top"
            size={"sm"}
            cursor={"pointer"}
          >
            <Icon
              as={HiHeart}
              color="red.500"
              boxSize={6}
              
            />
          </Tooltip>
        </Flex>
        <Grid templateColumns="repeat(2, 1fr)" mt={2}>
          <CardItem
            title={"Sybjects"}
            value={"Bangla and English"}
            icon={HiOutlineLibrary}
          />
          <CardItem title={"Duration"} value={"1:30"} icon={HiOutlineFire} />

          <CardItem
            title={"Location"}
            value={"Mirpur 1, Tolarbarg"}
            icon={HiOutlineLocationMarker}
          />

          <CardItem
            title={"Salary"}
            value={"4000"}
            icon={HiOutlineCurrencyBangladeshi}
          />
        </Grid>
        <Flex justifyContent="space-between" alignItems="center" mt={4} pb={1}>
          <Box>
            <Text
              fontSize="sm"
              fontFamily={"monospace"}
              textDecoration={"underline"}
              colorScheme="cyan"
              cursor={"pointer"}
            >
              22 Tutor's Applied
            </Text>
          </Box>
          <Box>
            {" "}
            <Button size={"sm"}>View</Button>
            <Button
              colorScheme="cyan"
              ml={2}
              color={"white"}
              size={"sm"}
              pb={1}
            >
              Apply
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
