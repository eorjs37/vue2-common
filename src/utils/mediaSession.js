const mediaSessionObject = {
  init() {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = null;
      navigator.mediaSession.playbackState = "none";
      return true;
    }

    return false;
  },
}

export { mediaSessionObject }
