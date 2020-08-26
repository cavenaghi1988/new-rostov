<template>
  <div class="main">
    <loader
      v-if="loading"
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
    <Mobile v-if="!desk" />
    <div
      v-if="desk"
      class="desk"
    >
      <img
        src="../assets/city.png"
        alt="city"
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
      <div class="box1">
        <div class="car1"></div>
      </div>
      <div
        v-on:mouseover="mouseover1"
        v-on:mouseleave="mouseleave1"
        v-on:click="cl1"
        class="window1"
      ></div>
      <div
        v-on:mouseover="mouseover1"
        v-on:mouseleave="mouseleave1"
        v-on:click="cl1"
        class="visible1"
      ></div>

      <div class="box2">
        <div class="car2"></div>
      </div>
      <div
        v-on:mouseover="mouseover2"
        v-on:mouseleave="mouseleave2"
        v-on:click="cl2"
        class="window2"
      ></div>
      <div
        v-on:mouseover="mouseover2"
        v-on:mouseleave="mouseleave2"
        v-on:click="cl2"
        class="visible2"
      ></div>
      <div class="box3">
        <div class="car3"></div>
      </div>
      <div
        v-on:mouseover="mouseover3"
        v-on:mouseleave="mouseleave3"
        v-on:click="cl3"
        class="window3"
      ></div>
      <div
        v-on:mouseover="mouseover3"
        v-on:mouseleave="mouseleave3"
        v-on:click="cl3"
        class="visible3"
      ></div>
      <div class="box4">
        <div class="car4"></div>
      </div>
      <div
        v-on:mouseover="mouseover4"
        v-on:mouseleave="mouseleave4"
        v-on:click="cl4"
        class="window4"
      ></div>
      <div
        v-on:mouseover="mouseover4"
        v-on:mouseleave="mouseleave4"
        v-on:click="cl4"
        class="visible4"
      ></div>
      <div class="box5">
        <div class="car5"></div>
      </div>
      <div
        v-on:mouseover="mouseover5"
        v-on:mouseleave="mouseleave5"
        v-on:click="cl5"
        class="window5"
      ></div>
      <div
        v-on:mouseover="mouseover5"
        v-on:mouseleave="mouseleave5"
        v-on:click="cl5"
        class="visible5"
      ></div>
    </div>
  </div>
</template>

