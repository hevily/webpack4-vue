
// 入口文件需要添加此段代码才能实现局部热更新，https://webpack.js.org/guides/hot-module-replacement/#enabling-hmr
if (module.hot) { module.hot.accept(); }

// 因为调用import()语法webpack会最后生成Promise语法， 所以transform-runtime解析不了， 需要先定义全局Promise语法让其解析
window.Promise = Promise;

// 加载css
require('~/assets/css/public');


import Vue from 'vue';
import Login from '~/pages/login/login';
import i18n from '~/i18n';


import '~/assets/js/ajax';// ajax加载


Vue.config.productionTip = false

new Vue({
    el: '#app',
    data: {},
    mounted() {
        // let data = {};
        // data.host = 'sit.cuniq.com';
        // data.region = '/hk';
        // data.acceptPortal = 1;
        // data.langId = 1;
        // this.$get( '/cq-ocms/site/detailMobile', data, (d) => {
        // console.log('d')
        // console.log(d)
        // })
    },
    i18n,
    render: h => h(Login)
})
