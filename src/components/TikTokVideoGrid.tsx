"use client";

import { useState } from "react";

interface VideoData {
  videoId: string;
  thumbnailUrl: string | null;
  title: string | null;
}

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z" />
    </svg>
  );
}

function TikTokCard({ videoId, thumbnailUrl, title }: VideoData) {
  const [playing, setPlaying] = useState(false);
  const tiktokUrl = `https://www.tiktok.com/@infinityfencingnw/video/${videoId}`;

  if (playing) {
    return (
      <div className="border border-brand-amber overflow-hidden bg-white">
        <iframe
          src={`https://www.tiktok.com/embed/v2/${videoId}`}
          className="w-full"
          height="740"
          allow="encrypted-media"
          allowFullScreen
          style={{ border: "none" }}
        />
      </div>
    );
  }

  return (
    <div className="border border-brand-fog hover:border-brand-amber transition-colors overflow-hidden bg-brand-charcoal group">
      <button
        onClick={() => setPlaying(true)}
        className="relative w-full block cursor-pointer"
        aria-label={`Play TikTok video${title ? `: ${title}` : ""}`}
      >
        {thumbnailUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnailUrl}
            alt={title ?? "TikTok video"}
            className="w-full object-cover"
            style={{ aspectRatio: "9/16" }}
          />
        ) : (
          <div className="w-full bg-brand-charcoal" style={{ aspectRatio: "9/16" }} />
        )}
        {/* Play overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-black/20 group-hover:bg-brand-black/50 transition-colors">
          <div className="w-16 h-16 rounded-full bg-white/20 group-hover:bg-brand-amber flex items-center justify-center transition-colors mb-3">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-white font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            Click to play
          </p>
        </div>
      </button>

      {/* Card footer */}
      <div className="px-4 py-3 bg-brand-charcoal flex items-center justify-between">
        <div className="flex items-center gap-2 text-brand-fog">
          <TikTokIcon size={14} />
          <span className="text-xs font-mono">@infinityfencingnw</span>
        </div>
        <a
          href={tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-amber text-xs font-mono uppercase tracking-widest hover:text-white transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          Open ↗
        </a>
      </div>
    </div>
  );
}

export function TikTokVideoGrid({ videos }: { videos: VideoData[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <TikTokCard key={video.videoId} {...video} />
      ))}
    </div>
  );
}
