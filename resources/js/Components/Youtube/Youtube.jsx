import YouTube from 'react-youtube'

export default function VideoPlayer({ youtubeVideoId, aspectRatio, optsValues }) {
  const videoId = youtubeVideoId

  const opts = {
    width: optsValues.width,
    height: optsValues.height,
    aspectRatio: aspectRatio,
    playerVars: {
      autoplay: 0, 
    },
  }

  const onReady = (event) => {
    event.target.pauseVideo()
  }

  return (
    <YouTube videoId={videoId} opts={opts} onReady={onReady} className='rounded-lg overflow-hidden' />
  )
}