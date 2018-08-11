# h-richeditor

> 简单的移动端富文本编辑器

## Build Setup

```bash
# install dependencies
npm i h-richeditor
## OR
yarn add h-richeditor
```

`main.js`中

```javascript
import Vue from 'vue';
import RichEditor from 'h-richeditor';
Vue.use(RichEditor);
```

组件中

```vue
<rich-editor :title.sync="title" :description.sync="description" placeholder="标题" contentplaceholder="内容" :hasTitle=true>
</rich-editor>
```

