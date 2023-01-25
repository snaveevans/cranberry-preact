import { h } from "preact";
import { useRef, useEffect } from "preact/hooks";

const Scan = () => {
  const videoRef = useRef<HTMLVideoElement>();
  const canvasRef = useRef<HTMLCanvasElement>();
  const photoRef = useRef<HTMLImageElement>();
  const width = 320;

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: true,
      })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      });
  }, []);

  const clearPhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    const data = canvasRef.current.toDataURL("image/png");
    photoRef.current.setAttribute("src", data);
  };

  const takePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    const height =
      (videoRef.current.videoHeight / videoRef.current.videoWidth) * width;
    if (width && height) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      context.drawImage(videoRef.current, 0, 0, width, height);

      const data = canvasRef.current.toDataURL("image/png");
      photoRef.current.setAttribute("src", data);
    } else {
      clearPhoto();
    }
  };

  return (
    <div class="w-full h-full">
      <video ref={videoRef} />
      <canvas ref={canvasRef} class="hidden" />
      <img ref={photoRef} />
      <button
        onClick={takePhoto}
        class="rounded-full fixed z-50 block bg-purple-700 p-4 -translate-y-full -translate-x-1/2 left-1/2"
      >
        <i class="fa-solid fa-camera text-white items-center flex text-4xl" />
        CA
      </button>
    </div>
  );
};

export default Scan;
