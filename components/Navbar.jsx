"use client";

import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Flex
        as="nav"
        justify={"space-between" }
        align="center"
        p={4}
        bg={"#fff"}
        boxShadow={"0 0 10px rgba(0,0,0,0.1)"}
      >
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              colorScheme="gray"
              mr={2}
            />
            <MenuList>
              <MenuItem icon={<AddIcon />} command="⌘T">
                New Tab
              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                New Window
              </MenuItem>
              <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                Open Closed Tab
              </MenuItem>
              <MenuItem icon={<EditIcon />} command="⌘O">
                Open File...
              </MenuItem>
            </MenuList>
          </Menu>
          <IconButton
            colorScheme="gray"
            aria-label="Call Segun"
            icon={<SearchIcon />}
          />
        </Box>
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
          _hover={{
            textDecoration: "none",
            color: "cyan.600",
          }}
        >
          NextPal
        </Box>
        <Box>
          {" "}
          <Select variant="filled">
            <option value="option1">Bangla</option>
            <option value="option2">English</option>
            <option value="option2">Hindi</option>
          </Select>
        </Box>
      </Flex>
    </>
  );
}
