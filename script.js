/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/muhammederdem/mini-player
*/

new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Track No62 Unit 1",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "./Round4Audios/R-4-LU-1/Track No62.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        },
        {
          name: "Track No63 Unit 1",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-1/Track No63.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        },
        {
          name: "Track No64 Unit 1",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-1/Track No64.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No66 Unit 2",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-2/Track No66.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No67 Unit 2",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-2/Track No67.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No68 Unit 2",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-2/Track No68.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No69 Unit 2",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-2/Track No69.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No02 Unit 3",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-3/Track No02.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No05 Unit 3",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-3/Track No05.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No06 Unit 3",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-3/Track No06.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No07 Unit 4",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-4/Track No07.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No08 Unit 4",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-4/Track No08.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No11 Unit 5",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-5/Track No11.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No12 Unit 5",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-5/Track No12.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No13 Unit 5",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-5/Track No13.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No14 Unit 5",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-5/Track No14.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No17 Unit 6",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-6/Track No17.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No18 Unit 6",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-6/Track No18.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No19 Unit 7",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-7/Track No19.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No20 Unit 7",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-7/Track No20.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No21 Unit 7",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-7/Track No21.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No22 Unit 7",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-7/Track No22.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No23 Unit 7",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-7/Track No23.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No25 Unit 8",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-8/Track No25.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
        , {
          name: "Track No26 Unit 8",
          artist: "Round 4",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "./Round4Audios/R-4-LU-8/Track No26.mp3",
          url: "https://www.celc.edu.af/site/userlogin",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function () {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function () {
      vm.generateTime();
    };
    this.audio.onended = function () {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});