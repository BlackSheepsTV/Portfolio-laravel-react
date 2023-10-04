import YouTube from 'react-youtube'

const VideoPlayer = () => {
  const videoId = 'T4rhSRbCHfY';

  const opts = {
    width: '100%',
    aspectRatio: '16:9',
    playerVars: {
      autoplay: 0, 
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo(); 
  };

  return (
    <div className='w-full h-full sm:w-[640px] sm:h-[360px] rounded-xl overflow-hidden'>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  );
};

export default VideoPlayer;