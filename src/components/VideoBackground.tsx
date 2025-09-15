import React from "react";

interface VideoBackgroundProps {
  src?: string;
  poster?: string;
  className?: string;
  children?: React.ReactNode;
}

const VideoBackground = ({ src, poster, className, children }: VideoBackgroundProps) => {
  return (
    <div className={className ?? "relative w-full h-full"}>
      {src ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          onError={() => {
            // Fallback to placeholder overlay if video fails to load
            // eslint-disable-next-line no-console
            console.warn(`[VideoBackground] Failed to load video: ${src}. Showing fallback.`);
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-pulse" />
      )}
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default VideoBackground;


