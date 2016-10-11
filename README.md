# Vue preview plugin

> 一个Vue集成[PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)图片预览插件

## Requirements

[PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)

## Installation

``` bash
npm i vue-preview -S
```

## Usage

### Install plugin

``` javascript
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
```

### Examples

``` vue
<template>
  <img v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">
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

#### $preview.open(index, list, options)

参数说明：
| 参数        | 说明   |  类型  |  必需
| :----:    | :----:   | :----:  | :----:
| index     | 当前图片的索引值 |   Number     |    是
| list        |   图片列表   |   Array   |    是
| options        |    预览插件的配置选项（[参考PhotoSwipe配置](http://photoswipe.com/documentation/options.html)）    |  Object  |    否




#### $preview.close()


## License

![](https://img.shields.io/badge/license-MIT-blue.svg)
