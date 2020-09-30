<template>
  <div class="wrapper">
    <div
      class="toolbar"
      style="width: 100%;height:80px;background-color:rgb(241, 240, 240);border-bottom: 1px solid gray;"
    >
    <div class="arrow" @click="goBack()"><i class="fas fa-arrow-left"></i></div>
      <div class="title">
        <b>{{t}}</b>
      </div>
    </div>
    <gridAll :option="option"></gridAll>
  </div>
</template>

<style lang="scss" scoped>
*{color:#5c636e;}
.arrow{
  font-size:40px;
  left:30px;
  position: relative;
  cursor: pointer;
  color:#f8b500;
}
.toolbar {
  text-align: left;
  display: flex;
  align-items: center;
}
.title {
  display: inline-block;
  position: relative;
  font-size: 25px;
  left: 40px;
  color:#f8b500;
}
</style>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  async created() {
    var url =
      "http://localhost:3000/products";
      this.$http.get(url).then((res,err) => {
      if(err) throw err;
      this.option = res.body.filter((o)=> {return o.underTag == this.t});
    })
   
  },
  computed:{
    t:{
      get(){
        return this.$store.state.module.title
      }
    }
  },
  methods:{
    goBack(){
      window.history.back();
    }
  },
  data() {
    return {
      option: [],
      /*option: {category: "Nargile Tütünleri",
    title: "Kefo Infinity",
    tags: "Narigle Takımı,Çelik Nargile",
    underTag:"Celik Nargile",
    url: `../images/CelikNargile/Kefo Infinity`,
    explanation: {
      inner: `Kefo Infinity
      
      304 L Paslanmaz Çelik Nargile Takımı
      
      Türkiye'nin en iyi , Dünya'nın sayılı nargile markalarından biri olan Kefo Nargilenin  profesyonel nargile içicileri için üretmiş olduğu yeni ürünü 
      
      Kefo Infinity Carbon Black .Siz değerli kullanıcılarımıza sunmaktan onur ve mutluluk duyarız. 
      
      304 L paslanmaz çelik nargile üretiminde Türkiye'nin çeşitliliği en fazla olan markası kefo nargile yine profesyonel için içim kalitesi ,
      
      duman performansı ve görsel hitabı ile sizlerin beğenisine Kefo Infinity Carbon nargile takımını sunmaktadır. 
      
      100% Yerli sermaye ve yerli üretimle sizlere hizmet vermeye tüm hızıyla devam etmekteyiz.
      
      Takımın çekim kalitesi ayarlanabilir difüzör sistemi ile hafif ,orta ve sert olmak üzere 3 kademeli bir sisteme sahiptir.
      
      Takım 4 çıkışlı olarak sizlere çok kişili nargile için keyfini sunmaktadır.
      
      Diğer bir özelliği ise closed chamber tahliye özelliği ile diğer takımlardan 1-0 öne geçmektedir.
      
      Görsel tasarımındaki özgünlüğü ile piyasada bulunan diğer tüm takımlardan çok farklı bir sunum sağlamaktadır.
      
      Şerbetlik özelliği ile şerbetlik aparatınızı kullanıp aroma akması probleminin önüne geçmektedir.
      
      Dünya markalarının aksine zengin kutu içeriği ile sizlere kil kefo altus lüle ile gelmektedir.
      
      
      Teknik özellikleri
      
      304 L paslanmaz çelik,
      
      Carbon kaplamalı görsel tasarım,
      
      Closed Chamber,
      
      Çelik Difüzör sistemi ,
      
      4 Çıkış ve Tahliye,
      
      Kısa devirli kilitleme sistemi,
      
      Dişi lüle girişi
      
      
      Kutu İçeriği 
      
      Kefo Infinity Nargile Seri  1 Adet
      
      Kefo Infinity Nargile Seri Borus   1 Adet
      
      Kefo Infinity Nargile Şişesi 1 Adet
      
      Kefo Infinity Nargile Tepsisi 1 Adet
      
      Kefo Infinity Nargile Marpuçu Başlığı 1 Adet
      
      Kefo Infinity Nargile Marpuç Aparatı 4 Adet
      
      Kefo Altus Kil Lüle 1 Adet (Lüle Rengi Farklılık Gösterebilir)
      
      Kefo Marpuç Hortumu
      
      Kefo Marpuç Yayı
      
      Kefo Maşa
      
      Kefo Dişi Lüle Contası`
      
    },
    imgs: [
      {
        img: "../images/CelikNargile/Kefo Infinity",
        colors: "white",
        set: "width: 800px;height: 1000px;",
      },
      {
        img: "../images/CelikNargile/Kefo Infinity Carbon Blue",
        colors: "blue",
        set: "width: 800px;height: 1000px;",
      },
      {
        img: "../images/CelikNargile/Kefo Infinity Carbon Black",
        colors: "black",
        set: "width: 800px;height: 1000px;",
      },
      {
        img: "../images/CelikNargile/Kefo Infinity Carbon Red",
        colors: "red",
        set: "width: 800px;height: 1000px;",
      }
    ],
    price: "1020.00 ₺",
    colors: [
      { color: "white", i: 0 },
      { color: "blue", i: 1 },
      { color: "black", i: 2 },
      { color: "red", i: 3 }
    ],
    ranking: [
      { img: "../images/CelikNargile/Kefo Infinity", index: 0 },
      { img: "../images/CelikNargile/Kefo Infinity Carbon Blue", index: 1 },
      { img: "../images/CelikNargile/Kefo Infinity Carbon Black", index: 2 },
      { img: "../images/CelikNargile/Kefo Infinity Carbon Red", index: 3 },
    ]},
    {category: "Nargile Tütünleri",
    title: "Kefo Infinity Carbon Black",
    tags: "Narigle Takımı,Çelik Nargile",
    underTag:"Celik Nargile",
    url: `../images/CelikNargile/Kefo Infinity Carbon Black`,
    explanation: {
      inner: `Kefo Infinity Carbon Black
      
      304 L Paslanmaz Çelik Nargile Takımı
      
      Türkiye'nin en iyi , Dünya'nın sayılı nargile markalarından biri olan Kefo Nargilenin  profesyonel nargile içicileri için üretmiş olduğu yeni ürünü 
      
      Kefo Infinity Carbon Black .Siz değerli kullanıcılarımıza sunmaktan onur ve mutluluk duyarız. 
      
      304 L paslanmaz çelik nargile üretiminde Türkiye'nin çeşitliliği en fazla olan markası kefo nargile yine profesyonel için içim kalitesi ,
      
      duman performansı ve görsel hitabı ile sizlerin beğenisine Kefo Infinity Carbon Black nargile takımını sunmaktadır. 
      
      100% Yerli sermaye ve yerli üretimle sizlere hizmet vermeye tüm hızıyla devam etmekteyiz.
      
      Takımın çekim kalitesi ayarlanabilir difüzör sistemi ile hafif ,orta ve sert olmak üzere 3 kademeli bir sisteme sahiptir.
      
      Takım 4 çıkışlı olarak sizlere çok kişili nargile için keyfini sunmaktadır.
      
      Diğer bir özelliği ise closed chamber tahliye özelliği ile diğer takımlardan 1-0 öne geçmektedir.
      
      Görsel tasarımındaki özgünlüğü ile piyasada bulunan diğer tüm takımlardan çok farklı bir sunum sağlamaktadır.
      
      Şerbetlik özelliği ile şerbetlik aparatınızı kullanıp aroma akması probleminin önüne geçmektedir.
      
      Dünya markalarının aksine zengin kutu içeriği ile sizlere kil kefo altus lüle ile gelmektedir.
      
      
      Teknik özellikleri
      
      304 L paslanmaz çelik,
      
      Carbon kaplamalı görsel tasarım,
      
      Closed Chamber,
      
      Çelik Difüzör sistemi ,
      
      4 Çıkış ve Tahliye,
      
      Kısa devirli kilitleme sistemi,
      
      Dişi lüle girişi
      
      
      Kutu İçeriği 
      
      Kefo Infinity Carbon Black Nargile Seri  1 Adet
      
      Kefo Infinity Carbon Black Nargile Seri Borus   1 Adet
      
      Kefo Infinity Carbon Black Nargile Şişesi 1 Adet
      
      Kefo Infinity Carbon Black Nargile Tepsisi 1 Adet
      
      Kefo Infinity Carbon Black Nargile Marpuçu Başlığı 1 Adet
      
      Kefo Infinity Carbon Black Nargile Marpuç Aparatı 4 Adet
      
      Kefo Altus Kil Lüle 1 Adet (Lüle Rengi Farklılık Gösterebilir)
      
      Kefo Marpuç Hortumu
      
      Kefo Marpuç Yayı
      
      Kefo Maşa
      
      Kefo Dişi Lüle Contası`
      
    },
    imgs: [
      {
        img: "../images/CelikNargile/Kefo Infinity Carbon Black",
        colors: "white",
        set: "width: 800px;height: 1000px;",
      },
      {
        img: "../images/CelikNargile/Kefo Infinity",
        colors: "blue",
        set: "width: 800px;height: 1000px;",
      },
      {
        img: "../images/CelikNargile/Kefo Infinity Carbon Blue",
        colors: "black",
        set: "width: 800px;height: 1000px;",
      },
      {
        img: "../images/CelikNargile/Kefo Infinity Carbon Red",
        colors: "red",
        set: "width: 800px;height: 1000px;",
      }
    ],
    price: "1020.00 ₺",
    colors: [
      { color: "black", i: 0 },
      { color: "white", i: 1 },
      { color: "blue", i: 2 },
      { color: "red", i: 3 }
    ],
    ranking: [
      { img: "../images/CelikNargile/Kefo Infinity Black", index: 0 },
      { img: "../images/CelikNargile/Kefo Infinity", index: 1 },
      { img: "../images/CelikNargile/Kefo Infinity Carbon Blue", index: 2 },
      { img: "../images/CelikNargile/Kefo Infinity Carbon Red", index: 3 },
    ]},
    {category: "Nargile Tütünleri",
    title: "Kefo Infinity Carbon Blue",
    tags: "Narigle Takımı,Çelik Nargile",
    underTag:"Celik Nargile",
    url: `../images/CelikNargile/Kefo Infinity Carbon Blue`,
    explanation: {
      inner: `Kefo Infinity Carbon Blue
      
      304 L Paslanmaz Çelik Nargile Takımı
      
      Türkiye'nin en iyi , Dünya'nın sayılı nargile markalarından biri olan Kefo Nargilenin  profesyonel nargile içicileri için üretmiş olduğu yeni ürünü 
      
      Kefo Infinity Carbon Blue .Siz değerli kullanıcılarımıza sunmaktan onur ve mutluluk duyarız. 
      
      304 L paslanmaz çelik nargile üretiminde Türkiye'nin çeşitliliği en fazla olan markası kefo nargile yine profesyonel için içim kalitesi ,
      
      duman performansı ve görsel hitabı ile sizlerin beğenisine Kefo Infinity Carbon Blue nargile takımını sunmaktadır. 
      
      100% Yerli sermaye ve yerli üretimle sizlere hizmet vermeye tüm hızıyla devam etmekteyiz.
      
      Takımın çekim kalitesi ayarlanabilir difüzör sistemi ile hafif ,orta ve sert olmak üzere 3 kademeli bir sisteme sahiptir.
      
      Takım 4 çıkışlı olarak sizlere çok kişili nargile için keyfini sunmaktadır.
      
      Diğer bir özelliği ise closed chamber tahliye özelliği ile diğer takımlardan 1-0 öne geçmektedir.
      
      Görsel tasarımındaki özgünlüğü ile piyasada bulunan diğer tüm takımlardan çok farklı bir sunum sağlamaktadır.
      
      Şerbetlik özelliği ile şerbetlik aparatınızı kullanıp aroma akması probleminin önüne geçmektedir.
      
      Dünya markalarının aksine zengin kutu içeriği ile sizlere kil kefo altus lüle ile gelmektedir.
      
      
      Teknik özellikleri
      
      304 L paslanmaz çelik,
      
      Carbon kaplamalı görsel tasarım,
      
      Closed Chamber,
      
      Çelik Difüzör sistemi ,
      
      4 Çıkış ve Tahliye,
      
      Kısa devirli kilitleme sistemi,
      
      Dişi lüle girişi
      
      
      Kutu İçeriği 
      
      Kefo Infinity Carbon Blue Nargile Seri  1 Adet
      
      Kefo Infinity Carbon Blue Nargile Seri Borus   1 Adet
      
      Kefo Infinity Carbon Blue Nargile Şişesi 1 Adet
      
      Kefo Infinity Carbon Blue Nargile Tepsisi 1 Adet
      
      Kefo Infinity Carbon Blue Nargile Marpuçu Başlığı 1 Adet
      
      Kefo Infinity Carbon Blue Nargile Marpuç Aparatı 4 Adet
      
      Kefo Altus Kil Lüle 1 Adet (Lüle Rengi Farklılık Gösterebilir)
      
      Kefo Marpuç Hortumu
      
      Kefo Marpuç Yayı
      
      Kefo Maşa
      
      Kefo Dişi Lüle Contası`
      
    },
    imgs: [
      {
        img: "../images/CelikNargile/Kefo Infinity Carbon Blue",
        colors: "white",
        set: "width: 800px;height: 1000px;",
      },
      {
        img: "../images/CelikNargile/Kefo Infinity",
        colors: "blue",
        set: "width: 800px;height: 1000px;",
      },
      {
        img: "../images/CelikNargile/Kefo Infinity Carbon Black",
        colors: "black",
        set: "width: 800px;height: 1000px;",
      },
      {
        img: "../images/CelikNargile/Kefo Infinity Carbon Red",
        colors: "red",
        set: "width: 800px;height: 1000px;",
      },
    ],
    price: "1020.00 ₺",
    colors: [
      { color: "black", i: 2 },
      { color: "white", i: 1 },
      { color: "blue", i: 0 },
      { color: "red", i: 3 }
    ],
    ranking: [
      { img: "../images/CelikNargile/Kefo Infinity Blue", index: 0 },
      { img: "../images/CelikNargile/Kefo Infinity", index: 1 },
      { img: "../images/CelikNargile/Kefo Infinity Carbon Black", index: 2 },
      { img: "../images/CelikNargile/Kefo Infinity Carbon Red", index: 3 },
    ]},
    {category: "Nargile Tütünleri",
    title: "Kefo Infinity Carbon Red",
    tags: "Narigle Takımı,Çelik Nargile",
    underTag:"Celik Nargile",
    url: `../images/CelikNargile/Kefo Infinity Carbon Red`,
    explanation: {
      inner: `Kefo Infinity Carbon Red
      
      304 L Paslanmaz Çelik Nargile Takımı
      
      Türkiye'nin en iyi , Dünya'nın sayılı nargile markalarından biri olan Kefo Nargilenin  profesyonel nargile içicileri için üretmiş olduğu yeni ürünü 
      
      Kefo Infinity Carbon Red .Siz değerli kullanıcılarımıza sunmaktan onur ve mutluluk duyarız. 
      
      304 L paslanmaz çelik nargile üretiminde Türkiye'nin çeşitliliği en fazla olan markası kefo nargile yine profesyonel için içim kalitesi ,
      
      duman performansı ve görsel hitabı ile sizlerin beğenisine Kefo Infinity Carbon Red nargile takımını sunmaktadır. 
      
      100% Yerli sermaye ve yerli üretimle sizlere hizmet vermeye tüm hızıyla devam etmekteyiz.
      
      Takımın çekim kalitesi ayarlanabilir difüzör sistemi ile hafif ,orta ve sert olmak üzere 3 kademeli bir sisteme sahiptir.
      
      Takım 4 çıkışlı olarak sizlere çok kişili nargile için keyfini sunmaktadır.
      
      Diğer bir özelliği ise closed chamber tahliye özelliği ile diğer takımlardan 1-0 öne geçmektedir.
      
      Görsel tasarımındaki özgünlüğü ile piyasada bulunan diğer tüm takımlardan çok farklı bir sunum sağlamaktadır.
      
      Şerbetlik özelliği ile şerbetlik aparatınızı kullanıp aroma akması probleminin önüne geçmektedir.
      
      Dünya markalarının aksine zengin kutu içeriği ile sizlere kil kefo altus lüle ile gelmektedir.
      
      
      Teknik özellikleri
      
      304 L paslanmaz çelik,
      
      Carbon kaplamalı görsel tasarım,
      
      Closed Chamber,
      
      Çelik Difüzör sistemi ,
      
      4 Çıkış ve Tahliye,
      
      Kısa devirli kilitleme sistemi,
      
      Dişi lüle girişi
      
      
      Kutu İçeriği 
      
      Kefo Infinity Carbon Red Nargile Seri  1 Adet
      
      Kefo Infinity Carbon Red Nargile Seri Borus   1 Adet
      
      Kefo Infinity Carbon Red Nargile Şişesi 1 Adet
      
      Kefo Infinity Carbon Red Nargile Tepsisi 1 Adet
      
      Kefo Infinity Carbon Red Nargile Marpuçu Başlığı 1 Adet
      
      Kefo Infinity Carbon Red Nargile Marpuç Aparatı 4 Adet
      
      Kefo Altus Kil Lüle 1 Adet (Lüle Rengi Farklılık Gösterebilir)
      
      Kefo Marpuç Hortumu
      
      Kefo Marpuç Yayı
      
      Kefo Maşa
      
      Kefo Dişi Lüle Contası`
      
    },
    imgs: [
      {
        img: "../images/CelikNargile/Kefo Infinity Carbon Red",
        colors: "white",
        set: "width: 800px;height: 1000px;",
      },
      {
        img: "../images/CelikNargile/Kefo Infinity",
        colors: "blue",
        set: "width: 800px;height: 1000px;",
      },
      {
        img: "../images/CelikNargile/Kefo Infinity Carbon Black",
        colors: "black",
        set: "width: 800px;height: 1000px;",
      },
      {
        img: "../images/CelikNargile/Kefo Infinity Carbon Blue",
        colors: "red",
        set: "width: 800px;height: 1000px;",
      }
    ],
    price: "1020.00 ₺",
    colors: [
      { color: "black", i: 2 },
      { color: "white", i: 1 },
      { color: "blue", i: 3 },
      { color: "red", i: 0 }
    ],
    ranking: [
      { img: "../images/CelikNargile/Kefo Infinity Carbon Red", index: 0 },
      { img: "../images/CelikNargile/Kefo Infinity Blue", index: 3 },
      { img: "../images/CelikNargile/Kefo Infinity", index: 1 },
      { img: "../images/CelikNargile/Kefo Infinity Carbon Black", index: 2 },
    ]},*/
    };
  },
};
</script>