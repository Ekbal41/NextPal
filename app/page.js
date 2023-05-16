"use client";
import ItemCard from "@/components/ItemCard";
import Navbar from "@/components/Navbar";
import { Grid } from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <Navbar />
      <Grid 
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }}
      >
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </Grid>
    </>
  );
}
