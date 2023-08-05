import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { WebcamCapture } from "./Camera";

function App() {
  const [cameraActive, setCameraActive] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  
  return (
    <>
        <button onClick={() => setCameraActive(!cameraActive)}>{cameraActive ? "Desactivar":"Activar"}</button>
        <h2>Imagen capturada</h2>
        <img src={imageSrc || ""} />
        {cameraActive && <WebcamCapture setImage={setImageSrc} />}
    </>
  );
}

export default App;
