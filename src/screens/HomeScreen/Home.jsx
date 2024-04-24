import React from "react";
import techPromo from "./img/tech-promo.png";
export default function Home() {
  return (
    <div className="flex bg-red-600">
      <main className="p-4 space-x-2 flex">
        <img src={techPromo} alt="logo" />
        <h2 className="text-xl font-bold">Tech promos</h2>
        <h2 className="text-xl font-bold">Notebooks</h2>
      </main>
      <input className="p-5" type="search" placeholder="Pesquisar" />
    </div>
  );
}
