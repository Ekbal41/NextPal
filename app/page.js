"use client";
import HomePageHeader from "@/components/HomePageHeader";
import ItemCard from "@/components/ItemCard";
import Navbar from "@/components/Navbar";
import { Box, Grid } from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <Navbar />
      <Box maxW={"8xl"} mx={"auto"}>
        <Box pt={24} pb={4}>
          <HomePageHeader />
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          mx={{
            base: "2",
            md: "4",
          }}
        >
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </Grid>
      </Box>
    </>
  );
}
