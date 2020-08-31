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

    <router-link
      v-for="obj in objs"
      :key="obj.id"
      :to="obj.link"
      class="link"
    >
      <div
        class="obj"
        :class="obj.back"
      ></div>
    </router-link>

  </div>
</template>
<script>
export default {
  data() {
    return {
      menuObj: [
        { name: "", links: "/" },
        { name: "ТЕХНОНАВИГАТОР", links: "/" },
        { name: "МАРШРУТЫ", links: "/" },
        { name: "КОНТАКТЫ", links: "/" }
      ],
      objs: [
        { id: 1, back: { obj1: true }, link: "/page1" },
        { id: 2, back: { obj2: true }, link: "/page2" },
        { id: 3, back: { obj3: true }, link: "/page3" },
        { id: 4, back: { obj4: true }, link: "/page4" },
        { id: 5, back: { obj5: true }, link: "/page5" }
      ]
    };
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
    }
  }
};
</script>
<style lang="scss" scoped>
@media (max-width: 980px), screen and (orientation: portrait) {
  .mobile {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/smoke_copy.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .menu {
      width: 100%;
      height: 30%;
      position: absolute;
      top: 0%;
      left: 0%;
      transform: translate(-150%);
      transition: transform 1s;
      z-index: 2000;

      &__link {
        width: 100%;
        height: 24.95%;
        text-decoration: none;
        font-family: RussoOne, sans-serif;
        font-size: 2rem;
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
      width: 100%;
      height: 11%;
      margin-top: -8px;
    }

    .btn {
      width: 36px;
      height: 51px;
      position: absolute;
      top: 1%;
      left: 2%;
      z-index: 10000;
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

    .obj {
      width: 100%;
      height: 100%;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      transform: scale(0.9);
      cursor: pointer;
      transition: transform 1s;
      margin-top: 40px;

      &:hover {
        transform: scale(1);
      }
    }
    .obj1 {
      background-image: url(../assets/obj1.png);
    }
    .obj2 {
      background-image: url(../assets/obj2.png);
    }
    .obj3 {
      background-image: url(../assets/obj3.png);
    }
    .obj4 {
      background-image: url(../assets/obj4.png);
    }
    .obj5 {
      background-image: url(../assets/obj5.png);
    }
  }
}
</style>