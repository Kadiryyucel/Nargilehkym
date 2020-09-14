<template>
  <div class="wrapper">
    <div class="line"><h1 style="font-size: 50px;letter-spacing: 3px;">Ürünlerimiz</h1></div>
    <div class="outer-wrapper">
      <div class="left-wrapper">
        <div class="content-wrapper">
          <figure>
            <img src="../assets/AllHookah.jpeg" style="width: 150px;height: 155px;" />
          </figure>
          <div class="left-content">
            <a @click="goGridTutun()" style="cursor:pointer;">
              <h4 class="title">Nargile Tütünü</h4>
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
        <div class="content-wrapper">
          <figure>
            <img src="../assets/AllHookah.jpeg" style="width: 150px;height: 155px;" />
          </figure>
          <div class="left-content">
            <h4 class="title">Nargile Tütünü</h4>
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
      <div class="right-wrapper">
        <div class="content-wrapper">
          <figure>
            <img src="../assets/AllHookah.jpeg" style="width: 150px;height: 155px;" />
          </figure>
          <div class="left-content">
            <h4 class="title">Nargile Tütünü</h4>
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
        <div class="content-wrapper">
          <figure>
            <img src="../assets/AllHookah.jpeg" style="width: 150px;height: 155px;" />
          </figure>
          <div class="left-content">
            <h4 class="title">Nargile Tütünü</h4>
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
  methods: {
    goGridTutun() {
      this.$router.push({ path: "/tutun" });
    },
  },
};
</script>

<style lang="scss" scoped>
.line {
  background-color:white;
  height: 120px;
  width: 100%;
  margin: 30px 0 40px 0;
  border-top: 1px solid gray;
  border-bottom: 2px solid gray;
  color:#5c636e;
}
.left-content {
  display: flex;
  flex-direction: column;
  text-align: left;
  left: 10px;
  position: relative;
}
.title {
  color: #f8b500;
}
.outer-wrapper {
  display: flex;
  padding: 30px;
  letter-spacing: 2px;
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
}
.content {
  color: #5c636e;
}
</style>