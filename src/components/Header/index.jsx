"use client";
import Logo from "./Logo";
import Menu from "./Menu";

/*

WHEN USE TS
IN ARGUMENT FUNCTINON : const Header =  (props: any) => {} ALL
or --   const Header =  ({name}: any) => {} SPECIFIC PROP
*/
const Header = () => {
  const name = "Snhoor ";
  return (
    <header>
      {name}
      <Logo>
        <h1>HI CHELDREN FROM INDEX IN HEADER</h1>
      </Logo>
      <div>Header Item</div>
      <Menu />
      <Logo>
        <h1>HI CHELDREN FROM INDEX IN HEADER UNDER THE MENU</h1>
      </Logo>
    </header>
  );
};

export default Header;
