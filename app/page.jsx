import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center my-8">
        Aliaa Mousa 
      </div>
      <p className="flex justify-center my-8">go to another page<Link href={"/newPage"}>Click</Link></p>
    </main>
  );
}
