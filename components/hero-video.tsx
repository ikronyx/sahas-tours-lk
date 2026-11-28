"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) setReady(true);
    void video.play().catch(() => {
      // A decoded frame can still serve as the background if autoplay is blocked.
    });
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      data-video-ready={ready}
      src="/bg-video.mp4"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
      onLoadedData={() => setReady(true)}
      onPlaying={() => setReady(true)}
      onError={() => setReady(false)}
    />
  );
}
