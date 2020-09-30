<template>
  <div class="home">
    <navmenu></navmenu>
    <div class="wrapper">
      <div class="text-wrapper col-xs-4 col-sm-8 col-md-12 col-lg-12" >
        <div class="text">
          <h1>Nargile Ürünü Satın Almak için Neden Biz?</h1>
          <div>
            <span>Nargile Tütünü Satın Almanın yanında tüm nargile malzemeleri ve nargile takımı satın almak için bizi tercih edebilirsiniz. Sizlere %100 orijinal Nargile tütünü çeşitleri sunuyoruz. Satışını yaptığımız ürünler yerlidir ve direkt fabrika veya distribütörden gelmektedir. Yeni başlayanlar normal olarak güven sorunu yaşadığından nargile satın almak için n11, hepsiburada, gittigidiyor gibi bilinen sitelere yönelmektedir. Unutmayın ki bu sitelerde nargile satıcıları eminönü, istoç gibi yerlerden satın almak kadar risklidir. Sıkıntınız olduğunda muhatap bulamayabilirsiniz. Diğer yandan biz sizlere Whatsapp hattımızdan sürekli destek veriyoruz :)</span>
          </div>
        </div>
      </div>
      <div class="change">
        <img
          class="changeİmg"
          src="https://img1.wsimg.com/isteam/stock/16729/:/rs=w:1240px,h:620px,cg:true,m/cr=w:1240px,h:620px"
          style="width:100%;height:700px;bottom:400px;"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .text{
    left:0 !important;
  }
  .change{
    display: none;
  }
  .text-wrapper{
    display: none;
  }  
}
.change {
  height: 500px;
  overflow: hidden;
}
.text {
  width: 70%;
  left: 200px;
  position: relative;
  top: 60px;
  color:#5c636e;
}
.text-wrapper {
  height: 350px;
  line-height: 1.5;
  background-color:white;
  box-shadow: 0 5px 10px;
}
.changeİmg {
  position: relative;
}
</style>

<script>
import navmenu from "./Menu"
export default {
  components:{
    navmenu
  },
  methods: {
    change(){
      let changePosition = document.getElementsByClassName("changeİmg")[0];
      if (window.scrollY >= 2100)
        changePosition.style.top = (window.scrollY - 2750) + "px";
        console.log(window.scrollY)
    },
    changePosition() {
      
      //let middle = document.getElementsByClassName("middle")[0];
      let home = document.getElementsByClassName("home-page")[0];
      let navMenu = document.getElementsByClassName("nav-menu")[0];
      let wrapper = document.getElementsByClassName("nav-wrapper")[0];
      let exampleDiv = document.createElement("div");
      exampleDiv.style.height = "48px";
   
      
      if (window.scrollY >= 420) {
        //middle.style.position = "fixed";
        //middle.style.top = 0 + "px";
        //middle.style.width = "100%";
        //middle.style.zIndex = "99";
        //middle.style.left = "0px";
        if (wrapper.children.length !== 4) {
          wrapper.appendChild(exampleDiv);
        }
        navMenu.style.left = "95px";
      }
      if (window.scrollY <= 420) {
         if (wrapper.children.length === 4) {
          wrapper.children[3].remove();
        }
        //middle.style.position = "relative";
        home.style.top = "0px";
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.change);
  },
  destroyed(){
    window.removeEventListener("scroll",this.change)
  }
};
</script>
