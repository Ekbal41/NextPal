"use client";

import {
  AddIcon,
  AtSignIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
  SearchIcon,
} from "@chakra-ui/icons";

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
} from "@chakra-ui/react";
import {
  HiOutlineFlag,
  HiOutlineDuplicate,
  HiOutlineUserCircle,
  HiOutlineBell,
  HiOutlineFilter,
  HiOutlineMail,
  HiMail,
} from "react-icons/hi";
import Message from "./Message";

export default function Navbar() {
  return (
    <>
      <Box
        p={4}
        position={"fixed"}
        w={"100%"}
        top={0}
        zIndex={100}
        as="nav"
        bg={"#fff"}
        boxShadow={"0 0 10px rgba(0,0,0,0.1)"}
      >
        <Flex maxW={"8xl"} mx={"auto"} justify={"space-between"} align="center">
          <Box
            aria-label="logo"
            as="a"
            href="/"
            fontSize="lg"
            fontWeight="bold"
            letterSpacing="wide"
            w="fit-content"
            p={2}
            color={"cyan.500"}
            fontFamily={"monospace"}
            _hover={{
              textDecoration: "none",
              color: "cyan.600",
            }}
          >
            <AtSignIcon />
            <Box
              m={0}
              as="span"
              display={{ base: "none", md: "inline" }}
              size={{ base: "lg", md: "md" }}
            >
              {" "}
              NextPal
            </Box>
          </Box>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexDir="row"
            gap={2}
          >
            <Flex
              flexDir={"row"}
              gap={2}
              justify={"space-between"}
              alignItems={"center"}
              mr={{
                base: 0,
                md: 8,
              }}
            >
              {/* <Box>
              <HiOutlineFilter size={20} cursor={"pointer"} />
            </Box>{" "} */}
              <Select
                variant="filled"
                placeholder="Select Version"
                colorScheme="cyan"
                size="sm"
                rounded={"md"}
              >
                <option className="opt" value="option1">
                  Bangla Version
                </option>
                <option value="option2">English Version</option>
                <option value="option2">Hindi Version</option>
              </Select>{" "}
              <Select
                variant="filled"
                placeholder=" Select Gender"
                colorScheme="cyan"
                size="sm"
                rounded={"md"}
              >
                <option value="option1">Male</option>
                <option value="option2">Female</option>
              </Select>
              <Select
                variant="filled"
                placeholder="Select Divition"
                colorScheme="cyan"
                size="sm"
                rounded={"md"}
              >
                <option value="option1">Dhaka</option>
                <option value="option2">Khulna</option>
                <option value="option2">Dinajpur</option>
              </Select>
            </Flex>

            <Menu>
              <MenuButton
                as={IconButton}
                bg={"white"}
                size={"sm"}
                icon={<HiOutlineBell size={20} />}
              ></MenuButton>
              <MenuList
                w={{
                  base: "xs",
                  sm: "sm",
                  md: "md",
                  lg: "lg",
                }}
                boxShadow={"0 0 10px rgba(0,0,0,0.1)"}
                p={0}
                border={"2px"}
                borderColor={"gray.200"}
                borderRadius={"md"}
              >
                <Message />
                <Message />
                <Message />
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HiOutlineUserCircle size={20} />}
                bg={"white"}
                size="sm"
              />
              <MenuList>
                <MenuItem icon={<HiOutlineUserCircle size={15} />}>
                  Profile
                </MenuItem>
                <MenuItem icon={<HiOutlineDuplicate size={15} />}>
                  My Aplications
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />}>About</MenuItem>
                <MenuItem icon={<HiOutlineFlag size={15} />}>Help</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
