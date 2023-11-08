import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import { Particles } from "@/components/utils/particles";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full">
      <Header />
      <Particles className="absolute inset-0 -z-10 " />
      <Hero />
      <Footer />
    </main>
  );
}
