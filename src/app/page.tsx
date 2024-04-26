import Content from "@/components/content";
import Footer from "@/components/footer";
import HeroSports from "@/components/hero-sports";
import ImageHeader from "@/components/image-header";
import Navbar from "@/components/navbar";
import Ubication from "@/components/ubication";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full items-center justify-between  bg-primary">
      <ImageHeader/>
      <HeroSports/>
      <Content />
      <Ubication />
      </main>
      <Footer/>
    </>
  );
}
