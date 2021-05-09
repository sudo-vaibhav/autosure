const VideoInterface = ({ className = '', ...props }) => {
  return (
    <div className={`${className} p-8`}>
      <iframe
        title="meeting"
        allow="camera; microphone; fullscreen; display-capture; autoplay"
        src="https://meet.jit.si/testmeet16659"
        style={{ height: '100%', width: '100%', border: 0 }}
      />
    </div>
  )
}

export default VideoInterface
