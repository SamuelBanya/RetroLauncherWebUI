import GameCardGrid from "./gamecardgrid";
import LeftSideBar from "./leftsidebar";
import NavBar from "./navbar";
import RightSideBar from "./rightsidebar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <LeftSideBar />
        <GameCardGrid />
        <RightSideBar />
      </div>
    </div>
  );
}
