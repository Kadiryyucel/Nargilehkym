<template>
  <div class="wrapper">
    <div class="content-wrapper">
      <div class="content" :key="i" v-for="i of option">
        <div class="content-img">
          <div class="static" style="font-size:20px;color:white;">
            <div class="circle">
              <i class="far fa-eye"></i>
            </div>
          </div>
          <img
            class="picture"
            :src="require(`../../../api/public/${i.url}.jpeg`)"
            style="width:270px;height:270px"
          />
          <a class="staticAll" @click="detail(i)"></a>
        </div>
        <div class="content-information">
          <div class="product-details">
            <h3>{{i.title}}</h3>
            <span class="posted">{{i.tag}}</span>
          </div>
          <span class="price">{{i.price}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  option: Array,
  },
  methods: {
    detail(i) {
      console.log(i)
      this.$router.push({ path: "/detail" });
      this.$store.commit("module/setModel", i);
    },
  },
  computed:{
    t:{
      get(){
        return this.$store.state.module.title
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.svg-inline--fa {
  position: absolute;
  left: 6px;
  top: 5px;
}
.circle {
  width: 35px;
  height: 30px;
  background: rgb(37, 33, 33);
  position: relative;
  z-index: 9;
  line-height: 1.5;
  border-radius: 50%;
  left: 117px;
  letter-spacing: 10px;
  top: 30px;
}
.staticAll {
  display: inline-block;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  left: 0;
  box-shadow: 0px 5px 10px gray;
}
.product-details {
  text-align: left;
  max-width: 200px;
  word-wrap: break-word;
}
.static {
  position: absolute;
  width: 100%;
  height: 30%;
  top: 33%;
  visibility: hidden;
}
.content-img:hover {
  .static {
    visibility: visible;
  }
  background-color: black;
  &:hover {
    cursor: pointer;
    .picture {
      opacity: 0.7;
    }
  }
}
.content-img {
  height: 270px;
  width: 270px;
  position: relative;
}
.content-information {
  display: flex;
  justify-content: space-between;
  align-items: end;
  top: 10px;
  position: relative;
}
.price {
  float: right;
}
.content {
  position: relative;
  padding: 0 10px;
  overflow: auto;
}
.posted {
  font-size: 12px;
  float: left;
}
h3 {
  font-size: 12px;
  width: 270px;
}
.content-wrapper {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 20px;
  column-gap: 20px;
  grid-row-gap: 40px;
  justify-content: center;
  padding: 50px 0;
  position: relative;
}
</style>