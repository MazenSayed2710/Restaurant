import { useEffect, useRef, useState } from "react";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import HamburgerMenuContent from "./HamburgerMenuContent";
import HamburgerMenuContainer from "./HamburgerMenuContainer";
function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const clickOutSide = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", clickOutSide);
    return () => document.removeEventListener("click", clickOutSide);
  }, [isOpen, setIsOpen]);

  return (
    <HamburgerMenuContainer menuRef={menuRef}>
      <HamburgerMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      <HamburgerMenuContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </HamburgerMenuContainer>
  );
}

export default HamburgerMenu;
