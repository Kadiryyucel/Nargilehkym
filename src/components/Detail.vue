<template>
  <div class="wrapper">
    <div class="toolbar">
      <span class="title">{{i.title}}</span>
    </div>
    <div class="outer-wrapper">
      <div class="into-wrapper">
        <div class="content">
          <div class="change-wrapper" @mousemove="newPosition">
            <div class="content-img" :key="a" v-for="a of i.imgs">
              <a style="display:block;">
                <img
                  class="picture"
                  :src="require(`../assets/${a.img}.jpeg`)"
                  style="width:400px;height:500px"
                />
              </a>
              <img class="zoomİmg" :src="require(`../assets/${a.img}.jpeg`)" :style="a.set" />
            </div>
          </div>
          <div class="ranking" v-if="i.ranking">
            <img
              class="sml"
              :key="sml"
              style="width:100px;height:100px"
              :src="require(`../assets/${sml.img}.jpeg`)"
              @click="change(sml.index)"
              v-for="sml of i.ranking"
            />
          </div>
        </div>
        <div class="information-wrapper">
          <div class="information">
            <div class="price">{{i.price}}</div>
            <div style="top:30px;position:relative;">
              <div class="explanation e">{{i.tag}}</div>
              <div class="colors">
                <div style="width: 40px; margin-bottom: 10px;">
                  <span class="color-title">
                    <b>Renk</b>
                  </span>
                </div>
                <div style="display:flex;">
                  <div class="color-wrapper" :key="a" v-for="a of i.colors" @click="change(a.i)">
                    <div class="color" :style="`backgroundColor:${a.color}`"></div>
                  </div>
                </div>
              </div>
              <div class="large-explanation e" style="top:30px;" v-html="i.explanation.inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: 0,
      colors: [],
    };
  },
  mounted() {
    let hav = 400;
    let contents = document.getElementsByClassName("content-img");
    let smls = document.getElementsByClassName("sml");
    let wrapper = document.getElementsByClassName("change-wrapper")[0];
    wrapper.addEventListener("mouseover", this.newPosition(event));
    wrapper.addEventListener("mouseleave", this.back);
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.left = i * hav + "px";
    }
    smls[0].style.opacity = 1;
  },
  destroyed() {
    let wrapper = document.getElementsByClassName("change-wrapper")[0];
    wrapper.removeEventListener("mouseover", this.newPosition);
    wrapper.removeEventListener("mouseleave", this.back);
  },
  computed: {
    i: {
      get() {
        return this.$store.state.detail.model;
      },
    },
  },
  methods: {
    newPosition(e) {
      let contents = document.getElementsByClassName("content-img");
      for (let i = 0; i < contents.length; i++) {
        console.log(contents[i].style.left);
        if (contents[i].style.left === "0px") {
          let zoom = contents[i].children[1];
          console.log(zoom);
          zoom.style.opacity = "1";
          zoom.style.top = -e.pageY + 400 + "px";
          zoom.style.left = -e.pageX + "px";
        }
      }
    },
    back() {
      let contents = document.getElementsByClassName("content-img");
      for (let i = 0; i < contents.length; i++) {
        if (contents[i].style.left === "0px") {
          let zoom = contents[i].children[1];
          zoom.style.opacity = "0";
        }
      }
    },
    change(select) {
      let hav = 400;
      let i = 1;
      let smlİmg = document.getElementsByClassName("sml");
      let contents = document.getElementsByClassName("content-img");
      let result = select - this.select;
      this.select = select;
      let newSelect = select;

      if (select == contents.length - 1) {
        for (let a = 0; a < contents.length; a++) {
          smlİmg[a].style.opacity = "0.8";
          contents[i - 1].style.left = -hav * newSelect + "px";
          newSelect--;
          i++;
          if (i == contents.length) {
            contents[select].style.left = 0 + "px";
            smlİmg[select].style.opacity = 0.8;
            smlİmg[select].style.backgrounColor = "black";
            smlİmg[select].style.opacity = "1";
            return;
          }
        }
      } else if (select == 0) {
        for (let a = 0; a < contents.length; a++) {
          smlİmg[a].style.opacity = "0.8";
          contents[select + i].style.left = hav * i + "px";
          i++;
          if (i == contents.length) {
            console.log("hi");
            contents[select].style.left = 0 + "px";
            smlİmg[select].style.opacity = "1";
            return;
          }
        }
      } else if (result < -1) {
        let contentsEnd = contents.length - 1;
        let newContens = contents.length + result;
        for (let a = 0; a < contents.length; a++) {
          smlİmg[a].style.opacity = "0.8";
        }
        for (let i = 0; i < contents.length; i++) {
          contents[contentsEnd].style.left = hav * newContens + "px";
          contentsEnd--;
          newContens--;
        }
        smlİmg[select].style.opacity = "1";
      } else if (result >= 2) {
        let newContens = select;
        let newİ = 1;
        for (let a = 0; a < contents.length; a++) {
          smlİmg[a].style.opacity = "0.8";
        }
        for (let i = 0; i < select + 1; i++) {
          contents[i].style.left = -(hav * newContens) + "px";
          console.log(hav * newContens);
          newContens--;
          if (i === 0) {
            for (let l = select + 1; l < contents.length; l++) {
              contents[l].style.left = hav * newİ + "px";
              newİ++;
            }
          }
        }
        smlİmg[select].style.opacity = "1";
        return;
      } else if (result == 1 || -1) {
        console.log(result);
        for (let a = 0; a < contents.length; a++) {
          smlİmg[select].style.opacity = "1";

          if (smlİmg[select - i] == undefined) {
            contents[select].style.left = 0 + "px";
            contents[select + i].style.left = hav * i + "px";
            smlİmg[select + i].style.opacity = "0.8";
            i++;
            continue;
          }
          smlİmg[select - i].style.opacity = "0.8";
          contents[select - i].style.left = -hav * i + "px";
          contents[select].style.left = 0 + "px";
          if (contents[select + i] == undefined) {
            i++;
            continue;
          }
          contents[select + i].style.left = hav * i + "px";
          smlİmg[select + i].style.opacity = "0.8";
          i++;
        }
        smlİmg[select].style.opacity = "1";
        return;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.content-img {
  position: absolute;
  width: 400px;
  height: 500px;
  transition: left 0.5s;
  transition-timing-function: ease-out;
}
.zoomİmg {
  position: absolute;
  opacity: 0;
  max-width: none;
  max-height: none;
  right: 0;
  top: 0;
}
.change-wrapper {
  width: 400px;
  position: relative;
  height: 500px;
  overflow: hidden;
  margin-bottom: 30px;
}
ul {
  overflow-wrap: break-word;
  width: 700px;
  padding: 0;
  list-style: none;
}
li {
  padding: 5px 0;
}
.colors {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.color-wrapper {
  padding: 2px;
  position: relative;
  width: 41px;
  height: 41px;
  border: 1px solid #b8b8b8;
}
.color {
  height: 35px;
  width: 35px;
}
.e {
  position: relative;
  height: 30px;
  text-align: left;
}
.toolbar {
  text-align: left;
}
.title {
  display: inline-block;
  top: 25px;
  position: relative;
  font-size: 25px;
  left: 40px;
}
.information {
  display: flex;
  flex-direction: column;
  left: 40px;
  position: relative;
  width: 95%;
  text-align: center;
  left: 40px;
}
.price {
  font-size: 30px;
  width: 100%;
  height: 60px;
  border-bottom: 2px solid black;
  position: relative;
  text-align: left;
}
.information-wrapper {
  width: 100%;
}
.toolbar {
  height: 80px;
  width: 100%;
  background-color: rgb(241, 240, 240);
  border-bottom: 1px solid rgb(180, 180, 180);
}
.outer-wrapper {
  padding: 0 66px 0 67px;
  position: relative;
}
.into-wrapper {
  display: flex;
  padding: 50px 0 100px 0;
  position: relative;
}
.sml {
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
}
.ranking {
  text-align: left;
}
</style>


