import gridAll from "../components/GridAll.vue";
import foot from "../components/Footer"
;import { Row, Column } from 'vue-grid-responsive';
export default {
    install:function(Vue){
        Vue.component("gridAll",gridAll);
        Vue.component("foot",foot)
        Vue.component('row', Row);
        Vue.component('column', Column);
    }
}