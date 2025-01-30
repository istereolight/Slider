import { Header } from "@/components/Header";
import Info from "@/components/Info";
import Link from "next/link";

export default function Library () {
  return (
    <div className="font-neue">
    <Header />
    <Info />
    <div className="pl-1 pt-5">
      <div className="w-[100px] pt-2">
        <Link href='/'>
          На главную
        </Link>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <h3 className="text-5xl">Библиотека</h3>
      </div>
    </div>
  </div>
  )
}