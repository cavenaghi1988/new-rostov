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

      <!-- <div class="city">
        <div class="block"> -->

      <div
        v-for="(obj,i) in objs"
        :key="i"
        class="items"
      >
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
      <!-- </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Mobile from "../components/mobile.vue";
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
      desk: true,
      loading: true,
      objs: [
        {
          name1: "box1",
          name2: "car1",
          name3: "visible1",
          name4: "window1",
          over: this.mouseover1,
          leave: this.mouseleave1,
          click: this.cl1
        },
        {
          name1: "box2",
          name2: "car2",
          name3: "visible2",
          name4: "window2",
          over: this.mouseover2,
          leave: this.mouseleave2,
          click: this.cl2
        },
        {
          name1: "box3",
          name2: "car3",
          name3: "visible3",
          name4: "window3",
          over: this.mouseover3,
          leave: this.mouseleave3,
          click: this.cl3
        },
        {
          name1: "box4",
          name2: "car4",
          name3: "visible4",
          name4: "window4",
          over: this.mouseover4,
          leave: this.mouseleave4,
          click: this.cl4
        },
        {
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
  methods: {
    loader() {
      setTimeout(() => {
        this.loading = false;
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
    // bgResize() {
    //   const size = document.querySelector("body");
    //   const city = document.querySelector(".city");

    //   let h = size.clientHeight;
    //   let w = size.clientWidth;

    //    city.style.width = (w / 1920) * 100 + "%";
    //    city.style.height = (h / 1080) * 100 + "%";
    // },
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
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .desk {
    width: 100%;
    height: 100%;
    min-width: 1200px;
    min-height: 660px;
    background-image: url(../assets/town.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 150% 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: relative;

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

    /* .city {
      width: 100%;
      height: 90%;
       min-width: 1280px;
      min-height: 650px; 
       max-width: 1920px;
      max-height: 1003px; 
      background-image: url(../assets/city_new.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: fixed;
      bottom: 0%;
      left: 50%;
      transform: translate(-50%);

      .block {
        width: 77%;
        height: 29%;
        position: fixed;
        left: 20.5%;
        top: 29%; */

    .box1 {
      width: 6%;
      height: 5.6%;
      position: absolute;
      left: 14%;
      top: 32%;
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
      left: 19%;
      transform: scale(0);
    }
    .box1.out {
      left: 14%;
      transform: scale(1);
      transition: left 1s, transform 0.5s;
    }
    .window1 {
      width: 3.4%;
      height: 13.6%;
      position: absolute;
      background-image: url(../assets/garage5.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      left: 20.7%;
      bottom: 56%;
      z-index: 0;
      cursor: pointer;
    }
    .visible1 {
      width: 3.4%;
      height: 13.6%;
      position: absolute;
      left: 20.7%;
      bottom: 56%;
      z-index: 4;
      cursor: pointer;
    }
    .box2 {
      width: 9.5%;
      height: 9.8%;
      position: absolute;
      left: 24.6%;
      top: 47%;
      overflow: hidden;
      opacity: 1;
      transform: scale(1);
      transition: left 0.5s, transform 1s;
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
      left: 31%;
      transform: scale(0);
    }
    .box2.out {
      left: 24.6%;
      transform: scale(1);
      transition: left 1s, transform 0.5s;
    }
    .window2 {
      width: 6%;
      height: 6.7%;
      position: absolute;
      background-image: url(../assets/garage4.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      left: 31.9%;
      bottom: 44.9%;
      z-index: 0;
      cursor: pointer;
    }
    .visible2 {
      width: 6%;
      height: 6.7%;
      position: absolute;
      left: 31.4%;
      bottom: 44.9%;
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
      left: 44%;
      transform: scale(0);
    }
    .box3.out {
      left: 53%;
      transform: scale(1);
      transition: left 1s, transform 0.5s;
    }
    .window3 {
      width: 6.5%;
      height: 6.5%;
      position: absolute;
      background-image: url(../assets/garage3.png);
      background-repeat: no-repeat;
      background-position: left;
      background-size: contain;
      left: 43.8%;
      bottom: 53%;
      z-index: 0;
      cursor: pointer;
    }
    .visible3 {
      width: 6.5%;
      height: 6.5%;
      position: absolute;
      left: 43.8%;
      bottom: 53%;
      z-index: 4;
      cursor: pointer;
    }
    .box4 {
      width: 6.5%;
      height: 3.9%;
      position: absolute;
      left: 53%;
      top: 33%;
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
      left: 62%;
      transform: scale(0);
    }
    .box4.out {
      left: 53%;
      transform: scale(1);
      transition: left 1s, transform 0.5s;
    }
    .window4 {
      width: 9%;
      height: 15%;
      position: absolute;
      background-image: url(../assets/garage2.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      left: 61.6%;
      bottom: 56%;
      z-index: 0;
      cursor: pointer;
    }
    .visible4 {
      width: 8%;
      height: 11%;
      position: absolute;
      left: 61.6%;
      bottom: 56%;
      z-index: 4;
      cursor: pointer;
    }
    .box5 {
      width: 6.5%;
      height: 5%;
      position: absolute;
      left: 80%;
      top: 44.5%;
      overflow: hidden;
      opacity: 1;
      transform: scale(1);
      transition: left 0.5s, transform 1s;
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
      left: 72.9%;
      transform: scale(0);
    }
    .box5.out {
      left: 80%;
      transform: scale(1);
      transition: left 1s, transform 0.5s;
    }
    .window5 {
      width: 7.6%;
      height: 9%;
      position: absolute;
      background-image: url(../assets/garage1.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      left: 72.9%;
      /* top: 21.5%; */
      bottom: 48.6%;
      z-index: 0;
      cursor: pointer;
    }
    .visible5 {
      width: 7.6%;
      height: 9%;
      position: absolute;
      left: 72.9%;
      bottom: 48.6%;
      z-index: 4;
      cursor: pointer;
    }
    /* } */
    /* } */
  }
}

@media (max-width: 1920px) {
  .desk {
    background-size: 140% 100%;
  }
}
</style>
