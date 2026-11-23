"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const videoSource = "/bg-video.mp4";

type PlaybackStatus =
  | "loading"
  | "ready"
  | "playing"
  | "paused"
  | "unavailable";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<PlaybackStatus>("loading");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let active = true;

    video.defaultMuted = true;
    video.muted = true;
    video.src = videoSource;

    void video.play().catch(() => {
      if (active) {
        setStatus((current) => (current === "loading" ? "ready" : current));
      }
    });

    return () => {
      active = false;
    };
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      video.pause();
      return;
    }

    video.defaultMuted = true;
    video.muted = true;
    if (!video.hasAttribute("src")) video.src = videoSource;
    void video.play().catch(() => {
      setStatus((current) => (current === "loading" ? "ready" : current));
    });
  }

  const playing = status === "playing";

  return (
    <>
      <video
        ref={videoRef}
        className="hero-video"
        data-video-ready={playing || status === "paused"}
        muted
        loop
        playsInline
        aria-hidden="true"
        onLoadedData={() =>
          setStatus((current) => (current === "loading" ? "ready" : current))
        }
        onPlaying={() => setStatus("playing")}
        onPause={() =>
          setStatus((current) => (current === "playing" ? "paused" : current))
        }
        onError={() => setStatus("unavailable")}
      />
      {(status === "ready" || playing || status === "paused") && (
        <button
          className="hero-video-control button button-outline"
          type="button"
          onClick={togglePlayback}
        >
          {playing ? (
            <Pause size={16} aria-hidden="true" />
          ) : (
            <Play size={16} aria-hidden="true" />
          )}
          {playing ? "Pause video" : "Play video"}
        </button>
      )}
    </>
  );
}
