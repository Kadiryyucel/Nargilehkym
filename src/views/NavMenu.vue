<template>
  <div class="nav-wrapper">
    <div class="nav head">
      <h4 class="color" style="margin: 0;">
        <b>Bilgilendirme :</b>
      </h4>4207 sayılı kanun gereği online tütün satışı yapılması yasaktır. Mağazamızdaki tütün çeşitleri için
      <span
        class="color"
      >
        <h4 style="margin: 0;padding: 0 7px;">+90 534 054 30 40</h4>
        <img src="../assets/WhatsApp_Logo.png" style="width:35px;heigth:35px;position:relative;" />
      </span> WhatsApp hattından ulaşabilirsiniz.
    </div>
    <div>
      <img src="../assets/logo.jpg" style="height:370px;width:100%" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    change() {
      this.$router.push({ name: "Tutun" });
    },
  },
};
</script>

<style lang="scss" scoped>
.dropMenu {
  box-shadow: 0px 5px 15px;
}
.back > .menu-item {
  &:hover {
    transform: scale(1.1);
  }
}
.head {
  padding-left: 120px;
  display: flex;
}
.title {
  bottom: 10px;
  position: relative;
  display: inline-block;
}
.a {
  display: block;
  padding: 0;
  top: 15px;
  position: relative;
}
.color {
  display: flex;
  align-items: center;
  color: black;
}
h4 {
  display: inline-block;
}
.wrapper {
  padding: 0 74px 0 75px;
}
.content-wrapper {
  height: 100%;
  padding: 0;
  position: relative;
  left: 95px;
}
.slash {
  padding: 15px;
  > a {
    color: gray !important;
  }

  @for $i from 1 through 5 {
    &:hover li:nth-child(#{$i}) {
      opacity: 0;
      animation: menu1 ease-in-out forwards;
      animation-duration: 300ms;
      animation-delay: (600ms/2) * ($i - 1);
      @keyframes menu1 {
        0% {
          opacity: 0;
          top: -10px;
        }
        50% {
          opacity: 0.5;
          top: -5px;
        }
        100% {
          opacity: 1;
          top: 0px;
        }
      }
    }
  }
}

.menu {
  font-size: 15px;
  &:hover {
    color: brown !important;
  }
}
.menu-item {
  position: relative;
  font-size: 15px;
  a {
    text-decoration: none;
    color: rgb(235, 235, 235);
  }
  &:hover {
    cursor: pointer;
    .sub-menu {
      top: 48px !important;
      visibility: visible;
    }
  }
}
ul {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}

.sub-menu {
  height: 230px;
  top: 60px !important;
  position: absolute;
  visibility: hidden;
  align-content: center;
  width: 1350px;
  background-color: rgb(56, 43, 43);
  z-index: 9;
  .back {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    li {
      margin: 0.1em 0;
      width: 10em;
      text-align: center;
      z-index: 2;
      width: 100%;
      padding: 0 0 10px 0;
    }
  }
}
.middle {
  position: relative;
  z-index: 99;
  box-shadow: 0px 1px 10px gray;
  background-color: white !important;
  transition: left 1s;
  transition-timing-function: ease-out;
}
.nav {
  font-size: 15px;
  background-color: #f7f7f7;
  color: #5c636e;
  height: 48px;
  align-items: center;

  a {
    font-weight: bold;
    color: #f8b500;
    padding: 10px;
  }
  span {
    color: black;
  }
}
</style>