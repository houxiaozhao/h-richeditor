import richEditor from './components/richEditor';
const RichEditor = {};
RichEditor.install = function(Vue, options) {
  Vue.component('richEditor', richEditor);
};
export default RichEditor;
