"use client"

import Content from "@/components/content";
import HeroSports from "@/components/hero-sports";
import ImageHeader from "@/components/image-header";
import Ubication from "@/components/ubication";
import { Button } from "@/components/ui/button";
import { scrollToTop } from "@/lib/utils";
import { ArrowBigUpDash } from "lucide-react";


export default function Home() {
  return (
    <>
      <main className="w-full items-center justify-between  bg-primary">
        <ImageHeader />
        <HeroSports />
        <Content />
        <Ubication />
        <div className='flex justify-end text-secondary'>
          <Button onClick={scrollToTop}><ArrowBigUpDash size={38} /></Button>
        </div>
      </main>
    </>
  );
}
