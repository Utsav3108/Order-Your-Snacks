import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import "./globals.css";
import Cards from "@/components/Cards";
import Slider from "@/components/Slider";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Categories />
      <Slider />
      <Contact />
      {/* <Cards /> */}
    </main>
  )
}
