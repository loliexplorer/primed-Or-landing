import { create } from 'zustand';

export interface Track {
    id: string;
    name: string;
    artist: string;
    src: string;
}

interface AudioState {
    isPlaying: boolean;
    currentTrackIndex: number;
    tracks: Track[];
    volume: number;
    togglePlay: () => void;
    setVolume: (vol: number) => void;
    nextTrack: () => void;
    prevTrack: () => void;
}

export const playlist: Track[] = [
    {
        id: 'morning-dew',
        name: 'Morning Dew',
        artist: 'Nature Sounds',
        // Using reliable direct MP3 links (Example: Orange Free Sounds or similar public domain)
        src: 'https://cdn.pixabay.com/audio/2022/02/07/audio_1808fbf07a.mp3',
    },
    {
        id: 'deep-focus',
        name: 'Deep Focus',
        artist: 'White Noise',
        src: 'https://cdn.pixabay.com/audio/2022/03/24/audio_c8c8a73467.mp3',
    },
    {
        id: 'midnight-jazz',
        name: 'Midnight Jazz',
        artist: 'Smooth Jazz',
        src: 'https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3',
    }
];

export const useAudioStore = create<AudioState>((set, get) => ({
    isPlaying: false,
    currentTrackIndex: 0,
    tracks: playlist,
    volume: 0.5,
    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
    setVolume: (vol) => set({ volume: vol }),
    nextTrack: () => {
        const { currentTrackIndex, tracks } = get();
        const nextIndex = (currentTrackIndex + 1) % tracks.length;
        set({ currentTrackIndex: nextIndex });
    },
    prevTrack: () => {
        const { currentTrackIndex, tracks } = get();
        const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        set({ currentTrackIndex: prevIndex });
    },
}));
