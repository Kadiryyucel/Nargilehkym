<template>
  <div class="wrapper">
    <div class="outer-wrapper">
      <div class="left-wrapper">
        <div class="content-wrapper">
          <figure>
            <img src="../assets/photo.jpeg" style="width: 150px;height: 155px;" />
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
            <img src="../assets/photo.jpeg" style="width: 150px;height: 155px;" />
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
            <img src="../assets/photo.jpeg" style="width: 150px;height: 155px;" />
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
            <img src="../assets/photo.jpeg" style="width: 150px;height: 155px;" />
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
export default {};
</script>

<style lang="scss" scoped>
.left-content {
  display: flex;
  flex-direction: column;
  text-align: left;
  left: 10px;
  position: relative;
}
.title {
  color: #5c636e;
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
</style>