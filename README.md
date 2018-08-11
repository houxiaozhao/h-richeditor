# h-richeditor

> 简单的移动端富文本编辑器

## 使用

```bash
# install dependencies
npm i h-richeditor
## OR
yarn add h-richeditor
```

#### `main.js`中

```javascript
import Vue from 'vue';
import RichEditor from 'h-richeditor';
Vue.use(RichEditor);
```

#### 组件中

```vue
<rich-editor :title.sync="title" :description.sync="description" placeholder="标题" contentplaceholder="内容" :hasTitle=true>
</rich-editor>
```

![](https://github.com/houxiaozhao/h-richeditor/blob/master/src/assets/img2.png?raw=true)

![](https://github.com/houxiaozhao/h-richeditor/blob/master/src/assets/img.png?raw=true)

#### 其他

- 使用了lrz依赖，用来压缩图片。

- 支持添加图片，粘贴图片到文本框。

- 如果不使用npm 安装，可以clone 下来直接复制`src/components`文件夹到项目中。自行修改样式。

- 逻辑比较简单 主要是使用了contenteditable  这个属性。

- 图片处理稍微复杂一些

  - 直接点击上传按钮添加图片

    得到图片后压缩，添加到img标签，然后添加到内容中。

  - 粘贴添加图片

    在div上添加监听粘贴事件，得到图片后把图片添加到div 上，然后还要把事件emit到父组件，在绑定的字符串中添加图片

- 实现了双向绑定，一定要添加sync修饰符