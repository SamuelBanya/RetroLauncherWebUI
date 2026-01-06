"use client";

import { useState } from "react";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const menus = [
    "MENU",
    "TOOLS",
    "VIEW",
    "ARRANGE BY",
    "IMAGE GROUP",
    "BADGES",
  ];

  return (
    <div className="navbar bg-neutral-800 shadow-sm sticky top-0 z-50">
      <div className="flex-none">
        <a className="btn btn-ghost text-xl">🕹️ Retro Launcher 🕹️</a>
      </div>
      <div className="flex-1">
        <ul className="menu menu-horizontal px-1 relative">
          {menus.map((menu) => (
            <li key={menu} className="relative">
              <div
                className="text-zinc-400 cursor-pointer select-none"
                onClick={() => setOpenMenu(openMenu === menu ? null : menu)}
              >
                {menu}
              </div>

              {openMenu === menu && (
                <ul className="absolute top-full left-0 mt-1 bg-base-100 rounded-md p-2 shadow-md z-50 w-40">
                  <li>
                    <a className="block px-2 py-1 hover:bg-gray-200">Link 1</a>
                  </li>
                  <li>
                    <a className="block px-2 py-1 hover:bg-gray-200">Link 2</a>
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
