<template>
  <div class="wrapper">
    <div
      class="toolbar"
      style="width: 100%;height:80px;background-color:rgb(241, 240, 240);border-bottom: 1px solid gray;"
    >
      <div class="title">
        <b>{{title}}</b>
      </div>
    </div>
    <gridAll :option="option"></gridAll>
  </div>
</template>

<style lang="scss" scoped>
.toolbar {
  text-align: left;
}
.title {
  display: inline-block;
  top: 25px;
  position: relative;
  font-size: 25px;
  left: 80px;
}
</style>

<script>
export default {
  mounted(){
    window.scrollTo(0, 0);
  },
  created(){},
  data() {
    return {
      option: {
        a: {
          category: "Nargile Tütünleri",
          title: "NU UFO ÇELİK NARGİLE TAKIMI",
          tag: "Narigle Takımı,Ca",
          url: `photo`,
          explanation: {
            inner: `<div style="color:rgb(184, 184, 184)"><span style="display:block;padding:8px 0"><b>Açıklama</b></span></div><div style="overflow-wrap: break-word ;
  width: 700px ;
  font-size: 18px;
line-height: 22px;">
                  <div><span>RenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenk</span></div>
                  <div><span>RenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenk</span></div>
                  <div><span>RenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenk</span></div>
                  <div><span>RenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenk</span></div>
                  <div><span>RenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenk</span></div>
                  <div><span>RenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenk</span></div>
                  <div><span>RenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenkRenk</span></div>
                </div>`,
          },
          imgs: [
            {
              img: "photo",
              colors: "blue",
              set: "width: 900px;height: 1300px;",
            },
            {
              img: "photo",
              colors: "black",
              set: "width: 900px;height: 1300px;",
            },
            {
              img: "photo",
              colors: "red",
              set: "width: 900px;height: 1300px;",
            },
            { img: "photo" },
            { img: "photo" },
            { img: "photo" },
            { img: "photo" },
          ],
          price: "₺ 400",
          colors: [
            { color: "blue", i: 0 },
            { color: "black", i: 1 },
            { color: "red", i: 2 },
          ],
          ranking: [
            { img: "photo", index: 0 },
            { img: "photo", index: 1 },
            { img: "photo", index: 2 },
            { img: "photo", index: 3 },
            { img: "photo", index: 4 },
            { img: "photo", index: 5 },
            { img: "photo", index: 6 },
          ],
        },
        b: {
          title: "NU UFO ÇELİK NARGİLE TAKIMI",
          tag: "Narigle Takımı,Cam takım",
          url: "photo",
          price: "₺ 400",
        },
        c: {
          title: "NU UFO ÇELİK NARGİLE TAKIMI",
          tag: "Narigle Takımı,Cam takım",
          url: "photo",
          price: "₺ 400",
        },
        d: {
          title: "NU UFO ÇELİK NARGİLE TAKIMI",
          tag: "Narigle Takımı,Cam takım",
          url: "photo",
          price: "₺ 400",
        },
        u: {
          title: "NU UFO ÇELİK NARGİLE TAKIMI",
          tag: "Narigle Takımı,Cam takım,Cam takım,Cam takım",
          url: "photo",
          price: "₺ 400",
        },
        r: {
          title: "NU UFO ÇELİK NARGİLE TAKIMI",
          tag: "Narigle Takımı,Cam takım",
          url: "photo",
          price: "₺ 400",
        },
        s: {
          title: "NU UFO ÇELİK NARGİLE TAKIMI",
          tag: "Narigle Takımı,Cam takım",
          url: "photo",
          price: "₺ 400",
        },
        y: {
          title: "NU UFO ÇELİK NARGİLE TAKIMI",
          tag: "Narigle Takımı,Cam takım",
          url: "photo",
          price: "₺ 400",
        },
        g: {
          title: "NU UFO ÇELİK NARGİLE TAKIMI",
          tag: "Narigle Takımı,Cam takım",
          url: "photo",
          price: "₺ 400",
        },
        m: {
          title: "NU UFO ÇELİK NARGİLE TAKIMI",
          tag: "Narigle Takımı,Cam takım",
          url: "photo",
          price: "₺ 400",
        },
      },
      title: "Nargile Tütünü",
    };
  },
};
</script>