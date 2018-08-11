import Vue from 'vue';
import App from './App.vue';
import RichEditor from './index';
Vue.use(RichEditor);
new Vue({
  el: '#app',
  render: h => h(App)
});
