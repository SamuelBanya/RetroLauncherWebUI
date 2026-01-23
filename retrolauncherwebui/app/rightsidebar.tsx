import Image from "next/image";

export default function RightSideBar() {
  const currentSelectedGame = {
    platform: "Nintendo Gamecube",
    name: "Viewtiful Joe",
    releaseDateText: "2003",
    developerText: "Capcom Production Studio 4",
    publisherText: "Capcom",
    playTimeText: "0h 00m 00s (0)",
  };

  const tailwindColors = {
    "green-400": "#05df72",
  };

  const rowImageStyle = {
    borderRadius: "30px",
    width: 200,
    height: 150,
  };

  const selectedRowImageStyle = {
    borderRadius: "30px",
    border: `3px solid ${tailwindColors["green-400"]}`,
    width: 200,
    height: 150,
  };

  return (
    <div className="min-w-[1200px] ">
      <div className="grid h-screen">
        <div className="h-[20%] bg-red-500">
          <img
            src="/BackgroundImages/ViewtifulJoeBackgroundImage.jpg"
            alt="image"
          />
        </div>
        <div className="h-[80%] bg-zinc-800 p-4">
          <h1 className="text-zinc-500">
            🎮 {currentSelectedGame.platform.toUpperCase()}
          </h1>
          <h1 className="text-zinc-100 text-4xl font-black">
            {currentSelectedGame.name.toUpperCase()}
          </h1>
          <div className="grid grid-cols-3 grid-rows-3">
            <div className="col-span-2 row-span-3">
              <Image
                src="/GameplayImages/ViewtifulJoeGameplayImage.png"
                alt={`Gameplay Image for ${currentSelectedGame.name}`}
                width="700"
                height="500"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-xl bg-green-500">
                {/* HeroIcons icon for right arrow: */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
                Play
              </button>
            </div>
            <div className="col-span-1 row-span-2">
              <div className="grid grid-cols-2 grid-rows-4">
                <div className="col-span-1 border-b-2 border-gray-500">
                  <h2>Release Date</h2>
                </div>
                <div className="col-span-1 border-b-2 border-gray-500 text-right">
                  <h2>{currentSelectedGame.releaseDateText}</h2>
                </div>
                <div className="col-span-1 border-b-2 border-gray-500">
                  <h2>Developer</h2>
                </div>
                <div className="col-span-1 border-b-2 border-gray-500 text-right">
                  <h2>{currentSelectedGame.developerText}</h2>
                </div>
                <div className="col-span-1 border-b-2 border-gray-500">
                  <h2>Publisher</h2>
                </div>
                <div className="col-span-1 border-b-2 border-gray-500 text-right">
                  <h2>{currentSelectedGame.publisherText}</h2>
                </div>
                <div className="col-span-1 border-b-2 border-gray-500">
                  <h2>Play Time</h2>
                </div>
                <div className="col-span-1 border-b-2 border-gray-500 text-right">
                  <h2>{currentSelectedGame.playTimeText}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 grid-rows-1 gap-2">
            <div className="col-span-1">
              <Image
                src="/GameplayImages/ViewtifulJoeRowScreenshot1.jpg"
                alt={`Row Image 1 for ${currentSelectedGame.name}`}
                width={`${selectedRowImageStyle.width}`}
                height={`${selectedRowImageStyle.height}`}
                style={selectedRowImageStyle}
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/GameplayImages/ViewtifulJoeRowScreenshot2.jpg"
                alt={`Row Image 2 for ${currentSelectedGame.name}`}
                width={`${rowImageStyle.width}`}
                height={`${rowImageStyle.height}`}
                style={rowImageStyle}
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/GameplayImages/ViewtifulJoeRowScreenshot3.png"
                alt={`Row Image 3 for ${currentSelectedGame.name}`}
                width={`${rowImageStyle.width}`}
                height={`${rowImageStyle.height}`}
                style={rowImageStyle}
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/GameplayImages/ViewtifulJoeRowScreenshot4.jpg"
                alt={`Row Image 4 for ${currentSelectedGame.name}`}
                width={`${rowImageStyle.width}`}
                height={`${rowImageStyle.height}`}
                style={rowImageStyle}
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/GameplayImages/ViewtifulJoeRowScreenshot5.png"
                alt={`Row Image 5 for ${currentSelectedGame.name}`}
                width={`${rowImageStyle.width}`}
                height={`${rowImageStyle.height}`}
                style={rowImageStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
