import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Hero from "../components/Hero";
import Cards from "@/components/Cards";
import Carousel from "@/components/Carousel";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Accenture | Let There Be Change</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Cards />
      <Carousel />
    </>
  );
}
