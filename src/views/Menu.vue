<template>
  <div class="wrapper col-xs-4 col-sm-8 col-md-12 col-lg-12">
    <div class="titleHeader">
      <h1 style="font-size: 50px;letter-spacing: 3px;">Ürünlerimiz</h1>
    </div>
    <div class="outer-wrapper" style="border:0;" v-for="i of option" :key="i">
      <div class="title">{{i.name}}</div>
      <div class="parent-content-wrapper">
        <div class="content-wrapper" v-for="c of i.category" :key="c">
          <figure>
            <img :src="require(`../../../api/public/${i.url}.jpeg`)" style="width: 150px;height: 155px;" />
          </figure>
          <div class="left-content">
            <a @click="goGridTutun(c)" style="cursor:pointer;">
              <h4 class="smltitle">{{c}}</h4>
            </a>
            <div class="content">
              <span>jibiar</span>
              <br />
              <span>jibiar</span>
              <br />
              <span>jibiar</span>
              <br />
              <span>jibiar</span>
              <br />
              <span>jibiar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      option:[]
    }
  },
  async created(){
     var url =
      "http://localhost:3000/collections";
      this.$http.get(url).then((res,err) => {
      if(err) throw err;
      this.option = res.body
      console.log(this.option)
    })
  },
  methods: {
    goGridTutun(title) {
      this.$store.commit("module/setTitle", title);
      this.$router.push({ path: "/tutun" });
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .title{
    padding: 0 0 0 20px !important;
  }
}

figure{
  margin: 0 20px 30px;
}
.smltitle{
  text-align: left;
  margin: 0 0 10px 0;
  font-size:18px;
}
.parent-content-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.wrapper {
  font-family: sacramento;
}
@font-face {
  font-family: sacramento;
  src: url(../assets/fonts/fresh-olive-font/Sacramento.ttf);
}
@font-face {
  font-family: basic;
  src: url(../assets/fonts/fresh-olive-font/Normal.ttf);
}
.titleHeader {
  background-color: white;
  height: 120px;
  width: 100%;
  margin: 30px 0 0 0;
  border-top: 1px solid gray;
  border-bottom: 2px solid gray;
  color: #5c636e;
}
.left-content {
  display: flex;
  flex-direction: column;
  text-align: left;
  position: relative;
}
.title {
  text-align: left;
  font-size: 50px;
  margin-bottom: 30px;
  color: #f8b500;
  padding: 30px 0;
  
}
.outer-wrapper {
  display: flex;
  padding: 30px 0;
  letter-spacing: 2px;
  flex-direction: column;
  border-top: 2px solid gray;
  margin:0 30px;
}
.left-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 35%;
}
.right-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 35%;
}
.content-wrapper {
  display: flex;
  flex-direction: row;
  text-align: left;
  font-family: basic;
}
.content {
  color: #5c636e;
      font-size: 21px;
}
</style>