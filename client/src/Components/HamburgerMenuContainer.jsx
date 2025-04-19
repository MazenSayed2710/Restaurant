function HamburgerMenuContainer({ children, menuRef }) {
  return (
    <div className=" block relative md:hidden">
      <div ref={menuRef}>{children}</div>
    </div>
  );
}

export default HamburgerMenuContainer;
