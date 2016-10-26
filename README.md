# Vue preview plugin

> 一个Vue集成[PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)图片预览插件

![](https://img.shields.io/npm/dm/vue-preview.svg)
![](https://img.shields.io/npm/v/vue-preview.svg)

## Requirements

[PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)

## Installation

``` bash
npm i vue-preview -S
```

## Usage

使用须知：

* 插件目前仅支持vue2.0以上版本
* img标签上的class不能去掉

如果你是使用vue-cli生成的项目，可能需要你修改`webpack.base.conf.js`文件中的loaders，添加一个loader。
原因：插件编写中使用了es6的语法，需要进行代码编译
``` javascript
{
    test: /vue-preview.src.*?js$/,
    loader: 'babel'
}
```

### Install plugin

``` javascript
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
```

### Examples

```
<template>
  <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">
</template>

<script>
export default {
    data () {
      return {
        list: [{
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 400
        }, {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }]
      }
    }
  }
</script>
```

### Mothods

插件提供以下两个方法,```vm```代表组件实例

#### vm.$preview.open(index, list, options)

参数说明：

| 参数  | 说明  |  类型  |  必需
| :--: | :--: | :--:  | :--:
| index     |当前图片的索引值|   Number |    是
| list      |图片列表       |   Array  |    是
| options   |预览插件的配置选项（[参考PhotoSwipe配置](http://photoswipe.com/documentation/options.html)）  |  Object  |    否

#### vm.$preview.close()


## License

![](https://img.shields.io/badge/license-MIT-blue.svg)
