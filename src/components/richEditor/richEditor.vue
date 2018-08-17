<template>
  <div style="width:100%">
    <div class="rich-editor" :style="{backgroundColor:this.bgColor,borderColor:this.bgColor}">
      <div class="content">
        <svg style="position: absolute;right: 0px;bottom: 0px;" t="1533975745402" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2587" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24">
          <path d="M629.76 814.08l-404.48-5.12c-51.2 0-92.16-40.96-92.16-94.72V396.8c0-51.2 40.96-94.72 94.72-94.72h563.2c51.2 0 94.72 40.96 94.72 94.72v335.36h-51.2V396.8c0-23.04-17.92-43.52-43.52-43.52h-563.2c-23.04 0-43.52 17.92-43.52 43.52v317.44c0 23.04 17.92 43.52 43.52 43.52l404.48 5.12-2.56 51.2z" fill="#333333" p-id="2588"></path>
          <path d="M718.2848 503.5264l155.4688 196.9152-40.192 31.744-155.4688-196.9408zM591.36 796.16L330.24 496.64l-153.6 161.28-35.84-35.84 192-199.68 296.96 340.48z" fill="#333333" p-id="2589"></path>
          <path d="M697.9072 517.1456l28.8256 42.3168-190.4128 129.7408-28.8256-42.3168z" fill="#333333" p-id="2590"></path>
        </svg>
        <input class="title-input" v-if="hasTitle" v-model="strTitle" :placeholder="placeholder||'标题'" />
        <input type="hidden" id="target" v-model="strContent">
        <editable class="editable" ref='editor' :content="strContent" :contentplaceholder="contentplaceholder" @addimg="addimg($event)" @update="strContent = $event">
        </editable>
        <input @change="getFile" class="input" id="imageUpload" type="file" name="fileInput" accept="image/*">
      </div>
    </div>
  </div>
</template>
<script>
import editable from './editable';
import lrz from 'lrz';
export default {
  name: 'richEditor',
  data() {
    return {
      strTitle: this.oldTitle || '',
      strContent: this.oldContent || ``
    };
  },
  props: {
    placeholder: String,
    contentplaceholder: String,
    oldContent: String,
    width: Number,
    oldTitle: String,
    hasTitle: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    description: String,
    title: String,
    bgColor: {
      type: String,
      default: '#cfd8dc'
    }
  },
  components: { editable },
  mounted() {},
  methods: {
    getFile($event) {
      let file = $event.target.files[0]; // 获取要上传的文件
      lrz(file).then(res => {
        this.$refs.editor.addImg(res.base64);
      });
    },
    addimg(imgurl) {
      this.strContent = this.strContent + '<br>' + '<img class="rich-img" src="' + imgurl + '" style="max-width:80%"><br>';
    }
  },
  watch: {
    strContent: function(o) {
      this.$emit('update:description', this.strContent);
    },
    strTitle: function(o) {
      this.$emit('update:title', this.strTitle);
    },
    title: function(o) {
      this.strTitle = o;
    },
    description: function(o) {
      this.strContent = o;
    }
  }
};
</script>
<style scoped >
.editable {
  height: 200px;
  width: 100%;
  user-select: text;
  overflow-y: auto;
  outline: none;
  cursor: text;
}
.content {
  position: relative;
  overflow: hidden;
  padding: 16px;
}
.title-input {
  width: 100%;
  border-style: none;
  background-color: transparent;
  line-height: 20px;
  padding: 8px 0;
  max-height: 32px;
  outline: none;
  -webkit-appearance: none;
}
.title-input:before {
  background-position: bottom;
  background-size: 3px 1px;
  background-repeat: repeat-x;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.87);
}
.input {
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 24px;
  opacity: 0;
}
.rich-editor {
  border-radius: 2px;
  min-width: 0;
  position: relative;
  text-decoration: none;
  -webkit-box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
}
</style>
