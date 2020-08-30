<template>
  <div class="mobile">
    <div
      class="btn"
      @click="change"
    >
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <div class="menu">
      <router-link
        v-for="(item) in menuObj"
        :key="item.name"
        :to="item.links"
        class="menu__link"
      >
        <div class="menu__text"><span>{{item.name}}</span></div>
      </router-link>

    </div>
    <carousel-3d
      :controls-visible="false"
      :clickable="false"
      :width="202"
      :height="224"
      :display="7"
      :space="200"
      :startIndex="indexScroll()"
    >
      <slide
        v-for="obj in objs"
        :key="obj.id"
        :index="obj.id-1"
      >
        <div
          v-if="
            obj.day == time.c.day && obj.begin <= time.c.hour && obj.end > time.c.hour
              ? (obj.play = true)
              : (obj.play = false)
          "
          class="modal"
          v-on:click="see = true"
        ></div>
        <div
          v-else
          class="beb"
          v-on:click="see = false"
        ></div>
        <figcaption>
          {{obj.text}}
        </figcaption>
      </slide>
    </carousel-3d>
    <transition
      v-for="obj in objs"
      :key="obj.id"
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
<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Carousel3d,
    Slide
  },
  data() {
    return {
      iframeLoad(e) {
        if (e.timeStamp < 10000) {
          this.iframeLoaded = true;
        }
      },
      see: false,
      show: false,
      menuObj: [
        { name: "", links: "/" },
        { name: "ТЕХНОНАВИГАТОР", links: "/" },
        { name: "МАРШРУТЫ", links: "/" },
        { name: "КОНТАКТЫ", links: "/" }
      ],
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
          end: 23,
          link: "https://www.youtube.com/embed/paXfJGUmku4",
          text: "Название вебинара № 7"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["time", "loading"]),
    ...mapActions(["times"])
  },
  methods: {
    change() {
      const bar1 = document.querySelector(".bar1");
      const bar2 = document.querySelector(".bar2");
      const bar3 = document.querySelector(".bar3");
      const menu = document.querySelector(".menu");
      bar1.classList.toggle("change");
      bar2.classList.toggle("change");
      bar3.classList.toggle("change");
      menu.classList.toggle("show");
    },
    close() {
      this.see = false;
    },
    indexScroll() {
      var result = this.objs.find(o => {
        return (
          o.day == this.time.c.day &&
          o.begin <= this.time.c.hour &&
          o.end > this.time.c.hour
        );
      });
      if (result) {
        return result.id - 1;
      } else {
        return 0;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.mobile {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .menu {
    width: 100%;
    height: 30%;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translate(-100%);
    transition: transform 1s;
    z-index: 1000;

    &__link {
      width: 100%;
      height: 24.95%;
      text-decoration: none;
      font-size: 2rem;
      font-family: RussoOne, sans-serif;
      font-weight: normal;
    }
    &__text {
      width: 100%;
      height: 24.95%;
      background-image: url(../assets/back_btn.png);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      box-shadow: 0px 0px 16px gray;
      border-radius: 2px;
      z-index: 3;
      border-top: 2px solid;
      border-bottom: 2px solid;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      margin-top: 4px;

      &:last-child {
        border-bottom: none;
      }
    }
    .menu_text span {
      font-size: 2rem;
      font-weight: 700;
    }
  }
  .menu.show {
    transform: translate(0%);
  }

  .link {
    width: 64%;
    height: 8.5%;
  }

  .btn {
    width: 36px;
    height: 51px;
    position: absolute;
    top: 1%;
    left: 2%;
    z-index: 1001;
    cursor: pointer;

    .bar1,
    .bar2,
    .bar3 {
      width: 100%;
      height: 5px;
      background-color: #ffffff;
      margin: 6px 0;
      transition: 0.4s;
    }

    .bar1.change {
      transform: rotate(-45deg) translate(-9px, 6px);
    }

    .bar2.change {
      opacity: 0;
    }

    .bar3.change {
      transform: rotate(45deg) translate(-8px, -8px);
    }
  }

  .carousel-3d-slide {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    width: 50%;
    height: 50vh;
  }

  .carousel-3d-container figure {
    margin: 0;
  }

  .carousel-3d-container figcaption {
    position: absolute;
    text-align: center;
    /* background-color: rgba(0, 0, 0, 0.5); */
    color: #fff;
    bottom: 0;
    position: absolute;
    bottom: 0;
    padding: 15px;
    font-size: 12px;
    min-width: 100%;
    box-sizing: border-box;
  }

  .beb {
    width: 100%;
    height: 100%;
    background-image: url(../assets/close.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .modal {
    width: 100%;
    height: 100%;
    background-image: url(../assets/play.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: transform 1s;
    transform: scale(0.8);
    cursor: pointer;

    &:hover {
      transform: scale(0.9);
    }

    &:active {
      transform: translateY(5%);
    }
  }
  .modal-mask {
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;

    .window {
      width: 100%;
      height: 50vh;
      background-color: black;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      iframe {
        width: 100%;
        height: 100vh;
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
        right: 2%;
        cursor: pointer;

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
</style>
