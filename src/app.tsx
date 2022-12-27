import { useCallback, useRef } from 'react';
import "./App.css";

const App = () => {
  let skullSpecial = "/img/skull_special.svg";
  let coffinCloseB = "/img/coffin_close_black.svg";
  let coffinOpenB = "/img/coffin_open_black.svg";

  const openCoffin = useCallback(() => {
    let coffin = document.getElementById("coffinCloseB");
    coffin.style.transition = "0.8s";
    coffin.style.rotate = "23deg";
    setTimeout(()=> {
      coffin.style.transition = "1s";
      coffin.style.top = "1rem";
      coffin.style.left = "4rem";
    }, 1000);

    let skull = document.getElementById("skull");
    setTimeout(() => {
      skull.style.transition = "1s";
      skull.style.display = "block";
      skull.style.rotate = "-20deg";
      skull.style.left = "2rem";
    }, 1500);
  }, []);
  

  return (
    <>
    <div className="clicked">
      <img id="coffinCloseB" 
      src={coffinCloseB} 
      style={{
        position:"absolute", 
        zIndex:"1"}}
      onClick={openCoffin}
      >
      </img>
    </div>
      <img id="skull"
        src={skullSpecial}
        style={{
          display: "none",
          position: "absolute", 
          width: "100px",
          top: "1rem",
          left: "2.5rem" }}
      ></img>
      <img src={coffinOpenB}></img>
    </>
  )
}
export default App;