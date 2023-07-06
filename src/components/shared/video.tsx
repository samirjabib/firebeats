import { HTMLProps } from "react";

type VideoProps = {
  webmPath?: string;
  mp4Path?: string;
  path: string;
  className?: string;
  poster?: string;
  quality?: string | number;
  muted?: boolean;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  onEnded?: (event: any) => void;
} & HTMLProps<HTMLVideoElement>;

const Video = ({
  webmPath,
  mp4Path,
  className,
  poster,
  muted,
  autoPlay,
  controls,
  loop,
  path,
  onEnded,
  ...props
}: VideoProps) => {
  return (
    <video
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
      //   width="100%"
      //   height="100%"
      controls={controls}
      onEnded={onEnded}
      poster={poster}
      preload="auto"
      {...props}
    >
      {/* <source
        src={process.env.NEXT_PUBLIC_DO_CDN + webmPath}
        type="video/webm"
      /> */}
      <source src={path} type="video/webm" />
      {/* <source src={process.env.NEXT_PUBLIC_DO_CDN + mp4Path} type="video/mp4" /> */}
    </video>
  );
};

export default Video;
