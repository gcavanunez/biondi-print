import { createApp } from 'vue';
import App from './App.vue';
import './global.css';
createApp(App)
  .directive('autogrow', {
    created(el) {
      el.addEventListener('input', () => {
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + 'px';
      });
    },
  })
  .mount('#app');
