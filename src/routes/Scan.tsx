import clsx from "clsx";
import { h } from "preact";
import { useRef, useEffect, useState } from "preact/hooks";

type State = "video" | "photo";

const Scan = () => {
  const [state, setState] = useState<State>("video");
  const [tracks, setTracks] = useState<MediaStreamTrack[]>();
  const videoRef = useRef<HTMLVideoElement>();
  const canvasRef = useRef<HTMLCanvasElement>();
  const photoRef = useRef<HTMLImageElement>();
  const width = 320;

  useEffect(() => {
    // TODO why is this needed for safari
    // a delay of some sort is required from the stream being set
    // and the play getting called
    if (!tracks) {
      videoRef.current.pause();
      return;
    }

    videoRef.current.play();
  }, [tracks]);

  useEffect(() => {
    if (state === "photo") {
      // we have already captured the photo
      return;
    }

    // when in video set up the stream
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: { facingMode: "environment" },
      })
      .then((stream) => {
        if (!videoRef.current) {
          return;
        }
        videoRef.current.srcObject = stream;
        setTracks(stream.getTracks());
      });

    return () => {
      setTracks((cur) => {
        if (!cur) {
          return;
        }

        console.debug("cleaning up");
        cur.forEach((track) => {
          track.stop();
        });
        return undefined;
      });
    };
  }, [state]);

  const clearPhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    const data = canvasRef.current.toDataURL("image/png");
    photoRef.current.setAttribute("src", data);
  };

  const handleClick = () => {
    if (state === "photo") {
      clearPhoto();
      setState("video");
      return;
    }

    const context = canvasRef.current.getContext("2d");
    const height =
      (videoRef.current.videoHeight / videoRef.current.videoWidth) * width;
    if (width && height) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      context.drawImage(videoRef.current, 0, 0, width, height);

      const data = canvasRef.current.toDataURL("image/png");
      photoRef.current.setAttribute("src", data);
      setState("photo");
    } else {
      clearPhoto();
    }
  };

  return (
    <div class="w-full h-full">
      <video ref={videoRef} class={state !== "video" && "hidden"} />
      <img ref={photoRef} class={state !== "photo" && "hidden"} />
      <canvas ref={canvasRef} class="hidden" />
      <button
        onClick={handleClick}
        class="rounded-full fixed z-50 block bg-purple-700 p-3 -translate-y-1/2 -translate-x-1/2 left-1/2 bottom-8 h-16 w-16 flex justify-center items-center"
      >
        <i
          class={clsx(
            "fa-solid text-white items-center flex text-3xl",
            state === "video" ? "fa-camera" : "fa-trash"
          )}
        />
      </button>
    </div>
  );
};

export default Scan;
