import Image from "next/image";
import Link from "next/link";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainPage/MainPage";
import BG from './assets/Fitness.png'

export default function Home() {
  return (
    <div className="h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${BG.src})` }}>
        <div className="pl-16 pr-16">
          {/* Header */}
          <Header/>
        </div>
        <div className="pl-16">
          {/* Main Content */}
          <MainPage/>
      </div>
    </div>
    
  );
}
