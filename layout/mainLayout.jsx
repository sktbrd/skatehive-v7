import Navbar from "../components/navigation/navbar";
import SideMenu from "../components/navigation/sideMenu";
import { useState } from "react";

export default function Layout({ children }) {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <div>
      <Navbar/>
      <div style={{ display: "flex" }}>
        <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
        <main>{children}</main>
      </div>
     
    </div>
  );
}
