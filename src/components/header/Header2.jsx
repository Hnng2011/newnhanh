import { address } from "faker/lib/locales/az";
import "./Header2.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAccount } from "wagmi";

const Header2 = () => {
  const [active, setActive] = useState(false);
  const { address } = useAccount();
  const [menu, setMenu] = useState(false);
  const [position, setPosition] = useState(0);
  const location = useLocation();

  const handle = (num) => {
    setPosition(num);
    window.scrollTo({
      top: num * window.innerHeight,
      behavior: "smooth",
    });
  };

  const menutoggle = (state) => {
    setMenu(state);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setActive(true);
        if (5 * window.innerHeight > window.scrollY) {
          setPosition(4);
        }
        if (4 * window.innerHeight > window.scrollY) {
          setPosition(3);
        }
        if (3 * window.innerHeight > window.scrollY) {
          setPosition(2);
        }
        if (2 * window.innerHeight > window.scrollY) {
          setPosition(1);
        }
        if (window.innerHeight > window.scrollY) {
          setPosition(0);
        }
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${active ? "active" : ""}`}>
      <div className={`nav ${menu ? "active" : "no_active"}`}>
        <button
          onClick={() => handle(0)}
          className={`${
            position === 0 && location.pathname === "/" ? "active" : ""
          }`}
        >
          Home
        </button>
        <button
          onClick={() => handle(1)}
          className={`${
            position === 1 && location.pathname === "/" ? "active" : ""
          }`}
        >
          About
        </button>
        <button
          onClick={() => handle(2)}
          className={`${
            position === 2 && location.pathname === "/" ? "active" : ""
          }`}
        >
          Roadmap
        </button>
        <button
          onClick={() => handle(3)}
          className={`${
            position === 3 && location.pathname === "/" ? "active" : ""
          }`}
        >
          Team
        </button>
        <button
          onClick={() => handle(4)}
          className={`${
            position === 4 && location.pathname === "/" ? "active" : ""
          }`}
        >
          Partnership
        </button>
      </div>
      <div>{address}</div>
    </nav>
  );
};

export default Header2;
