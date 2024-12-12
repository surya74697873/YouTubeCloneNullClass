// import logo from "./logo.svg";
import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar";

import "./App.css";

function App() {
  const [toggledrawerssidebar, settoggledrawerssidebar] = useState({
    display: "none",
  });

  const toggledrawer = () => {
    if (toggledrawerssidebar.display === "none")
      settoggledrawerssidebar({
        display: "flex",
      });
    else {
      settoggledrawerssidebar({
        display: "none",
      });
    }
  };

  const [editcreatechanelbtn, seteditcreatechanelbtn] = useState(false);
  const [videouploadpage, setvideouploadpage] = useState(false)

  
  return <>
    <NavBar seteditcreatechanelbtn={seteditcreatechanelbtn} toggledrawer={toggledrawer} />
  </>;
}

export default App;
