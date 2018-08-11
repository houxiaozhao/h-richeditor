<template>
  <div id="app">
    <rich-editor :title.sync="title" :description.sync="description" placeholder="标题" contentplaceholder="内容" :hasTitle=true>
    </rich-editor>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: '',
      description: ''
    };
  }
};
</script>

