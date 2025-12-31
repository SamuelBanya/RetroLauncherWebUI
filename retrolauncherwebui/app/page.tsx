import GameCardGrid from "./gamecardgrid";
import LeftSideBar from "./leftsidebar"
import NavBar from "./navbar"

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <LeftSideBar />
        <GameCardGrid />
      </div>
    </div>
  );
}
