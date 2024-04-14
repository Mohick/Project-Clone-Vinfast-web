import "./App.css";
import HeaderPage from "./Header/HeaderPage";
import RouterPage from "./Router/Rputer Page";
import ModalMenuPage from "./Modal Menu/Modal Menu";
import { useEffect } from "react";
function App() {
  useEffect(() =>{
    const cpnBoxHeaderHeight = document.getElementById('header').clientHeight
    const containerContent = document.getElementById("container__content--body");
    containerContent.style.marginTop = `${cpnBoxHeaderHeight}px`;
    
  },[])
  return (
    <>
      <HeaderPage />
      <div id="container__content--body">
        <RouterPage />
      </div>
      <ModalMenuPage />
    </>
  );
}

export default App;
