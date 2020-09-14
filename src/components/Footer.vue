<template>
  <div class="wrapper">
    <div class="outer-wrapper">
      <div class="content-wrapper">
        <div class="ico">
          <span style="color:#f8b500">Bizi Takip Edin . . .</span>
          <a>
            <i class="fab fa-instagram" style="font-size:40px;"></i>
          </a>
          <a style="bottom:2px;position: relative;">
            <i class="fab fa-facebook-f" style="font-size:35px;"></i>
          </a>
          <a>
            <i class="fab fa-twitter" style="font-size:35px;"></i>
          </a>
        </div>
        <div class="contact">
          <div style="width: 50px;">
            <div class="title">İletişim</div>
          </div>
          <div>
            Süleymaniye Mahallesi Şahande Sokak No:19 Eminönü / Fatih / İSTANBUL
            <br />
            <br />0 212 511 58 55
            <br />0 534 054 30 40
            <br />(10:00- 19:00 arasında )
            <br />
            <br />Açılış – Kapanış Saatleri:
            <br />
            <br />Haftaiçi: 09:30 – 18:30
            <br />Cumartesi: 09:30 – 18:30
            <br />Pazar: 12:00 – 18:00
            <br />
          </div>
        </div>
        <div class="content">
          <span style="color:#393e46">© 2020 NargileHikayem</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a:hover {
  cursor: pointer;
  color: #f8b500 !important;
}
a {
  right: 5px;
  position: relative;
  display: inline-block;
  margin-right: 10px;
}
@font-face {
  font-family: biz;
  src: url(../assets/fonts/fresh-olive-font/FreshOlive-DOJZ9.otf);
}
.content > span {
  top: 15px;
}
span {
  font-family: biz;
  right: 20px;
  position: relative;
}
.content {
  background-color: #f8b500;
  position: relative;
  height: 50px;
}
.title {
  transform: rotate(270deg);
  position: relative;
  top: 150px;
  font-size: 30px;
  letter-spacing: 10px;
}
.contact {
  width: 30%;
  text-align: left;
  left: 30px;
  position: relative;
  display: flex;
  bottom: 30px;
}
.ico {
  text-align: right;
  width: 80%;
  left: 120px;
  position: relative;
  padding: 50px 0 0 0;
}
.wrapper {
  height: 350px;
  margin: 0 auto;
  background-color: #f7f7f7;
  position: relative;
  color: #5c636e;
}
</style>