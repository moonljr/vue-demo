import Alert from './index.vue';
import Vue from 'vue';

Alert.newInstance = properties => {
  const props = properties || {};
  console.log('props', props);
  const Instance = new Vue({
    data: props,
    render(h) {
      return h(Alert, {
        props: props
      });
    }
  })
  const component = Instance.$mount();
  console.log('component', component);
  document.body.appendChild(component.$el);

  const alert = Instance.$children[0];
  console.log('Instance', Instance);
  console.log('alert', alert);
  return {
    add(noticeProps) {
      alert.add(noticeProps);
    },
    remove(name) {
      alert.remove(name);
    }
  }
};

export default Alert;
