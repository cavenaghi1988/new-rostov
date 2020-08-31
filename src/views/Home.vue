<template>
  <div class="main">
    <loader
      v-if=" load"
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

      <!-- <div class="block"> -->
      <div class="city"> </div>

      <div
        v-for="(obj,i) in objs"
        :key="i"
        class="items"
      >
        <div :class="obj.block">
          <div :class="obj.name1">
            <div :class="obj.name2"></div>
          </div>
          <div
            v-on:mouseover="obj.over"
            v-on:mouseleave="obj.leave"
            v-on:click="obj.click"
            :class="obj.name4"
          ></div>
          <div
            v-on:mouseover="obj.over"
            v-on:mouseleave="obj.leave"
            v-on:click="obj.click"
            :class="obj.name3"
          ></div>
        </div>
      </div>
      <!-- </div> -->
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
    setInterval(() => {
      this.resize();
    }, 500);
  },

  mounted() {
    this.loader();
    setInterval(() => {
      this.bgResize();
    });
  },

  data() {
    return {
      desk: true,
      load: true,
      objs: [
        {
          block: "block1",
          name1: "box1",
          name2: "car1",
          name3: "visible1",
          name4: "window1",
          over: this.mouseover1,
          leave: this.mouseleave1,
          click: this.cl1
        },
        {
          block: "block2",
          name1: "box2",
          name2: "car2",
          name3: "visible2",
          name4: "window2",
          over: this.mouseover2,
          leave: this.mouseleave2,
          click: this.cl2
        },
        {
          block: "block3",
          name1: "box3",
          name2: "car3",
          name3: "visible3",
          name4: "window3",
          over: this.mouseover3,
          leave: this.mouseleave3,
          click: this.cl3
        },
        {
          block: "block4",
          name1: "box4",
          name2: "car4",
          name3: "visible4",
          name4: "window4",
          over: this.mouseover4,
          leave: this.mouseleave4,
          click: this.cl4
        },
        {
          block: "block5",
          name1: "box5",
          name2: "car5",
          name3: "visible5",
          name4: "window5",
          over: this.mouseover5,
          leave: this.mouseleave5,
          click: this.cl5
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["loading"])
  },
  methods: {
    loader() {
      setTimeout(() => {
        this.load = false;
      }, 1000);
    },
    getPage(select, link, tar) {
      const item = document.querySelector(select);
      if (item.offsetLeft >= tar.target.offsetLeft - 30) {
        this.$router.push(link);
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
    window(select, trX, trY) {
      const city = document.querySelector(".city");
      const win = document.querySelector(select);

      if (city) {
        const image = { width: 2930, height: 1003 };
        var target = { x: trX, y: trY };

        let h = city.clientHeight;
        let w = city.clientWidth;

        let xScale = w / image.width;
        let yScale = h / image.height;
        let scale;
        let yOffset = 0;
        let xOffset = 0;

        if (xScale > yScale) {
          scale = xScale;
          yOffset = (h - image.height * scale) / 2;
        } else {
          scale = yScale;
          xOffset = (w - image.width * scale) / 2;
        }

        win.style.top = target.y * scale + yOffset + "px";
        win.style.left = target.x * scale + xOffset + "px";
      }
    },
    bgResize() {
      this.window(".block1", 1005, 360);
      this.window(".block2", 1235, 600);
      this.window(".block3", 1475, 445);
      this.window(".block4", 1832, 364);
      this.window(".block5", 2072, 404);
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
  /* background-image: url(../assets/smoke_copy.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end; */

  .desk {
    width: 100%;
    height: 100%;
    /* min-width: 1266px;
    min-height: 720px;
    max-width: 2560px;
    max-height: 1440px;
    margin: 0 auto;
    background-image: url(../assets/city_new.png);
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative; */
    display: flex;
    align-items: flex-end;

    #nav {
      width: 100%;
      height: 10%;
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

    .city {
      width: 100%;
      height: 90%;
      /* min-width: 1279px;
      min-height: 719px; */
      /* max-width: 2560px;
      max-height: 1440px; */
      margin: 0 auto;
      background-image: url(../assets/city_new.png);
      background-position: center bottom;
      background-repeat: no-repeat;
      background-size: cover;
      /* position: relative;  */
    }
    .block1 {
      width: 1%;
      height: 1%;
      position: absolute;
      top: 31%;
      left: 19%;

      .box1 {
        width: 450%;
        height: 950%;
        position: absolute;
        left: -590%;
        top: -229%;
        overflow: hidden;
        opacity: 1;
        transform: scale(1);
        transition: left 0.5s, transform 1s;
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
        left: -50%;
        transform: scale(0);
      }
      .box1.out {
        left: -590%;
        transform: scale(1);
        transition: left 1s, transform 0.5s;
      }
      .window1 {
        width: 600%;
        height: 1150%;
        position: absolute;
        background-image: url(../assets/garage5.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        right: -355%;
        bottom: -600%;
        z-index: 0;
        cursor: pointer;
      }
      .visible1 {
        width: 600%;
        height: 1000%;
        position: absolute;
        right: -380%;
        bottom: -600%;
        z-index: 4;
        cursor: pointer;
      }
    }
    .block2 {
      width: 0.1%;
      height: 0.1%;
      position: absolute;
      top: 31%;
      left: 19%;

      .box2 {
        width: 6000%;
        height: 10000%;
        position: absolute;
        left: -8000%;
        top: -8000%;
        overflow: hidden;
        opacity: 1;
        transform: scale(1);
        transition: left 0.5s, transform 1s;
        z-index: 1;
        cursor: pointer;

        .car2 {
          width: 100%;
          height: 100%;
          background-image: url(../assets/car5.png);
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
      .box2.active {
        left: -1000%;
        transform: scale(0);
      }
      .box2.out {
        left: -8000%;
        transform: scale(1);
        transition: left 1s, transform 0.5s;
      }
      .window2 {
        width: 6000%;
        height: 10000%;
        position: absolute;
        background-image: url(../assets/garage4.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        left: -200%;
        bottom: -800%;
        z-index: 0;
        cursor: pointer;
      }
      .visible2 {
        width: 6000%;
        height: 10000%;
        position: absolute;
        left: -200%;
        bottom: -800%;
        z-index: 4;
        cursor: pointer;
      }
    }
    .block3 {
      width: 1%;
      height: 1%;
      position: absolute;
      top: 31%;
      left: 19%;
      .box3 {
        width: 450%;
        height: 950%;
        position: absolute;
        left: 800%;
        top: -350%;
        overflow: hidden;
        opacity: 1;
        transform: scale(1);
        transition: left 0.5s, transform 1s;
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
        left: 0%;
        transform: scale(0);
      }
      .box3.out {
        left: 800%;
        transform: scale(1);
        transition: left 1s, transform 0.5s;
      }
      .window3 {
        width: 800%;
        height: 1000%;
        position: absolute;
        background-image: url(../assets/garage3.png);
        background-repeat: no-repeat;
        background-position: left;
        background-size: contain;
        left: -50%;
        bottom: -540%;
        z-index: 0;
        cursor: pointer;
      }
      .visible3 {
        width: 800%;
        height: 1000%;
        position: absolute;
        left: -50%;
        bottom: -540%;
        z-index: 4;
        cursor: pointer;
      }
    }
    .block4 {
      width: 1%;
      height: 1%;
      position: absolute;
      top: 31%;
      left: 19%;
      .box4 {
        width: 450%;
        height: 950%;
        position: absolute;
        left: -630%;
        top: -270%;
        overflow: hidden;
        opacity: 1;
        transform: scale(1);
        transition: left 0.5s, transform 1s;
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
        left: 50%;
        transform: scale(0);
      }
      .box4.out {
        left: -630%;
        transform: scale(1);
        transition: left 1s, transform 0.5s;
      }
      .window4 {
        width: 900%;
        height: 1300%;
        position: absolute;
        background-image: url(../assets/garage2.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        left: 14.6%;
        bottom: -1000%;
        z-index: 0;
        cursor: pointer;
      }
      .visible4 {
        width: 900%;
        height: 1300%;
        position: absolute;
        left: 14.6%;
        bottom: -1000%;
        z-index: 4;
        cursor: pointer;
      }
    }
    .block5 {
      width: 1%;
      height: 1%;
      position: absolute;
      top: 31%;
      left: 19%;
      .box5 {
        width: 800%;
        height: 1200%;
        position: absolute;
        left: 700%;
        top: -340%;
        overflow: hidden;
        opacity: 1;
        transform: scale(1);
        transition: left 0.5s, transform 1s;
        z-index: 1;
        cursor: pointer;
        .car5 {
          width: 100%;
          height: 100%;
          background-image: url(../assets/car2.png);
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
      .box5.active {
        left: 40%;
        transform: scale(0);
      }
      .box5.out {
        left: 700%;
        transform: scale(1);
        transition: left 1s, transform 0.5s;
      }
      .window5 {
        width: 850%;
        height: 1000%;
        position: absolute;
        background-image: url(../assets/garage1.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        left: -51%;
        bottom: -641%;
        z-index: 0;
        cursor: pointer;
      }
      .visible5 {
        width: 850%;
        height: 1000%;
        position: absolute;
        left: -51%;
        bottom: -641%;
        z-index: 4;
        cursor: pointer;
      }
    }
    /* } */
  }
}

@media (max-width: 1920px) {
  .desk {
    background-size: 140% 100%;
  }
}
</style>
