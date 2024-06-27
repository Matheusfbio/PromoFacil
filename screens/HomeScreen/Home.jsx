import React from "react";
import promoFacil from "./img/promoFacil.png";
export default function Home() {
  return (
    <div className="flex-1 space-x-3 justify-between bg-red-500">
      <main className="flex space-x-2 justify-center items-center ">
        <img src={promoFacil} alt="logo" />
        <div className="flex flex-row ">
          <p className="text-lg text-center font-bold">Promo</p>
          <p className="text-lg text-center font-bold">Facil</p>
        </div>
        {/* <FontAwesomeIcon icon={faLaptop} />
        <h2>Notebooks</h2>
        <FontAwesomeIcon icon={faLaptop} />
        <h2>Periféricos</h2>
        <FontAwesomeIcon icon={faLaptop} />
        <h2>Desktop</h2>
        <FontAwesomeIcon icon={faLaptop} />
        <p>Mais</p> */}
      </main>
      <div className="flex justify-items-center">
        <div className="relative">
          <input
            type="text"
            className="border border-gray-300 rounded-lg pl-10 pr-4 py-2"
            placeholder="Digite algo"
          />
        </div>
        <div className="relative ">
          <button
            className="border border-gray-300 hover:bg-green-400 rounded-lg pl-5 pr-4 py-2 item text-center"
            type="button"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
