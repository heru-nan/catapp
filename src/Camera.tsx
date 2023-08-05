import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  facingMode:  "environment"
};

export const WebcamCapture = ({setImage}: {setImage: (a: string) => void;}) => {
  const webcamRef = React.useRef<Webcam>(null);
  const [dimensions, setDimensions] = React.useState<null | {width: number, height: number}>(null)
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setImage(imageSrc);
    }
  }, [webcamRef]);

    React.useEffect(() => {
        setDimensions({width: window.innerWidth - 10, height: window.innerHeight})
    }, []);


  return (
    <div className="camera">
      {dimensions && <Webcam
        audio={false}
        height={dimensions.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={dimensions.width}
        videoConstraints={videoConstraints}
      />}
      <button onClick={capture}>Capture photo</button>
    </div>
  );
};
