export default function LeftSideBar() {
    return (
        <div className="flex-none">
            <ul className="menu bg-base-200 rounded-box w-56">
            <li>
                <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" required placeholder="Search" />
                </label>
            </li>
            <li>
                <details open>
                <summary>Platform</summary>
                <ul>
                    <li><a>All</a></li>
                    <li><a>Arcade</a></li>
                    <li><a>Atari 5200</a></li>
                    <li><a>Atari Lynx</a></li>
                    <li><a>Commodore Amiga</a></li>
                    <li><a>Final Burn Neo</a></li>
                    <li><a>Microsoft Xbox</a></li>
                    <li><a>MS-DOS</a></li>
                    <li><a>Nintendo Entertainment System</a></li>
                    <li><a>Nintendo Game Boy</a></li>
                    <li><a>Nintendo Gamecube</a></li>
                    <li><a>ScummVM</a></li>
                    <li><a>Sega Genesis</a></li>
                    <li><a>Sega Saturn</a></li>
                    <li><a>Sony Playstation</a></li>
                    <li><a>Sony Playstation 2</a></li>
                    <li><a>Sony Playstation Vita</a></li>
                    <li><a>Super Nintendo Entertainment System</a></li>
                    <li><a>Windows</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
    )
}