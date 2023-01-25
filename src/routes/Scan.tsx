import clsx from "clsx";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

type State = "video" | "photo";

const Scan = () => {
  const [state, setState] = useState<State>("video");
  const [root, setRoot] = useState<HTMLDivElement>();
  const [tracks, setTracks] = useState<MediaStreamTrack[]>();
  const [video, setVideo] = useState<HTMLVideoElement>();
  const [canvas, setCanvas] = useState<HTMLCanvasElement>();
  const [photo, setPhoto] = useState<HTMLImageElement>();

  useEffect(() => {
    if (!video) {
      return;
    }
    // TODO why is this needed for safari
    // a delay of some sort is required from the stream being set
    // and the play getting called
    if (!tracks) {
      video.pause();
      return;
    }

    video.play();
  }, [tracks, video]);

  useEffect(() => {
    if (state === "photo" || !video || !root) {
      return;
    }

    // when in video set up the stream
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: "environment",
          height: root.clientHeight,
          width: root.clientWidth,
        },
      })
      .then((stream) => {
        if (!video) {
          return;
        }
        video.srcObject = stream;
        setTracks(stream.getTracks());
      });

    return () => {
      setTracks((cur) => {
        if (!cur) {
          return;
        }

        cur.forEach((track) => {
          track.stop();
        });
        return undefined;
      });
    };
  }, [state, video, root]);

  const clearPhoto = () => {
    const context = canvas.getContext("2d");
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  };

  const handleClick = () => {
    if (state === "photo") {
      clearPhoto();
      setState("video");
      return;
    }

    const context = canvas.getContext("2d");
    const height = video.videoHeight;
    const width = video.videoWidth;
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
    setState("photo");
  };

  return (
    <div ref={setRoot} class="w-full h-full">
      <video ref={setVideo} class={state !== "video" && "hidden"} allowFullScreen={false} />
      <img ref={setPhoto} class={state !== "photo" && "hidden"} />
      <canvas ref={setCanvas} class="hidden" />
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
