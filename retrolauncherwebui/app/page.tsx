"use client";

import GameCardGrid from "./gamecardgrid";
import LeftSideBar from "./leftsidebar";
import NavBar from "./navbar";
import RightSideBar from "./rightsidebar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex overflow-x-auto">
        <LeftSideBar />
        <GameCardGrid />
        <RightSideBar />
      </div>
    </div>
  );
}
