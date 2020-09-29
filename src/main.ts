import Vue from 'vue';
import App from './App.vue';
import './plugins/async-computed';
import './plugins/buefy';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');
