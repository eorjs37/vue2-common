import Hls from 'hls.js'
const videoplayer = {
  video: null,
  hls: null,
  config: {
    // !!(window.location.hostname === 'localhost' || window.location.hostname === 'dev.www.aplayz.co.kr')
    debug: false,
    startPosition: -1,
    autoStartLoad: false,
    enableWorker: true,
    lowLatencyMode: true,
    maxBufferLength: 30,
    // maxBufferHole: 0,
    // liveSyncDurationCount: 3,
    // liveMaxLatencyDurationCount: 4,
    // maxLiveSyncPlaybackRate: 2,
    maxMaxBufferLength: 600,
    backBufferLength: 0,
    manifestLoadPolicy: {
      default: {
        maxTimeToFirstByteMs: Infinity,
        maxLoadTimeMs: 20000,
        timeoutRetry: {
          maxNumRetry: 20,
          retryDelayMs: 4000,
          maxRetryDelayMs: 5000
        },
        errorRetry: {
          maxNumRetry: 20,
          retryDelayMs: 4000,
          maxRetryDelayMs: 5000
        }
      }
    },
    fragLoadPolicy: {
      default: {
        maxTimeToFirstByteMs: 1000000,
        maxLoadTimeMs: 120000,
        timeoutRetry: {
          maxNumRetry: 10,
          retryDelayMs: 15000,
          maxRetryDelayMs: 1000 * 120
        },
        errorRetry: {
          maxNumRetry: 15,
          retryDelayMs: 10000,
          maxRetryDelayMs: 1000 * 180
        }
      }
    },
    startLevel: undefined,
    nudgeOffset: 0,
    nudgeMaxRetry: 10,
    playlistLoadPolicy: {
      default: {
        maxTimeToFirstByteMs: 10000,
        maxLoadTimeMs: 20000,
        timeoutRetry: {
          maxNumRetry: 2,
          retryDelayMs: 0,
          maxRetryDelayMs: 0
        },
        errorRetry: {
          maxNumRetry: 10,
          retryDelayMs: 1000,
          maxRetryDelayMs: 2000
        }
      }
    }
  },
  setVideo(videoele) {
    this.video = videoele
  },
  getVideo() {
    return this.video
  },
  playerMusic(url) {
    if (Hls.isSupported()) {
      if (this.hls) this.hls.destroy()
      this.hls = new Hls(this.config)
      if (url) this.hls.loadSource(url)
      this.hls.attachMedia(this.video)
      this.video.muted = false
    }
  },
  startLoad(val) {
    if (this.hls) {
      this.hls.startLoad(val)
    }
  },
  onPlay() {
    return this.video.play()
  },
  fadeOut(volumeval) {
    const volume = parseFloat(volumeval) - 0.1
    return new Promise((resolve) => {
      if (parseFloat(volume) > 0) {
        setTimeout(() => {
          this.setVolume(volume)
          this.fadeOut(volume).then(() => {
            resolve(true)
          })
        }, 1000)
      } else {
        resolve(true)
      }
    })
  },
  fadeIn(volumeval) {
    const volume = parseFloat(volumeval) + 0.1
    return new Promise((resolve) => {
      if (parseFloat(volume) < 1) {
        setTimeout(() => {
          this.setVolume(volume)
          this.fadeIn(volume).then(() => {
            resolve(true)
          })
        }, 1000)
      } else {
        this.setVolume(1)
        resolve(true)
      }
    })
  },
  setVolume(val) {
    this.video.volume = parseFloat(val)
  }
}

export { videoplayer }
