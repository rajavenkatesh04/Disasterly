import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import HomePage from "@/components/HomePage";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
      <div>
          <Navbar /><HomePage /><Footer />
      </div>
  );
}
