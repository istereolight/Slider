import Portfolio from "@/components/Slider/Portfolio";
import { Header } from "../components/Header";
import Info from "@/components/Info";


export default function Home() {
  return (
    <div className="font-neue">
      <Header />
      <Info />
      <main>
        <Portfolio />
      </main>
    </div>
  );
}
