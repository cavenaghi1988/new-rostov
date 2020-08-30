<template>
  <div class="main">
    <loader
      v-if="load"
      object="#ff9633"
      color1="#ffffff"
      color2="#17fd3d"
      size="5"
      speed="2"
      bg="#343a40"
      objectbg="#999793"
      opacity="100"
      name="circular"
    ></loader>
    <div
      v-if="!show"
      class="mobile"
    >
      <MobilePage />
    </div>
    <div
      v-if="show"
      class="desk"
    >
      <div id="nav">
        <ul>
          <router-link to="/">
            <li>ТЕХНОНАВИГАТОР</li>
          </router-link>
          <router-link to="/">
            <li>МАРШРУТЫ</li>
          </router-link>
          <router-link to="/">
            <li>КОНТАКТЫ</li>
          </router-link>
        </ul>
      </div>
      <template v-if="loading">
        <div
          v-for="obj in objs"
          :key="obj.id"
          class="block"
        >
          <div
            v-if="
            obj.day == time.c.day && obj.begin <= time.c.hour && obj.end > time.c.hour
              ? (obj.play = true)
              : (obj.play = false)
          "
            v-on:click="see = true"
            class="wind"
          >
            <div class="modal">
            </div>
            <div class="auto"></div>
          </div>
          <div
            v-else
            class="beb"
            v-on:click="see = true"
          ></div>
          <div class="text">
            <span>{{obj.text}}</span>
          </div>
          <transition
            name="slide-fade"
            mode="out-in"
          >
            <div
              v-if="see && obj.play"
              class="modal-mask"
            >
              <div class="window">
                <iframe
                  class="video"
                  :src="obj.link"
                  frameborder="0"
                  :class="{ loading: !iframeLoaded }"
                  @load="iframeLoad"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div
                  class="close"
                  @click="close"
                >
                  <div class="line1"></div>
                  <div class="line2"></div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import MobilePage from "../components/pageMobile";
export default {
  components: {
    MobilePage
  },
  data() {
    return {
      iframeLoaded: false,
      see: false,
      show: true,
      load: true,
      objs: [
        {
          id: 1,
          day: 31,
          play: false,
          begin: 0,
          end: 1,
          link: "https://www.youtube.com/embed/paXfJGUmku4",
          text: "Название вебинара № 1"
        },
        {
          id: 2,
          day: 31,
          play: false,
          begin: 1,
          end: 6,
          link: "https://www.youtube.com/embed/paXfJGUmku4",
          text: "Название вебинара № 2"
        },
        {
          id: 3,
          day: 31,
          play: false,
          begin: 6,
          end: 9,
          link: "https://www.youtube.com/embed/skjjZNvNS14",
          text: "Название вебинара № 3"
        },
        {
          id: 4,
          day: 31,
          play: false,
          begin: 9,
          end: 12,
          link: "https://www.youtube.com/embed/paXfJGUmku4",
          text: "Название вебинара № 4"
        },
        {
          id: 5,
          day: 31,
          play: false,
          begin: 12,
          end: 15,
          link: "https://www.youtube.com/embed/paXfJGUmku4",
          text: "Название вебинара № 5"
        },
        {
          id: 6,
          day: 31,
          play: false,
          begin: 15,
          end: 18,
          link: "https://www.youtube.com/embed/paXfJGUmku4",
          text: "Название вебинара № 6"
        },
        {
          id: 7,
          day: 31,
          play: false,
          begin: 18,
          end: 21,
          link: "https://www.youtube.com/embed/paXfJGUmku4",
          text: "Название вебинара № 7"
        }
      ]
    };
  },
  created() {
    setInterval(() => {
      this.resize();
    }, 500);
  },
  mounted() {
    this.loader();
  },
  computed: {
    ...mapGetters(["time", "loading"]),
    ...mapActions(["times"])
  },
  methods: {
    loader() {
      setTimeout(() => {
        this.load = false;
      }, 1000);
    },
    close() {
      this.see = false;
    },
    iframeLoad(e) {
      if (e.timeStamp < 10000) {
        this.iframeLoaded = true;
      }
    },
    resize() {
      const size = document.querySelector("body");
      if (size.clientWidth < 980) {
        this.show = false;
      } else {
        this.show = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/light.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .desk {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;

    #nav {
      width: 100%;
      position: absolute;
      top: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 233;

      a {
        text-decoration: none;
      }

      ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      li {
        font-weight: bold;
        margin-top: 20px;
        color: #fafbfc;
        font-family: RussoOne, sans-serif;
        font-size: 3.6rem;
        font-weight: normal;
        margin-right: 30px;
        transform: scale(0.97);
        transition: transform 500ms;

        &:hover {
          transform: scale(1);
        }

        &.router-link-exact-active {
          color: #fafbfc;
        }
      }
    }
  }

  .mobile {
    width: 100%;
    height: 100vh;
  }

  .block {
    width: 10.5%;
    height: 20.7%;

    &:nth-child(2n + 1) {
      margin-top: 8%;
    }

    .beb {
      width: 100%;
      height: 100%;
      background-image: url(../assets/close.png);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }

    .text {
      color: #ffffff;
      text-align: center;
    }
    .text span {
      font-size: 1.5rem;
    }

    .wind {
      width: 100%;
      height: 100%;
      position: relative;

      .modal {
        width: 100%;
        height: 100%;
        background-image: url(../assets/play.png);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        transition: transform 1s;
        cursor: pointer;

        &:hover {
          transform: scale(0.9);
        }

        &:active {
          transform: translateY(5%);
        }
      }

      .auto {
        width: 100%;
        height: 60%;
        background-image: url(../assets/car2.png);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: -70%;
        left: 2%;
        animation-name: car;
        animation-delay: 1s;
        animation-duration: 4s;
        animation-fill-mode: forwards;
      }

      @keyframes car {
        0% {
          top: -70%;
        }
        100% {
          top: -40%;
        }
      }
    }

    .modal-mask {
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      display: table;
      transition: opacity 0.3s ease;

      .window {
        width: 50%;
        height: 50vh;
        background-color: black;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        iframe {
          width: 100%;
          height: 100%;
        }
        .loading {
          width: 100%;
          height: 100%;
          background-image: url(../assets/Pulse-1s-200px.svg);
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
        }
        .close {
          width: 6%;
          height: 14%;
          color: #ffffff;
          position: absolute;
          top: -10%;
          right: 0%;
          cursor: pointer;
          text-align: center;
          font-size: 2rem;

          .line1 {
            transform: rotate(-45deg) translate(0px, 6px);
            width: 100%;
            height: 3px;
            background-color: #ffffff;
            margin: 6px 0;
            transition: 0.4s;
          }
          .line2 {
            transform: rotate(45deg) translate(0px, -7px);
            width: 100%;
            height: 3px;
            background-color: #ffffff;
            margin: 6px 0;
            transition: 0.4s;
          }
        }
      }
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
