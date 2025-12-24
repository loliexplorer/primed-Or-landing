'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react';
import { useAudioStore } from '@/lib/store/use-audio-store';

export function AudioPlayer() {
    const {
        isPlaying,
        tracks,
        currentTrackIndex,
        togglePlay,
        nextTrack,
        prevTrack,
        volume
    } = useAudioStore();

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const currentTrack = tracks[currentTrackIndex];

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch((error) => {
                    console.error("Autoplay prevented:", error);
                    // Optionally setPlaying(false) if autoplay blocked
                });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentTrackIndex]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    // Handle track end
    const onEnded = () => {
        nextTrack();
    };

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-4 bg-[#0E0B0A]/90 backdrop-blur-md p-3 rounded-full border border-white/10 shadow-2xl"
        >
            {/* Hidden Audio Element */}
            <audio
                ref={audioRef}
                src={currentTrack.src}
                onEnded={onEnded}
            />

            {/* Track Info (Collapsed by default, shown on hover/active could be nice, but keeping simple first) */}
            <div className="hidden md:flex flex-col text-right px-2">
                <span className="text-white text-xs font-medium">{currentTrack.name}</span>
                <span className="text-stone-400 text-[10px] uppercase">{currentTrack.artist}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
                <button
                    onClick={prevTrack}
                    className="p-2 text-stone-400 hover:text-white transition-colors"
                    aria-label="Previous Track"
                >
                    <SkipBack className="w-4 h-4" />
                </button>

                <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-[var(--primary-gold)] text-[#0E0B0A] flex items-center justify-center hover:bg-[var(--primary-gold-hover)] transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                    ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                    )}
                </button>

                <button
                    onClick={nextTrack}
                    className="p-2 text-stone-400 hover:text-white transition-colors"
                    aria-label="Next Track"
                >
                    <SkipForward className="w-4 h-4" />
                </button>
            </div>

            {/* Visualizer Animation (Simple) */}
            {isPlaying && (
                <div className="flex items-end gap-0.5 h-4 w-8">
                    <motion.div
                        animate={{ height: ["20%", "100%", "50%"] }}
                        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                        className="w-1 bg-[var(--primary-gold)]"
                    />
                    <motion.div
                        animate={{ height: ["50%", "20%", "80%"] }}
                        transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
                        className="w-1 bg-[var(--primary-gold)]"
                    />
                    <motion.div
                        animate={{ height: ["80%", "40%", "90%"] }}
                        transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                        className="w-1 bg-[var(--primary-gold)]"
                    />
                </div>
            )}
        </motion.div>
    );
}
