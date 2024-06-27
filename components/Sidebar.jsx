// Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <nav className="bg-gray-200 h-screen w-60 pt-4">
      <ul>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-300">
          Painel de Controle
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-300">
          Dashboard
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-300">
          Configurações
        </li>
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-300">Ajuda</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
