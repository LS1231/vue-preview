# Vue preview plugin

> 一 A Vue Integrated [PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe) Image Preview Plugin

![](https://img.shields.io/npm/dm/vue-preview.svg)
![](https://img.shields.io/npm/v/vue-preview.svg)

## 完善的地方（Improvement）

1、新增 @open（图片打开时）、@change（图片改变，即划到下一张或者上一张图片时）事件，并且返回当前图片编号(index)

2、新增 props[options]，组件全局引用，可以设置全局配置，也可以设置【私有配置】，组件的【私有配置】优先级高于全局 

    可配置 图片循环是否播放

    详细配置列表在这里：http://www.tzungtzu.com/web/article/detail/?mid=3&id=5

3、新增九宫格正方形图片布局，类似于微信九宫格那种

4、打开和关闭图片的动画更加流畅，不会像之前那样点一下图片突然图片放大一下这种感觉

5、使用方法的话，photoswipe 必须安装，然后把这整个repo放到你的目录里，我的repo名称是 vue-preview ，如下：
``` bash
    import VuePreview from '@/common/vue-preview/src/index'
    Vue.use(VuePreview, {
      mainClass: 'pswp--minimal--dark',
      barsSize: {top: 0, bottom: 0},
      captionEl: true,
      fullscreenEl: true,
      shareEl: true,
      bgOpacity: 0.85,
      tapToClose: true,
      tapToToggleControls: true
    })

```

也就是说在 main.js 中引入 vue-preview/src/index.js，这样就可以了

6、不懂的看 squaredPhotos.vue 这个文件，这个文件也是【九宫格 demo】

## Requirements

[PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)

## Demo

[Live Demo >>](https://ls1231.github.com/vue-preview/)

## Installation

``` bash
npm i vue-preview -S
```

## Usage

Notice:
 - This plugin currently support vue2.5 and above


### Install plugin

``` javascript
import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)

// with parameters install
Vue.use(preview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})
```

### Examples

```html
<template>
  <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
</template>

<script>
export default {
    data () {
      return {
        slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          }
        ]
      }
    },
    methods: {
      handleClose () {
        console.log('close event')
      }
    }
  }
</script>
```

### Prop

##### slide item options

|  Property | Description
| :---  | :---
| src   | main (large) image
| msrc  | small image
| alt   | image replacement text
| w     | image width
| h     | image height

### Events

|  Event name | Description | parameter
| :---  | :--- | :---
| close   | close gallery | nothing

## License

[MIT](https://github.com/LS1231/vue-security-code/blob/master/LICENSE) Copyright (c) 2018 liusong
