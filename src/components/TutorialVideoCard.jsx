import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  X,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  VideoOff,
  CheckCircle2,
  Loader2,
  PictureInPicture2,
  Sparkles,
} from "lucide-react";
import { mediaRegistry } from "../data/mediaRegistry";

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

export default function TutorialVideoCard({ path, pageTitle, mediaId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  // Lookup video info from mediaRegistry
  const getVideoInfo = () => {
    if (mediaId && mediaRegistry[mediaId]) {
      return mediaRegistry[mediaId];
    }

    if (path && mediaRegistry[path]) {
      const pageRegistry = mediaRegistry[path];
      for (const key in pageRegistry) {
        if (pageRegistry[key]?.type === "video") {
          return pageRegistry[key];
        }
      }
    }

    const routeKey = path ? path.replace(/\//g, "-").replace(/^-/, "") + "-tutorial-video" : "";
    if (mediaRegistry[routeKey]) {
      return mediaRegistry[routeKey];
    }

    return null;
  };

  const SAMPLE_MP4 = "https://s3.amazonaws.com/cargoclave-surveyor-assets/otp-tutorial.mp4";

  const videoInfo = getVideoInfo();
  const hasVideo = Boolean(videoInfo || mediaId || path);
  const videoSrc = videoInfo?.src || SAMPLE_MP4;
  const title = videoInfo?.caption || `${pageTitle || "Feature"} Walkthrough`;
  const description = videoInfo?.alt || "Interactive step-by-step video guide.";

  // Reset modal state when opening
  const openPlayer = () => {
    setIsModalOpen(true);
    setVideoError(false);
    setIsEnded(false);
    setIsPlaying(true);
  };

  const closePlayer = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
    setIsModalOpen(false);
  };

  // Media Player Actions
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setVideoError(true));
      setIsEnded(false);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Keyboard controls listener inside modal
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "BUTTON") return;

      const v = videoRef.current;
      if (e.code === "Space" || e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (v) {
          if (v.paused) {
            v.play().then(() => setIsPlaying(true)).catch(() => setVideoError(true));
            setIsEnded(false);
          } else {
            v.pause();
            setIsPlaying(false);
          }
        }
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (v) v.currentTime = Math.max(0, v.currentTime - 5);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        if (v && v.duration) v.currentTime = Math.min(v.duration, v.currentTime + 5);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (v) {
          const nv = Math.min(1, v.volume + 0.1);
          v.volume = nv;
          setVolume(nv);
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (v) {
          const nv = Math.max(0, v.volume - 0.1);
          v.volume = nv;
          setVolume(nv);
        }
      } else if (e.key.toLowerCase() === "m") {
        e.preventDefault();
        if (v) {
          v.muted = !v.muted;
          setIsMuted(v.muted);
        }
      } else if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        if (containerRef.current) {
          if (!document.fullscreenElement) {
            containerRef.current.requestFullscreen().catch(() => {});
          } else {
            document.exitFullscreen().catch(() => {});
          }
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        if (v) v.pause();
        setIsPlaying(false);
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    if (!videoRef.current) return;
    videoRef.current.volume = val;
    setVolume(val);
    if (val === 0) {
      setIsMuted(true);
      videoRef.current.muted = true;
    } else if (isMuted) {
      setIsMuted(false);
      videoRef.current.muted = false;
    }
  };

  const handleSeek = (e) => {
    if (!videoRef.current || !duration) return;
    const targetTime = parseFloat(e.target.value);
    videoRef.current.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const changeSpeed = (speed) => {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = speed;
    setPlaybackRate(speed);
  };

  const togglePiP = async () => {
    if (!videoRef.current) return;
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else {
        await videoRef.current.requestPictureInPicture();
      }
    } catch {}
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsEnded(false);
    setIsPlaying(true);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2500);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-[11px] font-bold text-ink-500 dark:text-[#A3A3A3] uppercase tracking-wider mb-2.5 select-none">
        <span>Tutorial Video</span>
        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20">
          Companion
        </span>
      </div>

      {/* SIDEBAR TUTORIAL VIDEO CARD */}
      {hasVideo ? (
        <div className="group relative rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] shadow-sm hover:shadow-md hover:border-cyan-500/40 dark:hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
          {/* Card Media Preview Header */}
          <div
            onClick={openPlayer}
            className="relative aspect-video w-full cursor-pointer overflow-hidden bg-ink-900/10 dark:bg-[#000000] flex items-center justify-center"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

            {/* Mesh Grid Backdrop */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:12px_12px] group-hover:scale-110 transition-transform duration-500" />

            {/* Badges Bar */}
            <div className="absolute top-2.5 left-2.5 right-2.5 z-20 flex items-center justify-between pointer-events-none">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 backdrop-blur-md flex items-center gap-1">
                <Sparkles size={10} /> Tutorial
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold font-mono bg-black/60 text-white/90 border border-white/10 backdrop-blur-md">
                HD
              </span>
            </div>

            {/* Hover Animated Play Button Overlay */}
            <div className="relative z-20 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20 dark:bg-cyan-500/30 text-cyan-400 border border-cyan-400/50 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-400 transition-all duration-300">
              <Play size={20} className="ml-0.5 fill-current" />
            </div>
          </div>

          {/* Card Metadata Footer (ONLY REAL INFO - NO DUMMY STATS) */}
          <div className="p-3 bg-white dark:bg-[#0A0A0A] border-t border-ink-900/5 dark:border-[#262626]">
            <h4 className="text-[13px] font-bold text-ink-900 dark:text-[#FFFFFF] leading-snug line-clamp-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {title}
            </h4>
            <p className="mt-1 text-[11.5px] leading-4 text-ink-500 dark:text-[#A3A3A3] line-clamp-1">
              {description}
            </p>
          </div>
        </div>
      ) : (
        /* CLEAN PLACEHOLDER CARD IF NO VIDEO IS AVAILABLE */
        <div className="rounded-xl border border-dashed border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.02] dark:bg-[#0A0A0A] p-4 text-center">
          <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-ink-900/5 dark:bg-[#171717] text-ink-400 dark:text-[#737373] mb-2">
            <VideoOff size={16} />
          </div>
          <p className="text-xs font-semibold text-ink-800 dark:text-[#E5E5E5]">
            No tutorial video available for this page.
          </p>
          <p className="mt-1 text-[11px] text-ink-500 dark:text-[#A3A3A3] flex items-center justify-center gap-1">
            <CheckCircle2 size={12} className="text-emerald-500" /> Text guide is up to date
          </p>
        </div>
      )}

      {/* FULL FEATURED ENTERPRISE HTML5 MEDIA PLAYER MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
          onClick={closePlayer}
        >
          <div
            ref={containerRef}
            onClick={(e) => e.stopPropagation()}
            onMouseMove={handleMouseMove}
            className="relative w-full max-w-4xl rounded-2xl bg-[#0A0A0A] border border-[#262626] shadow-2xl overflow-hidden group/player"
          >
            {/* Modal Header Bar */}
            <div className={`flex items-center justify-between border-b border-[#262626] px-4 py-3 bg-[#0A0A0A] transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0"}`}>
              <div className="flex items-center gap-2 min-w-0">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shrink-0">
                  Tutorial Video
                </span>
                <h3 className="text-xs font-bold text-white truncate">{title}</h3>
              </div>
              <button
                onClick={closePlayer}
                aria-label="Close Media Player"
                className="text-[#A3A3A3] hover:text-white p-1 rounded-lg hover:bg-[#171717] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Video Canvas Container */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              {/* Buffering Indicator */}
              {isBuffering && !videoError && (
                <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-xs">
                  <Loader2 size={36} className="text-cyan-400 animate-spin" />
                </div>
              )}

              {/* End of Video Replay Overlay */}
              {isEnded && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/75 backdrop-blur-xs">
                  <button
                    onClick={restartVideo}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-black hover:bg-cyan-400 hover:scale-110 transition-all shadow-lg shadow-cyan-500/30"
                  >
                    <RotateCcw size={24} />
                  </button>
                  <span className="mt-3 text-xs font-bold text-white">Replay Video</span>
                </div>
              )}

              {/* Video Element or Error Fallback */}
              {!videoError && videoSrc ? (
                <video
                  ref={videoRef}
                  src={videoSrc}
                  autoPlay
                  onClick={togglePlay}
                  onTimeUpdate={() => {
                    if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
                  }}
                  onLoadedMetadata={() => {
                    if (videoRef.current) setDuration(videoRef.current.duration);
                  }}
                  onWaiting={() => setIsBuffering(true)}
                  onPlaying={() => setIsBuffering(false)}
                  onEnded={() => {
                    setIsPlaying(false);
                    setIsEnded(true);
                  }}
                  onError={() => setVideoError(true)}
                  className="w-full h-full object-contain cursor-pointer"
                />
              ) : (
                /* ERROR OR MISSING MEDIA STATE */
                <div className="p-8 text-center max-w-md">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/30 mb-3">
                    <VideoOff size={22} />
                  </div>
                  <h3 className="text-sm font-bold text-white">No Tutorial Video Available</h3>
                  <p className="mt-1 text-xs text-[#A3A3A3] leading-5">
                    The requested video stream could not be loaded or is unavailable for this page.
                  </p>
                  <button
                    onClick={closePlayer}
                    className="mt-4 px-4 py-1.5 rounded-lg bg-[#262626] hover:bg-[#333333] text-white text-xs font-medium transition-colors"
                  >
                    Return to Documentation
                  </button>
                </div>
              )}
            </div>

            {/* FULL HTML5 CUSTOM CONTROLS OVERLAY */}
            {!videoError && videoSrc && (
              <div className={`p-3 bg-[#0A0A0A] border-t border-[#262626] transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0"}`}>
                {/* Timeline / Progress Bar */}
                <div className="flex items-center gap-2 mb-2">
                  <input
                    type="range"
                    min={0}
                    max={duration || 100}
                    step={0.1}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
                  />
                </div>

                {/* Control Buttons Toolbar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Play/Pause */}
                    <button
                      onClick={togglePlay}
                      className="p-1.5 rounded-lg text-white hover:bg-[#171717] hover:text-cyan-400 transition-colors"
                      title={isPlaying ? "Pause (Space)" : "Play (Space)"}
                    >
                      {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                    </button>

                    {/* Volume Controls */}
                    <div className="flex items-center gap-1.5 group/vol">
                      <button
                        onClick={toggleMute}
                        className="p-1.5 rounded-lg text-[#A3A3A3] hover:text-white transition-colors"
                        title={isMuted ? "Unmute (M)" : "Mute (M)"}
                      >
                        {isMuted || volume === 0 ? <VolumeX size={18} className="text-rose-400" /> : <Volume2 size={18} />}
                      </button>
                      <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.05}
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-16 h-1 bg-[#262626] rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
                      />
                    </div>

                    {/* Real Dynamic Timestamp (Loaded from Media Element) */}
                    <span className="text-[11px] font-mono text-[#A3A3A3] select-none">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  {/* Right Side Options */}
                  <div className="flex items-center gap-2">
                    {/* Playback Speed Selector */}
                    <select
                      value={playbackRate}
                      onChange={(e) => changeSpeed(parseFloat(e.target.value))}
                      className="bg-[#171717] border border-[#262626] text-white text-[11px] font-mono rounded px-1.5 py-0.5 focus:outline-none focus:border-cyan-500 cursor-pointer"
                      title="Playback Speed"
                    >
                      <option value={0.5}>0.5x</option>
                      <option value={1}>1.0x</option>
                      <option value={1.25}>1.25x</option>
                      <option value={1.5}>1.5x</option>
                      <option value={2}>2.0x</option>
                    </select>

                    {/* Picture in Picture */}
                    {document.pictureInPictureEnabled && (
                      <button
                        onClick={togglePiP}
                        className="p-1.5 rounded-lg text-[#A3A3A3] hover:text-white transition-colors"
                        title="Picture in Picture"
                      >
                        <PictureInPicture2 size={16} />
                      </button>
                    )}

                    {/* Fullscreen */}
                    <button
                      onClick={toggleFullscreen}
                      className="p-1.5 rounded-lg text-[#A3A3A3] hover:text-white transition-colors"
                      title="Fullscreen (F)"
                    >
                      <Maximize size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
