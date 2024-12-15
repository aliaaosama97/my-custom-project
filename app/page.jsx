import Image from "next/image";
import Link from "next/link";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainPage/MainPage";
import BG from './assets/Fitness.png'

export default function Home() {
  return (
    <div className="bg-redMain min-h-screen">
      <div className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BG.src})` }}>
        {/* Header */}
        <Header/>
        {/* Main Content */}
        <MainPage/>
        
      </div>
    </div>
  );
}
