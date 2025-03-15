import Image from "next/image";
import Navbar from "../frontend/components/layout/Navbar";
import HomePage from "../frontend/components/destination/HomePage";
import Footer from "../frontend/components/layout/Footer";
import Page from "./LandingPage/page";


export default function Home() {
  return (
      <div>
          {/*<Page />*/}

          <Navbar />
          <HomePage />
          <Footer />
      </div>
  );
}