<script>
import Mobile from "../components/mobile.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    Mobile
  },
  created() {
    this.loader();
    setInterval(() => {
      this.resize();
    }, 500);
  },
  data() {
    return {
      iframeLoaded: false,
      desk: true,
      loading: true
    };
  },
  computed: {
    ...mapGetters(["time", "loading"])
  },
  methods: {
    loader() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    iframeLoad(e) {
      if (e.timeStamp < 10000) {
        this.iframeLoaded = true;
      }
    },
    getPage(select, link, tar) {
      const item = document.querySelector(select);
      if (item.offsetLeft >= tar.target.offsetLeft - 30) {
        setTimeout(() => {
          this.$router.push(link);
        }, 1000);
      }
    },
    cl1(e) {
      this.getPage(".box1", "/page1", e);
    },
    cl2(e) {
      this.getPage(".box2", "/page2", e);
    },
    cl3(e) {
      this.getPage(".box3", "/page3", e);
    },
    cl4(e) {
      this.getPage(".box4", "/page4", e);
    },
    cl5(e) {
      this.getPage(".box5", "/page5", e);
    },

    getMouveMouse(select) {
      const car = document.querySelector(select);
      car.classList.add("active");
      car.classList.remove("out");
    },

    mouseover1() {
      this.getMouveMouse(".box1");
    },
    mouseover2() {
      this.getMouveMouse(".box2");
    },
    mouseover3() {
      this.getMouveMouse(".box3");
    },
    mouseover4() {
      this.getMouveMouse(".box4");
    },
    mouseover5() {
      this.getMouveMouse(".box5");
    },

    getLeaveMouse(select) {
      const car = document.querySelector(select);
      car.classList.add("out");
    },
    mouseleave1() {
      this.getLeaveMouse(".box1");
    },
    mouseleave2() {
      this.getLeaveMouse(".box2");
    },
    mouseleave3() {
      this.getLeaveMouse(".box3");
    },
    mouseleave4() {
      this.getLeaveMouse(".box4");
    },
    mouseleave5() {
      this.getLeaveMouse(".box5");
    },
    resize() {
      const size = document.querySelector("body");
      if (size.clientWidth < 980) {
        this.desk = false;
      } else {
        this.desk = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/smoke_copy.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .desk {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0%;
    left: 0%;

    #nav {
      width: 100%;
      position: absolute;
      top: 0%;
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
        font-family: sans-serif;
        font-size: 3.6rem;
        font-weight: 400;
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

    img {
      width: 100%;
      height: 100%;
    }

    .box1 {
      width: 6%;
      height: 5.6%;
      position: absolute;
      left: 16%;
      top: 32%;
      overflow: hidden;
      opacity: 1;
      transform: scale(1);
      transition: left 1s, transform 2s;
      z-index: 1;
      cursor: pointer;

      .car1 {
        width: 100%;
        height: 100%;
        background-image: url(../assets/car1.png);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
    .box1.active {
      left: 21%;
      transform: scale(0);
    }

    .box1.out {
      left: 16%;
      transform: scale(1);
      transition: left 2s, transform 1s;
    }

    .window1 {
      width: 3.4%;
      height: 13.6%;
      position: absolute;
      background-image: url(../assets/garage5.png);
      background-repeat: no-repeat;
      background-position: left;
      background-size: contain;
      left: 22.8%;
      bottom: 56%;
      z-index: 0;
      cursor: pointer;
    }

    .visible1 {
      width: 3.4%;
      height: 13.6%;
      position: absolute;
      left: 22.8%;
      bottom: 56%;
      z-index: 4;
      cursor: pointer;
    }

    .box2 {
      width: 4.5%;
      height: 4.8%;
      position: absolute;
      left: 27.6%;
      top: 50%;
      overflow: hidden;
      opacity: 1;
      transform: scale(1);
      transition: left 1s, transform 2s;
      z-index: 1;
      cursor: pointer;

      .car2 {
        width: 100%;
        height: 100%;
        background-image: url(../assets/car2.png);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
    .box2.active {
      left: 36%;
      transform: scale(0);
    }

    .box2.out {
      left: 27.6%;
      transform: scale(1);
      transition: left 2s, transform 1s;
    }

    .window2 {
      width: 7%;
      height: 8.7%;
      position: absolute;
      background-image: url(../assets/garage4.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      left: 34.4%;
      bottom: 43.3%;
      z-index: 0;
      cursor: pointer;
    }
    .visible2 {
      width: 7%;
      height: 8.7%;
      position: absolute;
      left: 34.4%;
      bottom: 43.3%;
      z-index: 4;
      cursor: pointer;
    }
    .box3 {
      width: 6.6%;
      height: 4.6%;
      position: absolute;
      left: 53%;
      top: 41%;
      overflow: hidden;
      opacity: 1;
      transform: scale(1);
      transition: left 1s, transform 2s;
      z-index: 1;
      cursor: pointer;

      .car3 {
        width: 100%;
        height: 100%;
        background-image: url(../assets/car3.png);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
    .box3.active {
      left: 46%;
      transform: scale(0);
    }

    .box3.out {
      left: 53%;
      transform: scale(1);
      transition: left 2s, transform 1s;
    }

    .window3 {
      width: 8%;
      height: 8%;
      position: absolute;
      background-image: url(../assets/garage3.png);
      background-repeat: no-repeat;
      background-position: left;
      background-size: contain;
      left: 47%;
      bottom: 52%;
      z-index: 0;
      cursor: pointer;
    }
    .visible3 {
      width: 8%;
      height: 8%;
      position: absolute;
      left: 47%;
      bottom: 52%;
      z-index: 4;
      cursor: pointer;
    }
    .box4 {
      width: 6.5%;
      height: 3.9%;
      position: absolute;
      left: 58%;
      top: 33%;
      overflow: hidden;
      opacity: 1;
      transform: scale(1);
      transition: left 1s, transform 2s;
      z-index: 1;
      cursor: pointer;

      .car4 {
        width: 100%;
        height: 100%;
        background-image: url(../assets/car4.png);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
    .box4.active {
      left: 68%;
      transform: scale(0);
    }

    .box4.out {
      left: 58%;
      transform: scale(1);
      transition: left 2s, transform 1s;
    }

    .window4 {
      width: 10%;
      height: 13.5%;
      position: absolute;
      background-image: url(../assets/garage2.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      left: 66%;
      bottom: 56%;
      z-index: 0;
      cursor: pointer;
    }
    .visible4 {
      width: 10%;
      height: 13.5%;
      position: absolute;
      left: 66%;
      bottom: 56%;
      z-index: 4;
      cursor: pointer;
    }
    .box5 {
      width: 6.5%;
      height: 5%;
      position: absolute;
      left: 88%;
      top: 42.5%;
      overflow: hidden;
      opacity: 1;
      transform: scale(1);
      transition: left 1s, transform 2s;
      z-index: 1;
      cursor: pointer;

      .car5 {
        width: 100%;
        height: 100%;
        background-image: url(../assets/car5.png);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
    .box5.active {
      left: 77.7%;
      transform: scale(0);
    }

    .box5.out {
      left: 88%;
      transform: scale(1);
      transition: left 2s, transform 1s;
    }

    .window5 {
      width: 8.7%;
      height: 10%;
      position: absolute;
      background-image: url(../assets/garage1.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      left: 77.9%;
      /* top: 21.5%; */
      bottom: 48.6%;
      z-index: 0;
      cursor: pointer;
    }
    .visible5 {
      width: 8.7%;
      height: 10%;
      position: absolute;
      left: 77.9%;
      bottom: 48.6%;
      z-index: 4;
      cursor: pointer;
    }
  }
}
</style>
