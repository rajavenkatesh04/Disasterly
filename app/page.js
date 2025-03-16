import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import HomePage from "./components/destination/HomePage";
import Footer from "./components/layout/Footer";
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
