import Image from "next/image";
import Link from "next/link";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainPage/MainPage";

export default function Home() {
  return (
    <div className="bg-redMain min-h-screen">
      <div className=" bg-gradient-to-r from-gray-50/70 via-white/100 to-gray-50/70 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-1 gap-10 items-center h-[60vh] md:h-[80vh] lg:h-[90vh]">
        {/* Header */}
        <Header/>
        {/* Main Content */}
        <MainPage/>
        
      </div>
    </div>
  );
}
