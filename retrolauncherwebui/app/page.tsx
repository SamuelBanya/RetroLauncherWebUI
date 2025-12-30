export default function Home() {
  return (
    <div>
      <div className="navbar bg-neutral-800 shadow-sm">
        <div className="flex-none">
          <a className="btn btn-ghost text-xl">🕹️ Retro Launcher 🕹️</a>
        </div>
        <div className="flex-1">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Menu</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Tools</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>View</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Arrange By</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Image Group</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Badges</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
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
      <div className="flex-1 grid grid-cols-5 gap-4">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Ty The Tasmanian Tiger 2 
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Krome Studios</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Star</div>
              <div className="badge badge-outline">Circle</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Ty The Tasmanian Tiger 3
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Krome Studios</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              UFC Throwdown
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Opus</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Ultimate Muscle Legends
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Jug</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Ultimate Spider-Man
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Treyarch</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
