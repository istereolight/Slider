import { Header } from "@/components/Header";
import Link from "next/link";

export default function Library () {
  return (
    <div className="font-neue pl-4 pt-4">
    <Header />
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