import React, { useRef, useEffect } from 'react'

interface VideoPlayerProps {
  src: string
  isPlaying: boolean
  onEnded: () => void
  className?: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  src, 
  isPlaying, 
  onEnded, 
  className = '' 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [isPlaying])

  return (
    <video
      ref={videoRef}
      src={src}
      className={`w-full h-full object-cover rounded-lg ${className}`}
      onEnded={onEnded}
      muted
      playsInline
    />
  )
}

export default VideoPlayer
