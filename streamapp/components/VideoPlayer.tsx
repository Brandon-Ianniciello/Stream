function VideoPlayer({ id }: { id: string }) {
  return (
    <video
      src={`/api/videos?videoId=${id}`}
      controls
      autoPlay
      id="video-player"
      muted
    />
  );
}

export default VideoPlayer;