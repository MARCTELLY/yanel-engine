import React, { useState } from "react";

function SidedBar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="barre">
        <button onClick={() => closeMenu()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-list toggle-menu"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <span>
          <h2>YenSpirit</h2>
        </span>
      </div>

      {/* <div className="search-bar">
        <form>
          <input type="text" />
        </form>
      </div> */}
      <nav className={`sided-navbar ${isOpen ? "opened" : "closed"}`}>
        <h3>Menu</h3>
        <button onClick={() => closeMenu()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        <ul>
          <li>
            <a className="active" href="/#">
              Acceuil
            </a>
          </li>
          <li>
            <a href="/#">Commander</a>
          </li>
          <li>
            <a href="/#">Qui sommes nous</a>
          </li>

          <li>
            <a href="/#">Information client</a>
          </li>

          <li>
            <a href="/#">news letter</a>
          </li>

          <li>
            <a href="/#">Qui sommes nous</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SidedBar;
