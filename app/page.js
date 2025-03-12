import Image from "next/image";
import Navbar from "../frontend/components/layout/Navbar";
import HomePage from "../frontend/components/destination/HomePage";
import Footer from "../frontend/components/layout/Footer";


export default function Home() {
  return (
      <div>
          <Navbar /><HomePage /><Footer />
      </div>
  );
}
