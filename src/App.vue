<template>
  <div id="app">
    <transition
      name="tray"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  created() {
    this.res();
  },
  computed: {
    ...mapActions(["times"])
  },
  methods: {
    res() {
      this.times;
    }
  }
};
</script>
<style lang="scss">
html {
  font-size: 62.5%;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #17004a;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100vh;
  /* background-image: url(assets/smoke_copy.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
}

#nav {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

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
    margin-top: 5%;
    color: #fafbfc;
    font-family: sans-serif;
    font-size: 3.6rem;
    font-weight: 400;
    margin-right: 30px;

    &:hover {
      color: red;
    }

    &.router-link-exact-active {
      color: #fafbfc;
    }
  }
}

.tray-enter {
  transform: translateY(100%);
}

.tray-enter-to {
  transform: translateY(0%);
}

.tray-leave {
  transform: translateY(0%);
}

.tray-leave-to {
  transform: translateY(-100%);
}

.tray-enter-active,
.tray-leave-active {
  transition-duration: 0.5s;
  transition-property: transform;
  transition-timing-function: ease;
}
</style>
