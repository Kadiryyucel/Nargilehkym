import gridAll from "../components/GridAll.vue";
import foot from "../components/Footer"
export default {
    install:function(Vue){
        Vue.component("gridAll",gridAll);
        Vue.component("foot",foot)
    }
}