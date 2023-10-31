"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  const { data } = useSession();

  return (
    <div className="p-5">
      <Image
        src="/banner-home-01.png"
        className="h-auto w-full"
        sizes="100vw"
        height={0}
        width={0}
        alt="Até 55% de desconto esse mês"
      />
      <div className="mt-8">
        <Categories />
      </div>
    </div>
  );
}